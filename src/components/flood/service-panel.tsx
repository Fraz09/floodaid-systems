import { useEffect, useMemo, useState } from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { pct, pct1, tonnes } from "@/lib/format";
import {
  buildDesk,
  busiestGatewayTonnes,
  shockSeed,
  simulate,
  type Desk,
  type DeskInput,
} from "@/lib/planning";

type Props = {
  desk: Desk;
  capacity: number;
  safety: number;
  cv: number;
  nodeStress: number;
  onCapacity: (n: number) => void;
  onSafety: (n: number) => void;
  onCv: (n: number) => void;
  onStress: (n: number) => void;
};

export function ServicePanel(props: Props) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);

  const current = useSim(props.desk, props);
  const otherInput: DeskInput = {
    ...props.desk.input,
    network: props.desk.input.network === "base" ? "flex" : "base",
  };
  const otherDesk = useMemo(() => buildDesk(otherInput), [otherInput.scenario, otherInput.network, otherInput.cyclone, otherInput.physicalShare, otherInput.stapleIndex, otherInput.clusterSize, otherInput.zoning]);
  const other = useSim(otherDesk, props);
  const busy = busiestGatewayTonnes(props.desk);

  return (
    <section className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
      <div className="border border-ink/10 bg-card p-4 sm:p-5">
        <p className="text-xs font-medium tracking-widest text-teal uppercase">Fill rate</p>
        <p className="mt-2 font-serif text-5xl text-ink tabular-nums">{current ? pct1(current.fillRate) : "—"}</p>
        <p className="mt-2 max-w-xl text-sm text-ink/75">
          Expected share of physical tonnes that can be filled. The humanitarian mark used here is 95%. This is a fast
          surrogate of a 10,000-run study: demand is shocked, then the largest gateway is derated if you set gateway stress.
          It is not a second MILP.
        </p>
        <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
          <Stat k="Runs at or above 95%" v={current ? pct(current.shareAt95) : "—"} />
          <Stat
            k={props.desk.input.network === "base" ? "Flexible network" : "Base network"}
            v={other ? pct1(other.fillRate) : "—"}
          />
          <Stat k="Largest gateway" v={`${busy.name} · ${tonnes(busy.tonnes)}`} />
        </dl>
        <div className="mt-5 h-48">
          {ready && current ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={current.histogram} barCategoryGap={2}>
                <XAxis dataKey="label" tick={{ fill: "var(--color-ink)", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip
                  cursor={{ fill: "var(--color-ink)", opacity: 0.05 }}
                  content={({ active, payload }) => {
                    if (!active || !payload?.length) return null;
                    const row = payload[0].payload as { label: string; count: number };
                    return (
                      <div className="border border-ink/15 bg-card px-2 py-1 text-xs text-ink">
                        Fill {row.label}% and up · {row.count} runs
                      </div>
                    );
                  }}
                />
                <Bar dataKey="count" fill="var(--color-teal)" isAnimationActive={false} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-full bg-ink/5" />
          )}
        </div>
        <p className="mt-2 text-xs text-ink/60">Histogram starts at 70% fill. Anything lower is stacked in the first bar.</p>
      </div>
      <div className="flex flex-col gap-4 border border-ink/10 bg-card p-4">
        <Slider
          label="Capacity positioned"
          hint="1.00 is the workbook mean. 0.90 is the tight case, where fill rate usually sits near 93%."
          min={0.7}
          max={1.15}
          step={0.01}
          value={props.capacity}
          format={(n) => n.toFixed(2)}
          onChange={props.onCapacity}
        />
        <Slider
          label="Safety stock"
          hint="Extra stock above the mean. This is what holds the 95% mark when demand runs hot."
          min={0}
          max={0.3}
          step={0.01}
          value={props.safety}
          format={(n) => pct(n)}
          onChange={props.onSafety}
        />
        <Slider
          label="Demand uncertainty"
          hint="Coefficient of variation on event tonnes."
          min={0.05}
          max={0.4}
          step={0.01}
          value={props.cv}
          format={(n) => pct(n)}
          onChange={props.onCv}
        />
        <Slider
          label="Stress on largest gateway"
          hint="Share of that gateway's tonnes you cannot move. Local purchase is not hit."
          min={0}
          max={0.5}
          step={0.01}
          value={props.nodeStress}
          format={(n) => pct(n)}
          onChange={props.onStress}
        />
        <div className="mt-auto grid grid-cols-1 gap-2">
          <button type="button" className="min-h-11 border border-ink/15 px-3 text-left text-sm" onClick={() => apply(props, 1, 0.08, 0.15, 0)}>
            Workbook posture
          </button>
          <button type="button" className="min-h-11 border border-ink/15 px-3 text-left text-sm" onClick={() => apply(props, 0.9, 0.08, 0.15, 0)}>
            Tight capacity
          </button>
          <button type="button" className="min-h-11 border border-ink/15 px-3 text-left text-sm" onClick={() => apply(props, 1, 0, 0.15, 0)}>
            No safety stock
          </button>
          <button type="button" className="min-h-11 border border-clay/40 px-3 text-left text-sm text-clay" onClick={() => apply(props, 1, 0.08, 0.15, 0.2)}>
            Largest gateway at 80%
          </button>
        </div>
      </div>
    </section>
  );
}

function apply(props: Props, capacity: number, safety: number, cv: number, stress: number) {
  props.onCapacity(capacity);
  props.onSafety(safety);
  props.onCv(cv);
  props.onStress(stress);
}

function useSim(desk: Desk, knobs: Props) {
  return useMemo(() => {
    const busy = busiestGatewayTonnes(desk);
    return simulate({
      importThroughBusiest: busy.tonnes,
      otherTonnes: Math.max(0, desk.physicalTonnes - busy.tonnes),
      capacity: knobs.capacity,
      safety: knobs.safety,
      cv: knobs.cv,
      nodeStress: knobs.nodeStress,
      runs: 1600,
      seed: shockSeed(desk.input.scenario, desk.input.cyclone),
    });
  }, [desk, knobs.capacity, knobs.safety, knobs.cv, knobs.nodeStress]);
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="border-t border-ink/10 pt-2">
      <dt className="text-xs text-ink/60">{k}</dt>
      <dd className="mt-1 text-sm font-medium text-ink tabular-nums">{v}</dd>
    </div>
  );
}

function Slider({
  label,
  hint,
  min,
  max,
  step,
  value,
  format,
  onChange,
}: {
  label: string;
  hint: string;
  min: number;
  max: number;
  step: number;
  value: number;
  format: (n: number) => string;
  onChange: (n: number) => void;
}) {
  const id = label.replace(/\s+/g, "-").toLowerCase();
  return (
    <label htmlFor={id} className="block">
      <span className="flex items-baseline justify-between gap-3 text-sm">
        <span className="font-medium">{label}</span>
        <span className="tabular-nums text-ink/70">{format(value)}</span>
      </span>
      <input
        id={id}
        className="mt-2 min-h-11"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <span className="mt-1 block text-xs text-ink/60">{hint}</span>
    </label>
  );
}
