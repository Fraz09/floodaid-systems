import { GATEWAYS, type Desk, type DeskDistrict } from "@/lib/planning";

type Props = {
  desk: Desk;
  selected: string | null;
  onSelect: (name: string) => void;
};

export function OpsMap({ desk, selected, onSelect }: Props) {
  const xs = [
    ...desk.districts.map((d) => d.seed.x),
    ...GATEWAYS.map((g) => g.x),
    ...desk.dcTonnes.map((d) => d.x),
  ];
  const ys = [
    ...desk.districts.map((d) => d.seed.y),
    ...GATEWAYS.map((g) => g.y),
    ...desk.dcTonnes.map((d) => d.y),
  ];
  const minX = Math.min(...xs) - 36;
  const maxX = Math.max(...xs) + 48;
  const minY = Math.min(...ys) - 28;
  const maxY = Math.max(...ys) + 28;
  const vb = `${minX} ${-maxY} ${maxX - minX} ${maxY - minY}`;

  const maxLeg = Math.max(1, ...desk.active.flatMap((d) => d.flows.map((f) => f.tonnes)), ...desk.portLegs.map((p) => p.tonnes));

  const ranked = new Set(desk.active.slice(0, 5).map((d) => d.seed.name));

  return (
    <div className="relative min-w-0">
      <svg
        viewBox={vb}
        role="img"
        aria-label="Operational map. Kilometres from Dhaka, north at the top. Lines are aid flows."
        className="block h-auto w-full max-w-full"
      >
        <rect x={minX} y={-maxY} width={maxX - minX} height={maxY - minY} fill="var(--color-card)" />
        {grid(minX, maxX, minY, maxY)}
        <Scale minX={minX} maxY={maxY} />
        {desk.portLegs.map((leg) => (
          <line
            key={`${leg.port}-${leg.division}`}
            x1={leg.x1}
            y1={-leg.y1}
            x2={leg.x2}
            y2={-leg.y2}
            stroke="var(--color-teal)"
            strokeWidth={stroke(leg.tonnes, maxLeg)}
            strokeDasharray="3 2"
            strokeLinecap="round"
            opacity={0.85}
            pointerEvents="none"
          />
        ))}
        {desk.active.flatMap((d) =>
          d.flows.map((f) => {
            const dc = desk.dcTonnes.find((x) => x.division === f.division);
            if (!dc) return null;
            const hot = selected === d.seed.name;
            return (
              <line
                key={`${d.seed.name}-${f.division}`}
                x1={dc.x}
                y1={-dc.y}
                x2={d.seed.x}
                y2={-d.seed.y}
                stroke={hot ? "var(--color-clay)" : "var(--color-ink)"}
                strokeWidth={stroke(f.tonnes, maxLeg)}
                strokeLinecap="round"
                opacity={selected && !hot ? 0.18 : 0.8}
                pointerEvents="none"
              />
            );
          }),
        )}
        {desk.districts.map((d) => (
          <DistrictDot
            key={d.seed.name}
            district={d}
            selected={selected === d.seed.name}
            labeled={ranked.has(d.seed.name) || selected === d.seed.name}
            onSelect={onSelect}
          />
        ))}
        {desk.dcTonnes.map((dc) => (
          <g key={dc.division}>
            <rect
              x={dc.x - 4.2}
              y={-dc.y - 4.2}
              width={8.4}
              height={8.4}
              fill="var(--color-card)"
              stroke="var(--color-ink)"
              strokeWidth={1.4}
              pointerEvents="none"
            />
            <text
              x={dc.x + 7}
              y={-dc.y + 2}
              fill="var(--color-ink)"
              fontSize={9}
              fontFamily="Outfit, sans-serif"
              pointerEvents="none"
            >
              {dc.division} DC
            </text>
          </g>
        ))}
        {desk.gateways
          .filter((g) => g.tonnes > 1)
          .map((g) => (
            <g key={g.gateway.port}>
              <polygon points={diamond(g.gateway.x, -g.gateway.y, 5.2)} fill="var(--color-teal)" pointerEvents="none" />
              <text
                x={g.gateway.x + 8}
                y={-g.gateway.y - 6}
                fill="var(--color-teal)"
                fontSize={8.5}
                fontFamily="Outfit, sans-serif"
                pointerEvents="none"
              >
                {g.gateway.short}
              </text>
            </g>
          ))}
      </svg>
      <p className="border-t border-ink/10 px-3 py-2 text-xs text-ink/70">
        Kilometres from Dhaka. Squares are divisional DCs. Diamonds are gateways. Dashed lines are inbound.
      </p>
    </div>
  );
}

function DistrictDot({
  district,
  selected,
  labeled,
  onSelect,
}: {
  district: DeskDistrict;
  selected: boolean;
  labeled: boolean;
  onSelect: (name: string) => void;
}) {
  const active = district.affected > 0;
  const r = active ? 3.2 + Math.sqrt(district.affected) / 900 : 1.7;
  const fill = !active
    ? "var(--color-ink)"
    : district.instrument === "cash"
      ? "var(--color-teal)"
      : district.instrument === "rehab"
        ? "var(--color-ink)"
        : "var(--color-clay)";
  return (
    <g>
      <circle
        cx={district.seed.x}
        cy={-district.seed.y}
        r={selected ? r + 2.4 : r}
        fill={fill}
        opacity={active ? 1 : 0.28}
        stroke={selected ? "var(--color-card)" : "transparent"}
        strokeWidth={selected ? 1.5 : 0}
        pointerEvents="none"
      />
      <circle
        cx={district.seed.x}
        cy={-district.seed.y}
        r={26}
        fill="transparent"
        className="cursor-pointer"
        role="button"
        tabIndex={0}
        aria-label={`${district.seed.name}, ${district.seed.division}`}
        onClick={() => onSelect(district.seed.name)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onSelect(district.seed.name);
          }
        }}
      />
      {labeled && active ? (
        <text
          x={district.seed.x + r + 2}
          y={-district.seed.y - r - 1}
          fill="var(--color-ink)"
          fontSize={8}
          fontFamily="Outfit, sans-serif"
          pointerEvents="none"
        >
          {district.seed.name}
        </text>
      ) : null}
    </g>
  );
}

function grid(minX: number, maxX: number, minY: number, maxY: number) {
  const lines = [];
  for (let x = Math.ceil(minX / 100) * 100; x <= maxX; x += 100) {
    lines.push(
      <line
        key={`vx${x}`}
        x1={x}
        x2={x}
        y1={-maxY}
        y2={-minY}
        stroke="var(--color-ink)"
        strokeOpacity={0.08}
        strokeWidth={0.6}
      />,
    );
  }
  for (let y = Math.ceil(minY / 100) * 100; y <= maxY; y += 100) {
    lines.push(
      <line
        key={`hy${y}`}
        y1={-y}
        y2={-y}
        x1={minX}
        x2={maxX}
        stroke="var(--color-ink)"
        strokeOpacity={0.08}
        strokeWidth={0.6}
      />,
    );
  }
  return <g>{lines}</g>;
}

function Scale({ minX, maxY }: { minX: number; maxY: number }) {
  const x = minX + 16;
  const y = -maxY + 18;
  return (
    <g>
      <line x1={x} x2={x + 100} y1={y} y2={y} stroke="var(--color-ink)" strokeWidth={1.2} />
      <line x1={x} x2={x} y1={y - 3} y2={y + 3} stroke="var(--color-ink)" strokeWidth={1.2} />
      <line x1={x + 100} x2={x + 100} y1={y - 3} y2={y + 3} stroke="var(--color-ink)" strokeWidth={1.2} />
      <text x={x} y={y + 12} fill="var(--color-ink)" fontSize={8} fontFamily="Outfit, sans-serif">
        100 km
      </text>
      <text x={x + 118} y={y + 4} fill="var(--color-ink)" fontSize={8} fontFamily="Outfit, sans-serif">
        N
      </text>
      <polygon points={`${x + 128},${y - 8} ${x + 124},${y + 2} ${x + 132},${y + 2}`} fill="var(--color-ink)" />
    </g>
  );
}

function stroke(tonnes: number, max: number) {
  return 0.7 + 5 * Math.sqrt(tonnes / max);
}

function diamond(x: number, y: number, r: number) {
  return `${x},${y - r} ${x + r},${y} ${x},${y + r} ${x - r},${y}`;
}
