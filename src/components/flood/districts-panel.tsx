import { people, tonnes } from "@/lib/format";
import { AGENCIES, DIVISIONS, instrumentLabel, type AgencyId, type Desk } from "@/lib/planning";

type Props = {
  desk: Desk;
  query: string;
  division: string;
  showAll: boolean;
  onQuery: (q: string) => void;
  onDivision: (d: string) => void;
  onShowAll: (v: boolean) => void;
  onCluster: (n: 1000 | 5000 | 10000) => void;
  onZoning: (v: boolean) => void;
  onSelect: (name: string) => void;
};

export function DistrictsPanel(props: Props) {
  const rows = props.desk.districts
    .filter((d) => (props.showAll ? true : d.affected > 0))
    .filter((d) => props.division === "all" || d.seed.division === props.division)
    .filter((d) => d.seed.name.toLowerCase().includes(props.query.trim().toLowerCase()))
    .sort((a, b) => b.affected - a.affected);

  return (
    <section className="grid min-w-0 gap-4 lg:grid-cols-[16rem_minmax(0,1fr)]">
      <div className="flex flex-col gap-4 border border-ink/10 bg-card p-4">
        <label className="block text-sm font-medium" htmlFor="cluster-size">
          Cluster size
        </label>
        <div id="cluster-size" className="grid grid-cols-3 gap-2" role="radiogroup" aria-label="Cluster size">
          {([1000, 5000, 10000] as const).map((n) => {
            const on = props.desk.input.clusterSize === n;
            return (
              <button
                key={n}
                type="button"
                role="radio"
                aria-checked={on}
                className={`min-h-11 border px-2 text-sm tabular-nums ${on ? "border-teal bg-teal text-card" : "border-ink/15"}`}
                onClick={() => props.onCluster(n)}
              >
                {n.toLocaleString("en-US")}
              </button>
            );
          })}
        </div>
        <p className="text-xs text-ink/65">
          {props.desk.clusters.toLocaleString("en-US")} clusters across the caseload. One local organizer per cluster, with the NGO that already works there.
        </p>
        <button
          type="button"
          aria-pressed={props.desk.input.zoning}
          className={`min-h-11 border px-3 text-left text-sm ${props.desk.input.zoning ? "border-teal bg-teal text-card" : "border-ink/15"}`}
          onClick={() => props.onZoning(!props.desk.input.zoning)}
        >
          {props.desk.input.zoning ? "Zones are shared" : "Zones are not shared"}
        </button>
        <p className="text-xs text-ink/65">
          If agencies waive privacy, each division is given to one operator so the same households are not served twice and the tail is not skipped.
        </p>
        {props.desk.input.zoning ? (
          <ul className="flex flex-col gap-2">
            {props.desk.agencies.map((a) => (
              <li key={a.id} className="border-t border-ink/10 pt-2 text-sm">
                <p className="font-medium">{a.name}</p>
                <p className="text-ink/70 tabular-nums">
                  {people(a.people)} · {a.districts} districts
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="flex flex-col gap-2 text-sm">
            <li className="border-t border-ink/10 pt-2">
              <p className="font-medium">Likely overlap</p>
              <p className="text-ink/70 tabular-nums">{people(props.desk.uncoordinated.overlap)}</p>
              <p className="text-xs text-ink/60">The most visible half of the caseload, where every agency shows up.</p>
            </li>
            <li className="border-t border-ink/10 pt-2">
              <p className="font-medium">Likely missed</p>
              <p className="text-clay tabular-nums">{people(props.desk.uncoordinated.excluded)}</p>
              <p className="text-xs text-ink/60">The tail, if each agency only chases the obvious districts. An illustration, not a field count.</p>
            </li>
          </ul>
        )}
      </div>
      <div className="min-w-0 overflow-hidden border border-ink/10 bg-card">
        <div className="flex flex-col gap-3 border-b border-ink/10 p-3 sm:flex-row">
          <label className="min-w-0 flex-1 text-sm">
            <span className="sr-only">Search districts</span>
            <input
              value={props.query}
              onChange={(e) => props.onQuery(e.target.value)}
              placeholder="Search districts"
              className="min-h-11 w-full border border-ink/15 bg-card px-3 text-ink outline-none focus-visible:outline-2 focus-visible:outline-teal"
            />
          </label>
          <label className="text-sm">
            <span className="sr-only">Division</span>
            <select
              value={props.division}
              onChange={(e) => props.onDivision(e.target.value)}
              className="min-h-11 w-full border border-ink/15 bg-card px-3 sm:w-auto"
            >
              <option value="all">All divisions</option>
              {DIVISIONS.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </label>
          <button
            type="button"
            aria-pressed={props.showAll}
            className="min-h-11 border border-ink/15 px-3 text-sm"
            onClick={() => props.onShowAll(!props.showAll)}
          >
            {props.showAll ? "Showing all 64" : "In this plan"}
          </button>
        </div>
        <div className="max-h-[32rem] overflow-auto">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <thead className="sticky top-0 bg-card text-xs tracking-wide text-ink/60 uppercase">
              <tr>
                <th className="px-3 py-3 font-medium">District</th>
                <th className="px-3 py-3 font-medium">People</th>
                <th className="px-3 py-3 font-medium">Goods</th>
                <th className="px-3 py-3 font-medium">Instrument</th>
                <th className="px-3 py-3 font-medium">Clusters</th>
                <th className="px-3 py-3 font-medium">Zone</th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-3 py-8 text-ink/60">
                    No districts match.
                  </td>
                </tr>
              ) : (
                rows.map((d) => (
                  <tr key={d.seed.name} className="border-t border-ink/10">
                    <td className="px-3 py-2">
                      <button type="button" className="min-h-11 text-left font-medium" onClick={() => props.onSelect(d.seed.name)}>
                        {d.seed.name}
                        <span className="mt-0.5 block text-xs font-normal text-ink/55">{d.seed.division}</span>
                      </button>
                    </td>
                    <td className="px-3 py-2 tabular-nums">{d.affected ? people(d.affected) : "—"}</td>
                    <td className="px-3 py-2 tabular-nums">{d.physicalTonnes ? tonnes(d.physicalTonnes) : "—"}</td>
                    <td className="px-3 py-2">{instrumentLabel(d.instrument)}</td>
                    <td className="px-3 py-2 tabular-nums">{d.clusters ? d.clusters.toLocaleString("en-US") : "—"}</td>
                    <td className="px-3 py-2">{props.desk.input.zoning ? agencyName(d.owner) : "Open"}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function agencyName(id: AgencyId | null) {
  return AGENCIES.find((a) => a.id === id)?.name ?? "—";
}
