import {
  DISTRICTS,
  PLANS,
  type DivisionName,
  type DistrictSeed,
  type PortName,
} from "@/data/network";

export type ScenarioId = "north" | "south" | "stochastic";
export type NetworkId = "base" | "flex";
export type Instrument = "cash" | "physical" | "rehab" | "watch";
export type ViewId = "map" | "districts" | "service";

export const DIVISIONS: DivisionName[] = [
  "Dhaka",
  "Chattogram",
  "Mymensingh",
  "Sylhet",
  "Rangpur",
  "Rajshahi",
  "Khulna",
  "Barishal",
];

export const DC_XY: Record<DivisionName, { x: number; y: number }> = {
  Dhaka: { x: 0, y: 0 },
  Chattogram: { x: 144.4, y: -163.7 },
  Mymensingh: { x: -1, y: 104 },
  Sylhet: { x: 147.9, y: 120.4 },
  Rangpur: { x: -115.5, y: 214.6 },
  Rajshahi: { x: -183.6, y: 62.6 },
  Khulna: { x: -88.6, y: -107.1 },
  Barishal: { x: -6, y: -123.1 },
};

export type Gateway = {
  port: PortName;
  name: string;
  short: string;
  x: number;
  y: number;
  note: string;
};

export const GATEWAYS: Gateway[] = [
  {
    port: "Dhaka",
    name: "Dhaka Airport",
    short: "Air",
    x: 22,
    y: -18,
    note: "Medicines and kits. Not a bulk-food inlet.",
  },
  {
    port: "Chattogram",
    name: "Chattogram seaport",
    short: "Chattogram",
    x: 162,
    y: -186,
    note: "About 90% of national trade in an ordinary year.",
  },
  {
    port: "Bagerhat",
    name: "Mongla, via Bagerhat",
    short: "Mongla",
    x: -80,
    y: -148,
    note: "Southwest seaport. Relief valve when Chattogram is tight.",
  },
  {
    port: "Jashore",
    name: "Benapole land border",
    short: "Benapole",
    x: -148,
    y: -52,
    note: "India lane, into the southwest.",
  },
  {
    port: "Sylhet",
    name: "Tamabil border",
    short: "Tamabil",
    x: 172,
    y: 148,
    note: "Northeast land border, beside the Sylhet DC.",
  },
];

/** National gateway throughput index, million tonnes per month, from the workbook. */
export const GATEWAY_INDEX: Record<"regular" | "north" | "south" | "worst", Record<PortName, number>> = {
  regular: { Dhaka: 0.04, Chattogram: 2.75, Sylhet: 0.2, Jashore: 0.4, Bagerhat: 0.4 },
  north: { Dhaka: 0.024, Chattogram: 2.75, Sylhet: 0.1, Jashore: 0.4, Bagerhat: 0.35 },
  south: { Dhaka: 0.06, Chattogram: 0.8, Sylhet: 0.2, Jashore: 0.4, Bagerhat: 0.05 },
  worst: { Dhaka: 0.028, Chattogram: 1, Sylhet: 0.1, Jashore: 0.2, Bagerhat: 0.1 },
};

const COASTAL = new Set([
  "Satkhira",
  "Khulna",
  "Bagerhat",
  "Barguna",
  "Patuakhali",
  "Bhola",
  "Jhalokati",
  "Pirojpur",
  "Barishal",
  "Lakshmipur",
  "Noakhali",
  "Feni",
  "Chattogram",
  "Cox's Bazar",
]);

const NORTH_NAMES = new Set(
  DISTRICTS.filter((d) => (PLANS.north.districts[d.name]?.demand ?? 0) > 0).map((d) => d.name),
);

export const AGENCIES = [
  { id: "gov", name: "Government" },
  { id: "un", name: "United Nations" },
  { id: "ngo", name: "Local NGOs" },
] as const;

export type AgencyId = (typeof AGENCIES)[number]["id"];

export const HOUSEHOLD = 4.2;

export type DeskInput = {
  scenario: ScenarioId;
  network: NetworkId;
  cyclone: boolean;
  physicalShare: number;
  stapleIndex: number;
  clusterSize: 1000 | 5000 | 10000;
  zoning: boolean;
};

export type FlowLeg = { division: DivisionName; tonnes: number };

export type DeskDistrict = {
  seed: DistrictSeed;
  affected: number;
  bookTonnes: number;
  physicalTonnes: number;
  cashPeople: number;
  instrument: Instrument;
  flows: FlowLeg[];
  clusters: number;
  owner: AgencyId | null;
};

export type DeskGateway = {
  gateway: Gateway;
  tonnes: number;
  openIndex: number;
  throughput: number;
  regular: number;
};

export type AgencyRollup = {
  id: AgencyId;
  name: string;
  people: number;
  tonnes: number;
  districts: number;
};

export type Desk = {
  input: DeskInput;
  weeks: number;
  leadDays: number;
  title: string;
  lede: string;
  instrumentLine: string;
  districts: DeskDistrict[];
  active: DeskDistrict[];
  affected: number;
  bookTonnes: number;
  physicalTonnes: number;
  cashPeople: number;
  clusters: number;
  kgPerPerson: number;
  dcTonnes: { division: DivisionName; tonnes: number; x: number; y: number }[];
  gateways: DeskGateway[];
  localTonnes: number;
  importTonnes: number;
  singleGateway: string | null;
  agencies: AgencyRollup[];
  uncoordinated: { overlap: number; single: number; excluded: number };
  portLegs: { port: PortName; division: DivisionName; tonnes: number; x1: number; y1: number; x2: number; y2: number }[];
  regimeLabel: string;
};

const SCENARIO_COPY: Record<
  ScenarioId,
  { weeks: number; title: string; lede: string; instrument: string }
> = {
  north: {
    weeks: 3,
    title: "Northern flash flood",
    lede: "Six districts, a little over 15 million people. The river signal usually gives about a week. Flooding runs two to four weeks, and markets often keep trading, so cash does more than trucks.",
    instrument: "Cash leads. Physical tonnes are the contingency for medicine, dry food, and kits.",
  },
  south: {
    weeks: 8,
    title: "Southern sustained flood",
    lede: "Waterlogging runs into the second month. Domestic food chains break, prices rise, and the physical plan has to come in from a gateway rather than from the local market.",
    instrument: "Physical aid leads. Raise the staple index if local buying would push prices up.",
  },
  stochastic: {
    weeks: 6,
    title: "Stochastic preparedness",
    lede: "A probability-weighted blend of northern flash floods, southern waterlogging, and coastal exposure. Use it to preposition, not to run a single event.",
    instrument: "Mixed instruments. Northern districts stay cash-led. The coast carries shelter and rehabilitation on top of physical aid.",
  },
};

function planId(scenario: ScenarioId, network: NetworkId): string {
  if (scenario === "north") return network === "base" ? "north" : "northFlex";
  if (scenario === "south") return network === "base" ? "south" : "southFlex";
  return network === "base" ? "stochastic" : "stochasticFlex";
}

export function defaultPhysical(scenario: ScenarioId, cyclone: boolean): number {
  if (scenario === "north") return 0.25;
  if (scenario === "south") return cyclone ? 0.72 : 0.88;
  return cyclone ? 0.62 : 0.5;
}

function regimeOf(scenario: ScenarioId, cyclone: boolean): keyof typeof GATEWAY_INDEX {
  if (scenario === "north" && cyclone) return "worst";
  if (scenario === "north") return "north";
  if (cyclone) return "south";
  if (scenario === "south") return "regular";
  return "regular";
}

function instrumentFor(name: string, scenario: ScenarioId, cyclone: boolean, active: boolean): Instrument {
  if (!active) return "watch";
  if (scenario === "north") return "cash";
  if (scenario === "south") return cyclone ? "rehab" : "physical";
  if (NORTH_NAMES.has(name) && !cyclone) return "cash";
  if (COASTAL.has(name) || cyclone) return COASTAL.has(name) ? "rehab" : "physical";
  return "physical";
}

/** 100 keeps the workbook split. Above 100, local buying is pulled down. Below 100, more is bought locally. */
export function localShareTarget(bookShare: number, index: number): number {
  if (index >= 100) {
    const t = Math.min(1, (index - 100) / 40);
    return bookShare * (1 - t);
  }
  const t = Math.min(1, (100 - index) / 30);
  const lifted = Math.min(0.65, bookShare + 0.4 * (1 - bookShare));
  return bookShare + (lifted - bookShare) * t;
}

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function buildDesk(input: DeskInput): Desk {
  const id = planId(input.scenario, input.network);
  const plan = PLANS[id];
  const copy = SCENARIO_COPY[input.scenario];
  const share = clamp(input.physicalShare, 0, 1);
  const regime = regimeOf(input.scenario, input.cyclone);

  const raw: DeskDistrict[] = DISTRICTS.map((seed) => {
    const row = plan.districts[seed.name];
    const bookTonnes = row?.demand ?? 0;
    const affected = row?.affected ?? 0;
    const physicalTonnes = bookTonnes * share;
    const flows: FlowLeg[] = DIVISIONS.flatMap((division) => {
      const tonnes = (row?.from[division] ?? 0) * share;
      return tonnes > 0.05 ? [{ division, tonnes }] : [];
    });
    return {
      seed,
      affected,
      bookTonnes,
      physicalTonnes,
      cashPeople: affected * (1 - share),
      instrument: instrumentFor(seed.name, input.scenario, input.cyclone, affected > 0),
      flows,
      clusters: affected > 0 ? Math.ceil(affected / input.clusterSize) : 0,
      owner: null,
    };
  });

  const active = raw.filter((d) => d.affected > 0).sort((a, b) => b.physicalTonnes - a.physicalTonnes || b.affected - a.affected);
  const affected = active.reduce((s, d) => s + d.affected, 0);
  const bookTonnes = active.reduce((s, d) => s + d.bookTonnes, 0);
  const physicalTonnes = active.reduce((s, d) => s + d.physicalTonnes, 0);
  const cashPeople = active.reduce((s, d) => s + d.cashPeople, 0);
  const clusters = active.reduce((s, d) => s + d.clusters, 0);

  const bookImport = sumPorts(plan.ports);
  const bookLocalShare = bookTonnes > 0 ? Math.max(0, bookTonnes - bookImport) / bookTonnes : 0;
  const targetLocal = localShareTarget(bookLocalShare, input.stapleIndex);
  const importTonnes = physicalTonnes * (1 - targetLocal);
  const localTonnes = physicalTonnes - importTonnes;
  const importFactor = bookImport > 0 ? importTonnes / bookImport : 0;

  const dcMap = new Map<DivisionName, number>();
  for (const d of active) {
    for (const leg of d.flows) dcMap.set(leg.division, (dcMap.get(leg.division) ?? 0) + leg.tonnes);
  }
  const dcTonnes = DIVISIONS.filter((division) => (dcMap.get(division) ?? 0) > 0.5).map((division) => ({
    division,
    tonnes: dcMap.get(division) ?? 0,
    x: DC_XY[division].x,
    y: DC_XY[division].y,
  }));

  const gateways: DeskGateway[] = GATEWAYS.map((gateway) => {
    const book = sumRecord(plan.ports[gateway.port]);
    const tonnes = book * importFactor;
    const regular = GATEWAY_INDEX.regular[gateway.port];
    const throughput = GATEWAY_INDEX[regime][gateway.port];
    return {
      gateway,
      tonnes,
      throughput,
      regular,
      openIndex: regular > 0 ? throughput / regular : 0,
    };
  }).sort((a, b) => b.tonnes - a.tonnes);

  const portLegs = GATEWAYS.flatMap((gateway) => {
    const parts = plan.ports[gateway.port];
    return DIVISIONS.flatMap((division) => {
      const tonnes = (parts[division] ?? 0) * importFactor;
      if (tonnes < 1) return [];
      return [
        {
          port: gateway.port,
          division,
          tonnes,
          x1: gateway.x,
          y1: gateway.y,
          x2: DC_XY[division].x,
          y2: DC_XY[division].y,
        },
      ];
    });
  });

  const busiest = gateways.find((g) => g.tonnes > 1);
  const singleGateway =
    busiest && importTonnes > 1 && busiest.tonnes / importTonnes > 0.8 ? busiest.gateway.short : null;

  const ownerByDivision = assignAgencies(active);
  for (const d of raw) {
    if (d.affected > 0) d.owner = ownerByDivision.get(d.seed.division) ?? null;
  }

  const agencies: AgencyRollup[] = AGENCIES.map((a) => {
    const rows = active.filter((d) => ownerByDivision.get(d.seed.division) === a.id);
    return {
      id: a.id,
      name: a.name,
      people: rows.reduce((s, d) => s + d.affected, 0),
      tonnes: rows.reduce((s, d) => s + d.physicalTonnes, 0),
      districts: rows.length,
    };
  });

  const uncoordinated = uncoordinatedSplit(active);

  let lede = copy.lede;
  let instrumentLine = copy.instrument;
  if (input.cyclone && input.scenario === "south") {
    lede =
      "Cyclone on top of the southern flood. Ports lose throughput, and the caseload picks up shelter and rehabilitation, not only food and medicine.";
    instrumentLine = "Shelter and rehabilitation lead, with physical aid still moving. Chattogram and Mongla are both stressed in the capacity table.";
  } else if (input.cyclone && input.scenario === "stochastic") {
    instrumentLine = "Coastal districts shift to shelter and rehabilitation. Gateway index uses the cyclone column.";
  } else if (input.cyclone && input.scenario === "north") {
    lede =
      "A cyclone stacked on a northern flash flood is outside the main scenario pair. The desk still applies the worst-case gateway index so you can see the pinch.";
  }
  if (input.network === "flex") {
    instrumentLine += " Flexible network: more gateways and more divisional DCs, so one closure does not own the plan.";
  }

  const regimeLabel =
    regime === "north"
      ? "Northern flood index"
      : regime === "south"
        ? "Cyclone coincidence index"
        : regime === "worst"
          ? "Worst-case index"
          : "Regular gateway index";

  return {
    input,
    weeks: copy.weeks,
    leadDays: 7,
    title: copy.title,
    lede,
    instrumentLine,
    districts: raw,
    active,
    affected,
    bookTonnes,
    physicalTonnes,
    cashPeople,
    clusters,
    kgPerPerson: affected > 0 ? (bookTonnes * 1000) / affected : 0,
    dcTonnes,
    gateways,
    localTonnes,
    importTonnes,
    singleGateway,
    agencies,
    uncoordinated,
    portLegs,
    regimeLabel,
  };
}

function assignAgencies(active: DeskDistrict[]): Map<DivisionName, AgencyId> {
  const loads = new Map<DivisionName, number>();
  for (const d of active) loads.set(d.seed.division, (loads.get(d.seed.division) ?? 0) + d.affected);
  const divisions = [...loads.entries()].sort((a, b) => b[1] - a[1]);
  const tally = AGENCIES.map((a) => ({ id: a.id, people: 0 }));
  const out = new Map<DivisionName, AgencyId>();
  for (const [division, people] of divisions) {
    tally.sort((a, b) => a.people - b.people);
    const pick = tally[0];
    pick.people += people;
    out.set(division, pick.id);
  }
  return out;
}

function uncoordinatedSplit(active: DeskDistrict[]) {
  const rows = [...active].sort((a, b) => b.affected - a.affected);
  const people = rows.reduce((s, d) => s + d.affected, 0);
  let acc = 0;
  let overlap = 0;
  let single = 0;
  let excluded = 0;
  for (const d of rows) {
    const start = people > 0 ? acc / people : 0;
    acc += d.affected;
    const mid = people > 0 ? (start + acc / people) / 2 : 0;
    if (mid < 0.5) overlap += d.affected;
    else if (mid < 0.85) single += d.affected;
    else excluded += d.affected;
  }
  return { overlap, single, excluded };
}

function sumRecord(parts: Partial<Record<DivisionName, number>> | undefined): number {
  if (!parts) return 0;
  return Object.values(parts).reduce((s, n) => s + (n ?? 0), 0);
}

function sumPorts(ports: (typeof PLANS)[string]["ports"]): number {
  return GATEWAYS.reduce((s, g) => s + sumRecord(ports[g.port]), 0);
}

function clamp(n: number, a: number, b: number) {
  return Math.min(b, Math.max(a, n));
}

export type SimInput = {
  importThroughBusiest: number;
  otherTonnes: number;
  capacity: number;
  safety: number;
  cv: number;
  nodeStress: number;
  runs: number;
  seed: number;
};

export type SimResult = {
  fillRate: number;
  shareAt95: number;
  histogram: { label: string; count: number }[];
  busiestShare: number;
};

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return function rand() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function normal(rand: () => number) {
  const u = Math.max(1e-12, 1 - rand());
  const v = rand();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

/** Two-bucket fill rate. The largest gateway can be derated; local tonnes sit in the safe bucket. */
export function simulate(input: SimInput): SimResult | null {
  const stressed = Math.max(0, input.importThroughBusiest);
  const safe = Math.max(0, input.otherTonnes);
  const plan = stressed + safe;
  if (plan < 1) return null;
  const rand = mulberry32(input.seed);
  const bins = Array.from({ length: 10 }, () => 0);
  let fillSum = 0;
  let hits = 0;
  const runs = Math.max(200, Math.min(4000, input.runs));
  for (let i = 0; i < runs; i++) {
    const common = normal(rand);
    const shock = () => Math.max(0.05, 1 + input.cv * (0.55 * common + 0.84 * normal(rand)));
    const needS = stressed * shock();
    const needO = safe * shock();
    const stockS = stressed * input.capacity * (1 + input.safety) * (1 - input.nodeStress);
    const stockO = safe * input.capacity * (1 + input.safety);
    const need = needS + needO;
    const got = Math.min(needS, Math.max(0, stockS)) + Math.min(needO, Math.max(0, stockO));
    const fill = need > 0 ? got / need : 1;
    fillSum += fill;
    if (fill >= 0.95) hits += 1;
    const idx = Math.min(9, Math.max(0, Math.floor((fill - 0.7) / 0.03)));
    bins[idx] += 1;
  }
  const histogram = bins.map((count, i) => {
    const from = 70 + i * 3;
    return { label: `${from}`, count };
  });
  return {
    fillRate: fillSum / runs,
    shareAt95: hits / runs,
    histogram,
    busiestShare: stressed / plan,
  };
}

export function busiestGatewayTonnes(desk: Desk): { name: string; tonnes: number } {
  const top = desk.gateways.find((g) => g.tonnes > 0);
  return { name: top?.gateway.short ?? "None", tonnes: top?.tonnes ?? 0 };
}

export function shockSeed(scenario: ScenarioId, cyclone: boolean): number {
  return hash(`${scenario}:${cyclone ? "cyclone" : "calm"}:floodaid`);
}

export const PHASES = [
  { at: 0, k: "Signal", d: "River and rainfall signal. About seven days before the worst isolation." },
  { at: 2, k: "Instrument", d: "Lock cash where markets still trade. Lock goods where they do not." },
  { at: 4, k: "Divisional DCs", d: "Cross-dock local purchases and gateway inflows. Divisional markets usually stay open." },
  { at: 6, k: "District stores", d: "Stage tonnes in district warehouses placed to stay reachable." },
  { at: 7, k: "Households", d: "Local organizers hand over to clusters. Cash, mobile money, or goods." },
];

export function phaseFor(day: number) {
  let current = PHASES[0];
  for (const p of PHASES) if (day >= p.at) current = p;
  return current;
}

export function instrumentLabel(instrument: Instrument): string {
  if (instrument === "cash") return "Cash";
  if (instrument === "physical") return "Physical";
  if (instrument === "rehab") return "Shelter";
  return "Watch";
}
