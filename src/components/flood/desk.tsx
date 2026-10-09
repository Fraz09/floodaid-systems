import { useMemo, useState, type ReactNode } from "react";
import { Activity, Map as MapIcon, Users } from "lucide-react";
import { kg, pct, people, tonnes } from "@/lib/format";
import {
  PHASES,
  buildDesk,
  defaultPhysical,
  instrumentLabel,
  phaseFor,
  type DeskDistrict,
  type NetworkId,
  type ScenarioId,
  type ViewId,
} from "@/lib/planning";
import { cn } from "@/lib/cn";
import { DistrictsPanel } from "./districts-panel";
import { OpsMap } from "./ops-map";
import { ServicePanel } from "./service-panel";

const SCENARIOS: { id: ScenarioId; label: string; hint: string }[] = [
  { id: "north", label: "North flash", hint: "2–4 weeks, markets often open" },
  { id: "south", label: "South sustained", hint: "Into the second month" },
  { id: "stochastic", label: "Stochastic", hint: "Preposition for the blend" },
];

export function Desk() {
  const [scenario, setScenario] = useState<ScenarioId>("north");
  const [network, setNetwork] = useState<NetworkId>("base");
  const [cyclone, setCyclone] = useState(false);
  const [physicalOverride, setPhysicalOverride] = useState<number | null>(null);
  const [stapleIndex, setStapleIndex] = useState(100);
  const [clusterSize, setClusterSize] = useState<1000 | 5000 | 10000>(5000);
  const [zoning, setZoning] = useState(true);
  const [view, setView] = useState<ViewId>("map");
  const [selected, setSelected] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [division, setDivision] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [day, setDay] = useState(0);
  const [capacity, setCapacity] = useState(1);
  const [safety, setSafety] = useState(0.08);
  const [cv, setCv] = useState(0.15);
  const [nodeStress, setNodeStress] = useState(0);

  const physicalShare = physicalOverride ?? defaultPhysical(scenario, cyclone);
  const desk = useMemo(
    () =>
      buildDesk({
        scenario,
        network,
        cyclone,
        physicalShare,
        stapleIndex,
        clusterSize,
        zoning,
      }),
    [scenario, network, cyclone, physicalShare, stapleIndex, clusterSize, zoning],
  );
  const picked = desk.districts.find((d) => d.seed.name === selected) ?? null;
  const phase = phaseFor(day);
  const importShare = desk.physicalTonnes > 0 ? desk.importTonnes / desk.physicalTonnes : 0;

  function chooseScenario(id: ScenarioId) {
    setScenario(id);
    setCyclone(false);
    setPhysicalOverride(null);
    setSelected(null);
    setShowAll(false);
  }

  return (
    <main className="mx-auto w-full max-w-6xl overflow-x-hidden px-4 pt-6 pb-20 sm:px-6">
      <header className="border-b border-ink/10 pb-5">
        <div className="mb-4 h-1 w-16 bg-teal" />
        <p className="text-xs font-medium tracking-widest text-teal uppercase">FloodAid Systems</p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h1 className="font-serif text-4xl text-ink sm:text-5xl">Planning desk</h1>
          <p className="max-w-sm text-sm text-ink/70">
            Bangladesh flood aid. One week from the river signal to a household handover.
          </p>
        </div>
      </header>

      <section className="mt-5 grid gap-3" aria-label="Scenario">
        <div className="grid gap-2 sm:grid-cols-3" role="radiogroup" aria-label="Flood scenario">
          {SCENARIOS.map((s) => {
            const on = scenario === s.id;
            return (
              <button
                key={s.id}
                type="button"
                role="radio"
                aria-checked={on}
                onClick={() => chooseScenario(s.id)}
                className={cn(
                  "min-h-11 border px-3 py-2 text-left",
                  on ? "border-teal bg-teal text-card" : "border-ink/15 bg-card text-ink",
                )}
              >
                <span className="block text-sm font-medium">{s.label}</span>
                <span className={cn("block text-xs", on ? "text-card/80" : "text-ink/60")}>{s.hint}</span>
              </button>
            );
          })}
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <div className="grid flex-1 grid-cols-2 gap-2" role="radiogroup" aria-label="Network">
            {(
              [
                ["base", "Base network"],
                ["flex", "Flexible network"],
              ] as const
            ).map(([id, label]) => {
              const on = network === id;
              return (
                <button
                  key={id}
                  type="button"
                  role="radio"
                  aria-checked={on}
                  onClick={() => setNetwork(id)}
                  className={cn(
                    "min-h-11 border px-3 text-sm font-medium",
                    on ? "border-ink bg-ink text-card" : "border-ink/15 bg-card",
                  )}
                >
                  {label}
                </button>
              );
            })}
          </div>
          <button
            type="button"
            aria-pressed={cyclone}
            onClick={() => {
              setCyclone((v) => !v);
              setPhysicalOverride(null);
            }}
            className={cn(
              "min-h-11 border px-3 text-left text-sm sm:w-56",
              cyclone ? "border-clay bg-clay text-card" : "border-ink/15 bg-card",
            )}
          >
            <span className="block font-medium">Cyclone coincidence</span>
            <span className={cn("block text-xs", cyclone ? "text-card/80" : "text-ink/60")}>
              {cyclone ? "On. Ports and shelter stressed." : "Off. Flood only."}
            </span>
          </button>
        </div>
      </section>

      <section className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4" aria-label="Caseload">
        <Kpi k="People in the plan" v={people(desk.affected)} />
        <Kpi k="Reached with cash" v={people(desk.cashPeople)} />
        <Kpi k="Physical tonnes" v={tonnes(desk.physicalTonnes)} />
        <Kpi k={`Clusters of ${clusterSize.toLocaleString("en-US")}`} v={desk.clusters.toLocaleString("en-US")} />
      </section>

      <section className="mt-4 border border-ink/10 bg-card p-4">
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="font-serif text-2xl">{phase.k}</h2>
          <p className="text-xs text-ink/60 tabular-nums">Day {day}</p>
        </div>
        <p className="mt-1 max-w-2xl text-sm text-ink/75">{phase.d}</p>
        <label className="mt-3 block text-xs text-ink/60" htmlFor="day">
          Move through the response week
          <input
            id="day"
            className="mt-2"
            type="range"
            min={0}
            max={7}
            step={1}
            value={day}
            onChange={(e) => setDay(Number(e.target.value))}
          />
        </label>
        <ol className="mt-2 grid grid-cols-5 gap-1 text-xs">
          {PHASES.map((p) => (
            <li key={p.k} className={cn("border-t-2 pt-1", day >= p.at ? "border-teal text-ink" : "border-ink/15 text-ink/45")}>
              {p.k}
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-5 flex gap-2 overflow-x-auto" role="tablist" aria-label="Desk sections">
        <Tab id="map" view={view} setView={setView} icon={<MapIcon size={16} aria-hidden />} label="Network" />
        <Tab id="districts" view={view} setView={setView} icon={<Users size={16} aria-hidden />} label="Districts" />
        <Tab id="service" view={view} setView={setView} icon={<Activity size={16} aria-hidden />} label="Service level" />
      </div>

      <div className="mt-4" role="tabpanel">
        {view === "map" ? (
          <div className="mt-4 grid min-w-0 items-start gap-4 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,20rem)]">
            <div className="min-w-0 overflow-hidden border border-ink/10 bg-card">
              <OpsMap
                desk={desk}
                selected={selected}
                onSelect={(name) => {
                  setSelected(name);
                  setView("map");
                }}
              />
              <div className="flex min-w-0 gap-2 overflow-x-auto border-t border-ink/10 p-3">
                {desk.active.map((d) => (
                  <button
                    key={d.seed.name}
                    type="button"
                    onClick={() => setSelected(d.seed.name)}
                    className={cn(
                      "min-h-11 shrink-0 border px-3 text-sm",
                      selected === d.seed.name ? "border-ink bg-ink text-card" : "border-ink/15",
                    )}
                  >
                    {d.seed.name}
                  </button>
                ))}
              </div>
            </div>
            <aside className="min-w-0 border border-ink/10 bg-card p-4">
              <p className="text-xs font-medium tracking-widest text-teal uppercase">{desk.weeks} week disruption</p>
              <h2 className="mt-1 font-serif text-3xl">{desk.title}</h2>
              <p className="mt-2 text-sm text-ink/75">{desk.lede}</p>
              <p className="mt-3 text-sm">{desk.instrumentLine}</p>
              <p className="mt-3 text-xs text-ink/60">
                Workbook ration {kg(desk.kgPerPerson)} per person in the caseload. {desk.regimeLabel}.
              </p>

              <label className="mt-5 block text-sm" htmlFor="physical">
                <span className="flex justify-between gap-3">
                  <span className="font-medium">Physical share of the caseload</span>
                  <span className="tabular-nums text-ink/70">{pct(physicalShare)}</span>
                </span>
                <input
                  id="physical"
                  className="mt-2"
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={physicalShare}
                  onChange={(e) => setPhysicalOverride(Number(e.target.value))}
                />
              </label>
              <label className="mt-4 block text-sm" htmlFor="staple">
                <span className="flex justify-between gap-3">
                  <span className="font-medium">Staple price index</span>
                  <span className="tabular-nums text-ink/70">{stapleIndex}</span>
                </span>
                <input
                  id="staple"
                  className="mt-2"
                  type="range"
                  min={70}
                  max={150}
                  step={1}
                  value={stapleIndex}
                  onChange={(e) => setStapleIndex(Number(e.target.value))}
                />
                <span className="mt-1 block text-xs text-ink/60">
                  100 keeps the workbook split. Above 100, local buying is pulled back so aid does not inflame prices.
                </span>
              </label>

              <div className="mt-4">
                <div className="flex h-2 w-full overflow-hidden bg-ink/15">
                  <div className="h-full bg-teal" style={{ width: `${importShare * 100}%` }} />
                </div>
                <p className="mt-2 flex justify-between text-xs text-ink/70 tabular-nums">
                  <span>Import {tonnes(desk.importTonnes)}</span>
                  <span>Local {tonnes(desk.localTonnes)}</span>
                </p>
              </div>

              {desk.singleGateway ? (
                <p className="mt-4 border border-clay/40 bg-clay/10 p-3 text-sm text-clay">
                  More than 80% of imports in this network come through {desk.singleGateway}. One closure stalls the physical plan. The flexible network is the comparison.
                </p>
              ) : null}

              <ul className="mt-4 flex flex-col gap-3">
                {desk.gateways.map((g) => (
                  <li key={g.gateway.port}>
                    <div className="flex items-baseline justify-between gap-2 text-sm">
                      <span className="font-medium">{g.gateway.short}</span>
                      <span className="text-ink/70 tabular-nums">{g.tonnes > 1 ? tonnes(g.tonnes) : "Idle"}</span>
                    </div>
                    <div className="mt-1 h-1.5 bg-ink/10">
                      <div
                        className={cn("h-full", g.openIndex < 0.5 ? "bg-clay" : "bg-teal")}
                        style={{ width: `${Math.max(4, Math.min(100, g.openIndex * 100))}%` }}
                      />
                    </div>
                    <p className="mt-1 text-xs text-ink/55">
                      Throughput {g.throughput.toFixed(2)} vs {g.regular.toFixed(2)} regular, million t/month. {g.gateway.note}
                    </p>
                  </li>
                ))}
              </ul>

              {picked ? <DistrictCard district={picked} zoned={zoning} /> : null}
            </aside>
          </div>
        ) : null}

        {view === "districts" ? (
          <DistrictsPanel
            desk={desk}
            query={query}
            division={division}
            showAll={showAll}
            onQuery={setQuery}
            onDivision={setDivision}
            onShowAll={setShowAll}
            onCluster={setClusterSize}
            onZoning={setZoning}
            onSelect={(name) => {
              setSelected(name);
              setView("map");
            }}
          />
        ) : null}

        {view === "service" ? (
          <ServicePanel
            desk={desk}
            capacity={capacity}
            safety={safety}
            cv={cv}
            nodeStress={nodeStress}
            onCapacity={setCapacity}
            onSafety={setSafety}
            onCv={setCv}
            onStress={setNodeStress}
          />
        ) : null}
      </div>

      <details className="mt-8 border-t border-ink/10 pt-4 text-sm text-ink/70">
        <summary className="min-h-11 cursor-pointer font-medium text-ink">Where the numbers come from</summary>
        <div className="mt-3 max-w-3xl space-y-3">
          <p>
            District coordinates are kilometres from Dhaka. Populations, aid tonnes, and the divisional flows are the scenario workbook solutions: a concentrated network and a flexible one, for a northern event, a southern event, and a stochastic blend.
          </p>
          <p>
            Northern and southern caseloads use the full district population in those files (about 20 kg per person in the north, about 40 kg in the south). The stochastic file uses a probability-weighted affected population, and only part of its tonnes arrive through a gateway. The rest is treated as local purchase at the divisional DC.
          </p>
          <p>
            Gateway indices are the workbook throughput figures, in million tonnes per month, for regular trade, a northern flood, a southern cyclone, and a worst case. They describe how open a port is. They are not a live feed from the flood forecasting centre.
          </p>
          <p>
            FloodAid Systems is the planning desk behind that library. Masrur Rahman Faraz. frazbd2@gmail.com.
          </p>
        </div>
      </details>
    </main>
  );
}

function Kpi({ k, v }: { k: string; v: string }) {
  return (
    <div className="border border-ink/10 bg-card px-3 py-3">
      <p className="text-xs text-ink/60">{k}</p>
      <p className="mt-1 font-serif text-2xl text-ink tabular-nums sm:text-3xl">{v}</p>
    </div>
  );
}

function Tab({
  id,
  view,
  setView,
  icon,
  label,
}: {
  id: ViewId;
  view: ViewId;
  setView: (v: ViewId) => void;
  icon: ReactNode;
  label: string;
}) {
  const on = view === id;
  return (
    <button
      type="button"
      role="tab"
      aria-selected={on}
      onClick={() => setView(id)}
      className={cn(
        "inline-flex min-h-11 shrink-0 items-center gap-2 border px-3 text-sm font-medium",
        on ? "border-ink bg-ink text-card" : "border-ink/15 bg-card text-ink",
      )}
    >
      {icon}
      {label}
    </button>
  );
}

function DistrictCard({ district, zoned }: { district: DeskDistrict; zoned: boolean }) {
  return (
    <div className="mt-5 border-t border-ink/10 pt-4">
      <p className="text-xs tracking-widest text-ink/50 uppercase">{district.seed.division}</p>
      <h3 className="font-serif text-2xl">{district.seed.name}</h3>
      <p className="mt-1 text-sm">{instrumentLabel(district.instrument)} is the lead instrument.</p>
      <dl className="mt-3 grid grid-cols-2 gap-2 text-sm">
        <div>
          <dt className="text-xs text-ink/55">People</dt>
          <dd className="tabular-nums">{people(district.affected)}</dd>
        </div>
        <div>
          <dt className="text-xs text-ink/55">Goods</dt>
          <dd className="tabular-nums">{tonnes(district.physicalTonnes)}</dd>
        </div>
        <div>
          <dt className="text-xs text-ink/55">Cash caseload</dt>
          <dd className="tabular-nums">{people(district.cashPeople)}</dd>
        </div>
        <div>
          <dt className="text-xs text-ink/55">Clusters</dt>
          <dd className="tabular-nums">{district.clusters.toLocaleString("en-US")}</dd>
        </div>
      </dl>
      <ul className="mt-3 text-sm text-ink/75">
        {district.flows.map((f) => (
          <li key={f.division} className="flex justify-between gap-3 border-t border-ink/10 py-1 tabular-nums">
            <span>{f.division} DC</span>
            <span>{tonnes(f.tonnes)}</span>
          </li>
        ))}
      </ul>
      {zoned && district.owner ? (
        <p className="mt-2 text-xs text-ink/60">
          Zoned to {district.owner === "gov" ? "Government" : district.owner === "un" ? "United Nations" : "Local NGOs"}.
        </p>
      ) : null}
    </div>
  );
}
