import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Activity, r as Map$1, t as Users } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as ResponsiveContainer, i as Bar, n as YAxis, o as Tooltip, r as XAxis, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BIrSmc3n.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function people(n) {
	const v = Math.abs(n);
	if (v >= 1e6) {
		const m = n / 1e6;
		return `${m >= 10 ? m.toFixed(1) : m.toFixed(2)} million`;
	}
	if (v >= 1e4) return `${Math.round(n / 1e3).toLocaleString("en-US")} thousand`;
	return Math.round(n).toLocaleString("en-US");
}
function tonnes(n) {
	const v = Math.abs(n);
	if (v >= 100) return `${Math.round(n).toLocaleString("en-US")} t`;
	if (v >= 10) return `${n.toFixed(1)} t`;
	return `${n.toFixed(1)} t`;
}
function pct(n) {
	return `${Math.round(n * 100)}%`;
}
function pct1(n) {
	return `${(n * 100).toFixed(1)}%`;
}
function kg(n) {
	if (!Number.isFinite(n) || n <= 0) return "—";
	return `${n.toFixed(1)} kg`;
}
var DISTRICTS = [
	{
		"name": "Dhaka",
		"x": 0,
		"y": 0,
		"population": 14731253,
		"division": "Dhaka"
	},
	{
		"name": "Chattogram",
		"x": 144.4,
		"y": -163.7,
		"population": 9169464,
		"division": "Chattogram"
	},
	{
		"name": "Cumilla",
		"x": 78,
		"y": -38.8,
		"population": 6212216,
		"division": "Chattogram"
	},
	{
		"name": "Mymensingh",
		"x": -1,
		"y": 104,
		"population": 5899052,
		"division": "Mymensingh"
	},
	{
		"name": "Gazipur",
		"x": 1.4,
		"y": 21.3,
		"population": 5263474,
		"division": "Dhaka"
	},
	{
		"name": "Tangail",
		"x": -50.3,
		"y": 49,
		"population": 4037608,
		"division": "Dhaka"
	},
	{
		"name": "Narayanganj",
		"x": 8.9,
		"y": -20.7,
		"population": 3909138,
		"division": "Dhaka"
	},
	{
		"name": "Sylhet",
		"x": 147.9,
		"y": 120.4,
		"population": 3857037,
		"division": "Sylhet"
	},
	{
		"name": "Bogura",
		"x": -105.6,
		"y": 115.2,
		"population": 3733966,
		"division": "Rajshahi"
	},
	{
		"name": "Noakhali",
		"x": 69.8,
		"y": -104.4,
		"population": 3625252,
		"division": "Chattogram"
	},
	{
		"name": "Sirajganj",
		"x": -72.3,
		"y": 71.4,
		"population": 3357705,
		"division": "Rajshahi"
	},
	{
		"name": "Dinajpur",
		"x": -180.5,
		"y": 201.1,
		"population": 3315238,
		"division": "Rangpur"
	},
	{
		"name": "Brahmanbaria",
		"x": 71,
		"y": 16.3,
		"population": 3306559,
		"division": "Chattogram"
	},
	{
		"name": "Kishoreganj",
		"x": 57.8,
		"y": 68.3,
		"population": 3267630,
		"division": "Dhaka"
	},
	{
		"name": "Rangpur",
		"x": -115.5,
		"y": 214.6,
		"population": 3122113,
		"division": "Rangpur"
	},
	{
		"name": "Jashore",
		"x": -122.3,
		"y": -71.5,
		"population": 3076849,
		"division": "Khulna"
	},
	{
		"name": "Rajshahi",
		"x": -183.6,
		"y": 62.6,
		"population": 2915088,
		"division": "Rajshahi"
	},
	{
		"name": "Pabna",
		"x": -119.7,
		"y": 22.8,
		"population": 2909622,
		"division": "Rajshahi"
	},
	{
		"name": "Cox's Bazar",
		"x": 161.8,
		"y": -264.5,
		"population": 2823265,
		"division": "Chattogram"
	},
	{
		"name": "Naogaon",
		"x": -150.4,
		"y": 109.1,
		"population": 2784598,
		"division": "Rajshahi"
	},
	{
		"name": "Sunamganj",
		"x": 99.8,
		"y": 139.4,
		"population": 2695495,
		"division": "Sylhet"
	},
	{
		"name": "Chandpur",
		"x": 25.4,
		"y": -64.2,
		"population": 2635748,
		"division": "Chattogram"
	},
	{
		"name": "Khulna",
		"x": -88.6,
		"y": -107.1,
		"population": 2613385,
		"division": "Khulna"
	},
	{
		"name": "Narsingdi",
		"x": 31,
		"y": 12.1,
		"population": 2584452,
		"division": "Dhaka"
	},
	{
		"name": "Barishal",
		"x": -6,
		"y": -123.1,
		"population": 2570446,
		"division": "Barishal"
	},
	{
		"name": "Gaibandha",
		"x": -89.8,
		"y": 168.6,
		"population": 2562232,
		"division": "Rangpur"
	},
	{
		"name": "Jamalpur",
		"x": -47.2,
		"y": 123.1,
		"population": 2499737,
		"division": "Mymensingh"
	},
	{
		"name": "Habiganj",
		"x": 101.6,
		"y": 62.7,
		"population": 2358886,
		"division": "Sylhet"
	},
	{
		"name": "Kurigram",
		"x": -78.8,
		"y": 221.5,
		"population": 2329161,
		"division": "Rangpur"
	},
	{
		"name": "Netrokona",
		"x": 31.9,
		"y": 117.7,
		"population": 2324856,
		"division": "Mymensingh"
	},
	{
		"name": "Satkhira",
		"x": -136.3,
		"y": -121.2,
		"population": 2196581,
		"division": "Khulna"
	},
	{
		"name": "Faridpur",
		"x": -57.8,
		"y": -22.6,
		"population": 2162876,
		"division": "Dhaka"
	},
	{
		"name": "Kushtia",
		"x": -131.2,
		"y": 10.1,
		"population": 2149692,
		"division": "Khulna"
	},
	{
		"name": "Moulvibazar",
		"x": 135.6,
		"y": 74.7,
		"population": 2123445,
		"division": "Sylhet"
	},
	{
		"name": "Nilphamari",
		"x": -158.1,
		"y": 235.5,
		"population": 2092567,
		"division": "Rangpur"
	},
	{
		"name": "Jhenaidah",
		"x": -125.9,
		"y": -29.4,
		"population": 2005849,
		"division": "Khulna"
	},
	{
		"name": "Lakshmipur",
		"x": 43.5,
		"y": -96.3,
		"population": 1938111,
		"division": "Chattogram"
	},
	{
		"name": "Bhola",
		"x": 23.9,
		"y": -124.8,
		"population": 1932514,
		"division": "Barishal"
	},
	{
		"name": "Natore",
		"x": -145.4,
		"y": 67.7,
		"population": 1859921,
		"division": "Rajshahi"
	},
	{
		"name": "Nawabganj",
		"x": -217,
		"y": 87.3,
		"population": 1835528,
		"division": "Rajshahi"
	},
	{
		"name": "Patuakhali",
		"x": -8.4,
		"y": -161,
		"population": 1727254,
		"division": "Barishal"
	},
	{
		"name": "Feni",
		"x": 100,
		"y": -88.2,
		"population": 1648396,
		"division": "Chattogram"
	},
	{
		"name": "Munshiganj",
		"x": 12.5,
		"y": -29.6,
		"population": 1625416,
		"division": "Dhaka"
	},
	{
		"name": "Bagerhat",
		"x": -63.6,
		"y": -128.6,
		"population": 1613003,
		"division": "Khulna"
	},
	{
		"name": "Manikganj",
		"x": -41.4,
		"y": 6,
		"population": 1558337,
		"division": "Dhaka"
	},
	{
		"name": "Thakurgaon",
		"x": -198.1,
		"y": 246.8,
		"population": 1533895,
		"division": "Rangpur"
	},
	{
		"name": "Sherpur",
		"x": -40.3,
		"y": 134.3,
		"population": 1501853,
		"division": "Mymensingh"
	},
	{
		"name": "Lalmonirhat",
		"x": -98.5,
		"y": 233.4,
		"population": 1428406,
		"division": "Rangpur"
	},
	{
		"name": "Gopalganj",
		"x": -59.5,
		"y": -89.3,
		"population": 1295054,
		"division": "Dhaka"
	},
	{
		"name": "Madaripur",
		"x": -22.9,
		"y": -71,
		"population": 1293027,
		"division": "Dhaka"
	},
	{
		"name": "Shariatpur",
		"x": -4,
		"y": -63,
		"population": 1290234,
		"division": "Dhaka"
	},
	{
		"name": "Chuadanga",
		"x": -159.5,
		"y": -18.9,
		"population": 1234054,
		"division": "Khulna"
	},
	{
		"name": "Pirojpur",
		"x": -44.7,
		"y": -136.1,
		"population": 1198193,
		"division": "Barishal"
	},
	{
		"name": "Rajbari",
		"x": -78,
		"y": -5.9,
		"population": 1189821,
		"division": "Dhaka"
	},
	{
		"name": "Panchagarh",
		"x": -188.7,
		"y": 280.9,
		"population": 1179843,
		"division": "Rangpur"
	},
	{
		"name": "Magura",
		"x": -100.8,
		"y": -35.8,
		"population": 1033115,
		"division": "Khulna"
	},
	{
		"name": "Barguna",
		"x": -30.5,
		"y": -190.4,
		"population": 1010530,
		"division": "Barishal"
	},
	{
		"name": "Joypurhat",
		"x": -141.3,
		"y": 142.6,
		"population": 950441,
		"division": "Rajshahi"
	},
	{
		"name": "Narail",
		"x": -91.4,
		"y": -70.8,
		"population": 788675,
		"division": "Khulna"
	},
	{
		"name": "Khagrachari",
		"x": 159.6,
		"y": -76.7,
		"population": 714119,
		"division": "Chattogram"
	},
	{
		"name": "Meherpur",
		"x": -180.8,
		"y": -5.3,
		"population": 705356,
		"division": "Khulna"
	},
	{
		"name": "Jhalokati",
		"x": -21.7,
		"y": -129.8,
		"population": 661160,
		"division": "Barishal"
	},
	{
		"name": "Rangamati",
		"x": 178.8,
		"y": -128,
		"population": 620214,
		"division": "Chattogram"
	},
	{
		"name": "Bandarban",
		"x": 183.4,
		"y": -179.3,
		"population": 481109,
		"division": "Chattogram"
	}
];
var PLANS = {
	"north": {
		"districts": {
			"Dhaka": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Chattogram": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Cumilla": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Mymensingh": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Gazipur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Tangail": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Narayanganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Sylhet": {
				"demand": 77140.74,
				"from": { "Sylhet": 77140.74 },
				"affected": 3857037
			},
			"Bogura": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Noakhali": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Sirajganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Dinajpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Brahmanbaria": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Kishoreganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Rangpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Jashore": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Rajshahi": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Pabna": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Cox's Bazar": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Naogaon": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Sunamganj": {
				"demand": 53909.9,
				"from": { "Sylhet": 53909.9 },
				"affected": 2695495
			},
			"Chandpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Khulna": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Narsingdi": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Barishal": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Gaibandha": {
				"demand": 51244.64,
				"from": { "Mymensingh": 51244.64 },
				"affected": 2562232
			},
			"Jamalpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Habiganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Kurigram": {
				"demand": 46583.22,
				"from": {
					"Mymensingh": 38718.3,
					"Sylhet": 7864.92
				},
				"affected": 2329161
			},
			"Netrokona": {
				"demand": 46497.12,
				"from": { "Sylhet": 46497.12 },
				"affected": 2324856
			},
			"Satkhira": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Faridpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Kushtia": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Moulvibazar": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Nilphamari": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Jhenaidah": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Lakshmipur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Bhola": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Natore": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Nawabganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Patuakhali": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Feni": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Munshiganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Bagerhat": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Manikganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Thakurgaon": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Sherpur": {
				"demand": 30037.06,
				"from": { "Mymensingh": 30037.06 },
				"affected": 1501853
			},
			"Lalmonirhat": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Gopalganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Madaripur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Shariatpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Chuadanga": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Pirojpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Rajbari": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Panchagarh": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Magura": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Barguna": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Joypurhat": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Narail": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Khagrachari": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Meherpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Jhalokati": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Rangamati": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Bandarban": {
				"demand": 0,
				"from": {},
				"affected": 0
			}
		},
		"ports": {
			"Dhaka": { "Mymensingh": 12e4 },
			"Chattogram": {},
			"Sylhet": { "Sylhet": 185412.68 },
			"Jashore": {},
			"Bagerhat": {}
		}
	},
	"northFlex": {
		"districts": {
			"Dhaka": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Chattogram": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Cumilla": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Mymensingh": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Gazipur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Tangail": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Narayanganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Sylhet": {
				"demand": 77140.74,
				"from": {
					"Mymensingh": 15428.15,
					"Sylhet": 61712.59
				},
				"affected": 3857037
			},
			"Bogura": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Noakhali": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Sirajganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Dinajpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Brahmanbaria": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Kishoreganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Rangpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Jashore": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Rajshahi": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Pabna": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Cox's Bazar": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Naogaon": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Sunamganj": {
				"demand": 53909.9,
				"from": {
					"Mymensingh": 25738.49,
					"Sylhet": 28171.41
				},
				"affected": 2695495
			},
			"Chandpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Khulna": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Narsingdi": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Barishal": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Gaibandha": {
				"demand": 51244.64,
				"from": {
					"Mymensingh": 40995.71,
					"Rangpur": 10248.93
				},
				"affected": 2562232
			},
			"Jamalpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Habiganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Kurigram": {
				"demand": 46583.22,
				"from": {
					"Mymensingh": 9316.64,
					"Rangpur": 37266.58
				},
				"affected": 2329161
			},
			"Netrokona": {
				"demand": 46497.12,
				"from": {
					"Mymensingh": 37197.7,
					"Sylhet": 9299.42
				},
				"affected": 2324856
			},
			"Satkhira": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Faridpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Kushtia": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Moulvibazar": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Nilphamari": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Jhenaidah": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Lakshmipur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Bhola": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Natore": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Nawabganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Patuakhali": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Feni": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Munshiganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Bagerhat": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Manikganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Thakurgaon": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Sherpur": {
				"demand": 30037.06,
				"from": {
					"Mymensingh": 24029.65,
					"Rangpur": 6007.41
				},
				"affected": 1501853
			},
			"Lalmonirhat": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Gopalganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Madaripur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Shariatpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Chuadanga": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Pirojpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Rajbari": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Panchagarh": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Magura": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Barguna": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Joypurhat": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Narail": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Khagrachari": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Meherpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Jhalokati": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Rangamati": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Bandarban": {
				"demand": 0,
				"from": {},
				"affected": 0
			}
		},
		"ports": {
			"Dhaka": {
				"Mymensingh": 45811.9,
				"Sylhet": 45811.9,
				"Rangpur": 28376.2
			},
			"Chattogram": { "Sylhet": 22516.13 },
			"Sylhet": {
				"Mymensingh": 45811.9,
				"Sylhet": 45811.9,
				"Rangpur": 45811.9
			},
			"Jashore": {
				"Mymensingh": 15379.24,
				"Rangpur": 10081.6
			},
			"Bagerhat": {}
		}
	},
	"south": {
		"districts": {
			"Dhaka": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Chattogram": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Cumilla": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Mymensingh": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Gazipur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Tangail": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Narayanganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Sylhet": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Bogura": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Noakhali": {
				"demand": 145010.08,
				"from": { "Barishal": 145010.08 },
				"affected": 3625252
			},
			"Sirajganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Dinajpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Brahmanbaria": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Kishoreganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Rangpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Jashore": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Rajshahi": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Pabna": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Cox's Bazar": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Naogaon": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Sunamganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Chandpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Khulna": {
				"demand": 104535.4,
				"from": { "Khulna": 104535.4 },
				"affected": 2613385
			},
			"Narsingdi": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Barishal": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Gaibandha": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Jamalpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Habiganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Kurigram": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Netrokona": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Satkhira": {
				"demand": 87863.24,
				"from": { "Khulna": 87863.24 },
				"affected": 2196581
			},
			"Faridpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Kushtia": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Moulvibazar": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Nilphamari": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Jhenaidah": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Lakshmipur": {
				"demand": 77524.44,
				"from": { "Barishal": 77524.44 },
				"affected": 1938111
			},
			"Bhola": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Natore": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Nawabganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Patuakhali": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Feni": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Munshiganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Bagerhat": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Manikganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Thakurgaon": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Sherpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Lalmonirhat": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Gopalganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Madaripur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Shariatpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Chuadanga": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Pirojpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Rajbari": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Panchagarh": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Magura": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Barguna": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Joypurhat": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Narail": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Khagrachari": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Meherpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Jhalokati": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Rangamati": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Bandarban": {
				"demand": 0,
				"from": {},
				"affected": 0
			}
		},
		"ports": {
			"Dhaka": {},
			"Chattogram": {},
			"Sylhet": {},
			"Jashore": {},
			"Bagerhat": {
				"Khulna": 192398.64,
				"Barishal": 222534.52
			}
		}
	},
	"southFlex": {
		"districts": {
			"Dhaka": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Chattogram": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Cumilla": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Mymensingh": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Gazipur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Tangail": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Narayanganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Sylhet": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Bogura": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Noakhali": {
				"demand": 145010.08,
				"from": {
					"Chattogram": 116008.06,
					"Barishal": 29002.02
				},
				"affected": 3625252
			},
			"Sirajganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Dinajpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Brahmanbaria": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Kishoreganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Rangpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Jashore": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Rajshahi": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Pabna": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Cox's Bazar": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Naogaon": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Sunamganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Chandpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Khulna": {
				"demand": 104535.4,
				"from": {
					"Khulna": 83628.32,
					"Barishal": 20907.08
				},
				"affected": 2613385
			},
			"Narsingdi": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Barishal": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Gaibandha": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Jamalpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Habiganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Kurigram": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Netrokona": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Satkhira": {
				"demand": 87863.24,
				"from": {
					"Khulna": 70290.59,
					"Barishal": 17572.65
				},
				"affected": 2196581
			},
			"Faridpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Kushtia": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Moulvibazar": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Nilphamari": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Jhenaidah": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Lakshmipur": {
				"demand": 77524.43,
				"from": {
					"Chattogram": 8471.88,
					"Khulna": 7033,
					"Barishal": 62019.55
				},
				"affected": 1938111
			},
			"Bhola": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Natore": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Nawabganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Patuakhali": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Feni": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Munshiganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Bagerhat": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Manikganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Thakurgaon": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Sherpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Lalmonirhat": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Gopalganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Madaripur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Shariatpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Chuadanga": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Pirojpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Rajbari": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Panchagarh": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Magura": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Barguna": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Joypurhat": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Narail": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Khagrachari": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Meherpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Jhalokati": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Rangamati": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Bandarban": {
				"demand": 0,
				"from": {},
				"affected": 0
			}
		},
		"ports": {
			"Dhaka": { "Barishal": 5021.35 },
			"Chattogram": { "Chattogram": 124479.95 },
			"Sylhet": {},
			"Jashore": { "Khulna": 36471.97 },
			"Bagerhat": {
				"Khulna": 124479.95,
				"Barishal": 124479.95
			}
		}
	},
	"stochastic": {
		"districts": {
			"Dhaka": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Chattogram": {
				"demand": 18338.93,
				"from": { "Chattogram": 18338.93 },
				"affected": 3667786
			},
			"Cumilla": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Mymensingh": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Gazipur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Tangail": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Narayanganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Sylhet": {
				"demand": 11571.11,
				"from": { "Sylhet": 11571.11 },
				"affected": 1272822
			},
			"Bogura": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Noakhali": {
				"demand": 87006.05,
				"from": { "Chattogram": 87006.05 },
				"affected": 2175151
			},
			"Sirajganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Dinajpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Brahmanbaria": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Kishoreganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Rangpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Jashore": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Rajshahi": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Pabna": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Cox's Bazar": {
				"demand": 5646.53,
				"from": { "Chattogram": 5646.53 },
				"affected": 1129306
			},
			"Naogaon": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Sunamganj": {
				"demand": 8086.48,
				"from": { "Sylhet": 8086.48 },
				"affected": 889513
			},
			"Chandpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Khulna": {
				"demand": 62721.24,
				"from": { "Khulna": 62721.24 },
				"affected": 1568031
			},
			"Narsingdi": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Barishal": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Gaibandha": {
				"demand": 7686.7,
				"from": { "Rangpur": 7686.7 },
				"affected": 845537
			},
			"Jamalpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Habiganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Kurigram": {
				"demand": 6987.48,
				"from": { "Rangpur": 6987.48 },
				"affected": 768623
			},
			"Netrokona": {
				"demand": 6974.57,
				"from": { "Sylhet": 6974.57 },
				"affected": 767202
			},
			"Satkhira": {
				"demand": 52717.94,
				"from": { "Khulna": 52717.94 },
				"affected": 1317949
			},
			"Faridpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Kushtia": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Moulvibazar": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Nilphamari": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Jhenaidah": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Lakshmipur": {
				"demand": 46514.66,
				"from": { "Barishal": 46514.66 },
				"affected": 1162867
			},
			"Bhola": {
				"demand": 3865.03,
				"from": { "Barishal": 3865.03 },
				"affected": 773006
			},
			"Natore": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Nawabganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Patuakhali": {
				"demand": 3454.51,
				"from": { "Barishal": 3454.51 },
				"affected": 690902
			},
			"Feni": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Munshiganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Bagerhat": {
				"demand": 3226.01,
				"from": { "Khulna": 3226.01 },
				"affected": 645201
			},
			"Manikganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Thakurgaon": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Sherpur": {
				"demand": 4505.56,
				"from": { "Rangpur": 4505.56 },
				"affected": 495611
			},
			"Lalmonirhat": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Gopalganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Madaripur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Shariatpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Chuadanga": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Pirojpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Rajbari": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Panchagarh": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Magura": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Barguna": {
				"demand": 2021.06,
				"from": { "Barishal": 2021.06 },
				"affected": 404212
			},
			"Joypurhat": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Narail": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Khagrachari": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Meherpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Jhalokati": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Rangamati": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Bandarban": {
				"demand": 0,
				"from": {},
				"affected": 0
			}
		},
		"ports": {
			"Dhaka": {},
			"Chattogram": { "Chattogram": 43503.02 },
			"Sylhet": {},
			"Jashore": {},
			"Bagerhat": {
				"Khulna": 57719.59,
				"Barishal": 23257.33
			}
		}
	},
	"stochasticFlex": {
		"districts": {
			"Dhaka": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Chattogram": {
				"demand": 18338.93,
				"from": {
					"Chattogram": 14671.14,
					"Barishal": 3667.79
				},
				"affected": 3667786
			},
			"Cumilla": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Mymensingh": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Gazipur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Tangail": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Narayanganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Sylhet": {
				"demand": 12728.22,
				"from": {
					"Mymensingh": 2545.64,
					"Sylhet": 10182.58
				},
				"affected": 1272822
			},
			"Bogura": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Noakhali": {
				"demand": 87006.05,
				"from": {
					"Chattogram": 69604.84,
					"Barishal": 17401.21
				},
				"affected": 2175151
			},
			"Sirajganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Dinajpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Brahmanbaria": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Kishoreganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Rangpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Jashore": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Rajshahi": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Pabna": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Cox's Bazar": {
				"demand": 5646.53,
				"from": {
					"Chattogram": 4517.22,
					"Barishal": 1129.31
				},
				"affected": 1129306
			},
			"Naogaon": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Sunamganj": {
				"demand": 8895.14,
				"from": {
					"Mymensingh": 1779.03,
					"Sylhet": 7116.11
				},
				"affected": 889513
			},
			"Chandpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Khulna": {
				"demand": 62721.24,
				"from": {
					"Khulna": 50176.99,
					"Barishal": 12544.25
				},
				"affected": 1568031
			},
			"Narsingdi": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Barishal": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Gaibandha": {
				"demand": 8455.36,
				"from": {
					"Mymensingh": 1691.07,
					"Rangpur": 6764.29
				},
				"affected": 845537
			},
			"Jamalpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Habiganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Kurigram": {
				"demand": 7686.23,
				"from": {
					"Mymensingh": 1537.25,
					"Rangpur": 6148.98
				},
				"affected": 768623
			},
			"Netrokona": {
				"demand": 7672.02,
				"from": {
					"Mymensingh": 6137.62,
					"Sylhet": 1534.4
				},
				"affected": 767202
			},
			"Satkhira": {
				"demand": 52717.95,
				"from": {
					"Khulna": 42174.36,
					"Barishal": 10543.59
				},
				"affected": 1317949
			},
			"Faridpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Kushtia": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Moulvibazar": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Nilphamari": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Jhenaidah": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Lakshmipur": {
				"demand": 46514.66,
				"from": {
					"Chattogram": 5083.13,
					"Khulna": 4219.8,
					"Barishal": 37211.73
				},
				"affected": 1162867
			},
			"Bhola": {
				"demand": 3865.03,
				"from": {
					"Khulna": 773.01,
					"Barishal": 3092.02
				},
				"affected": 773006
			},
			"Natore": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Nawabganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Patuakhali": {
				"demand": 3454.51,
				"from": {
					"Khulna": 690.9,
					"Barishal": 2763.61
				},
				"affected": 690902
			},
			"Feni": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Munshiganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Bagerhat": {
				"demand": 3226,
				"from": {
					"Khulna": 2580.8,
					"Barishal": 645.2
				},
				"affected": 645201
			},
			"Manikganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Thakurgaon": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Sherpur": {
				"demand": 4956.11,
				"from": {
					"Mymensingh": 3964.89,
					"Rangpur": 991.22
				},
				"affected": 495611
			},
			"Lalmonirhat": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Gopalganj": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Madaripur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Shariatpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Chuadanga": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Pirojpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Rajbari": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Panchagarh": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Magura": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Barguna": {
				"demand": 2021.06,
				"from": {
					"Khulna": 404.21,
					"Barishal": 1616.85
				},
				"affected": 404212
			},
			"Joypurhat": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Narail": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Khagrachari": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Meherpur": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Jhalokati": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Rangamati": {
				"demand": 0,
				"from": {},
				"affected": 0
			},
			"Bandarban": {
				"demand": 0,
				"from": {},
				"affected": 0
			}
		},
		"ports": {
			"Dhaka": { "Barishal": 1506.4 },
			"Chattogram": { "Chattogram": 37343.98 },
			"Sylhet": {},
			"Jashore": { "Khulna": 10941.59 },
			"Bagerhat": {
				"Khulna": 37343.98,
				"Barishal": 37343.98
			}
		}
	}
};
var DIVISIONS = [
	"Dhaka",
	"Chattogram",
	"Mymensingh",
	"Sylhet",
	"Rangpur",
	"Rajshahi",
	"Khulna",
	"Barishal"
];
var DC_XY = {
	Dhaka: {
		x: 0,
		y: 0
	},
	Chattogram: {
		x: 144.4,
		y: -163.7
	},
	Mymensingh: {
		x: -1,
		y: 104
	},
	Sylhet: {
		x: 147.9,
		y: 120.4
	},
	Rangpur: {
		x: -115.5,
		y: 214.6
	},
	Rajshahi: {
		x: -183.6,
		y: 62.6
	},
	Khulna: {
		x: -88.6,
		y: -107.1
	},
	Barishal: {
		x: -6,
		y: -123.1
	}
};
var GATEWAYS = [
	{
		port: "Dhaka",
		name: "Dhaka Airport",
		short: "Air",
		x: 22,
		y: -18,
		note: "Medicines and kits. Not a bulk-food inlet."
	},
	{
		port: "Chattogram",
		name: "Chattogram seaport",
		short: "Chattogram",
		x: 162,
		y: -186,
		note: "About 90% of national trade in an ordinary year."
	},
	{
		port: "Bagerhat",
		name: "Mongla, via Bagerhat",
		short: "Mongla",
		x: -80,
		y: -148,
		note: "Southwest seaport. Relief valve when Chattogram is tight."
	},
	{
		port: "Jashore",
		name: "Benapole land border",
		short: "Benapole",
		x: -148,
		y: -52,
		note: "India lane, into the southwest."
	},
	{
		port: "Sylhet",
		name: "Tamabil border",
		short: "Tamabil",
		x: 172,
		y: 148,
		note: "Northeast land border, beside the Sylhet DC."
	}
];
/** National gateway throughput index, million tonnes per month, from the workbook. */
var GATEWAY_INDEX = {
	regular: {
		Dhaka: .04,
		Chattogram: 2.75,
		Sylhet: .2,
		Jashore: .4,
		Bagerhat: .4
	},
	north: {
		Dhaka: .024,
		Chattogram: 2.75,
		Sylhet: .1,
		Jashore: .4,
		Bagerhat: .35
	},
	south: {
		Dhaka: .06,
		Chattogram: .8,
		Sylhet: .2,
		Jashore: .4,
		Bagerhat: .05
	},
	worst: {
		Dhaka: .028,
		Chattogram: 1,
		Sylhet: .1,
		Jashore: .2,
		Bagerhat: .1
	}
};
var COASTAL = /* @__PURE__ */ new Set([
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
	"Cox's Bazar"
]);
var NORTH_NAMES = new Set(DISTRICTS.filter((d) => (PLANS.north.districts[d.name]?.demand ?? 0) > 0).map((d) => d.name));
var AGENCIES = [
	{
		id: "gov",
		name: "Government"
	},
	{
		id: "un",
		name: "United Nations"
	},
	{
		id: "ngo",
		name: "Local NGOs"
	}
];
var SCENARIO_COPY = {
	north: {
		weeks: 3,
		title: "Northern flash flood",
		lede: "Six districts, a little over 15 million people. The river signal usually gives about a week. Flooding runs two to four weeks, and markets often keep trading, so cash does more than trucks.",
		instrument: "Cash leads. Physical tonnes are the contingency for medicine, dry food, and kits."
	},
	south: {
		weeks: 8,
		title: "Southern sustained flood",
		lede: "Waterlogging runs into the second month. Domestic food chains break, prices rise, and the physical plan has to come in from a gateway rather than from the local market.",
		instrument: "Physical aid leads. Raise the staple index if local buying would push prices up."
	},
	stochastic: {
		weeks: 6,
		title: "Stochastic preparedness",
		lede: "A probability-weighted blend of northern flash floods, southern waterlogging, and coastal exposure. Use it to preposition, not to run a single event.",
		instrument: "Mixed instruments. Northern districts stay cash-led. The coast carries shelter and rehabilitation on top of physical aid."
	}
};
function planId(scenario, network) {
	if (scenario === "north") return network === "base" ? "north" : "northFlex";
	if (scenario === "south") return network === "base" ? "south" : "southFlex";
	return network === "base" ? "stochastic" : "stochasticFlex";
}
function defaultPhysical(scenario, cyclone) {
	if (scenario === "north") return .25;
	if (scenario === "south") return cyclone ? .72 : .88;
	return cyclone ? .62 : .5;
}
function regimeOf(scenario, cyclone) {
	if (scenario === "north" && cyclone) return "worst";
	if (scenario === "north") return "north";
	if (cyclone) return "south";
	if (scenario === "south") return "regular";
	return "regular";
}
function instrumentFor(name, scenario, cyclone, active) {
	if (!active) return "watch";
	if (scenario === "north") return "cash";
	if (scenario === "south") return cyclone ? "rehab" : "physical";
	if (NORTH_NAMES.has(name) && !cyclone) return "cash";
	if (COASTAL.has(name) || cyclone) return COASTAL.has(name) ? "rehab" : "physical";
	return "physical";
}
/** 100 keeps the workbook split. Above 100, local buying is pulled down. Below 100, more is bought locally. */
function localShareTarget(bookShare, index) {
	if (index >= 100) return bookShare * (1 - Math.min(1, (index - 100) / 40));
	const t = Math.min(1, (100 - index) / 30);
	return bookShare + (Math.min(.65, bookShare + .4 * (1 - bookShare)) - bookShare) * t;
}
function hash(s) {
	let h = 2166136261;
	for (let i = 0; i < s.length; i++) {
		h ^= s.charCodeAt(i);
		h = Math.imul(h, 16777619);
	}
	return h >>> 0;
}
function buildDesk(input) {
	const plan = PLANS[planId(input.scenario, input.network)];
	const copy = SCENARIO_COPY[input.scenario];
	const share = clamp(input.physicalShare, 0, 1);
	const regime = regimeOf(input.scenario, input.cyclone);
	const raw = DISTRICTS.map((seed) => {
		const row = plan.districts[seed.name];
		const bookTonnes = row?.demand ?? 0;
		const affected = row?.affected ?? 0;
		const physicalTonnes = bookTonnes * share;
		const flows = DIVISIONS.flatMap((division) => {
			const tonnes = (row?.from[division] ?? 0) * share;
			return tonnes > .05 ? [{
				division,
				tonnes
			}] : [];
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
			owner: null
		};
	});
	const active = raw.filter((d) => d.affected > 0).sort((a, b) => b.physicalTonnes - a.physicalTonnes || b.affected - a.affected);
	const affected = active.reduce((s, d) => s + d.affected, 0);
	const bookTonnes = active.reduce((s, d) => s + d.bookTonnes, 0);
	const physicalTonnes = active.reduce((s, d) => s + d.physicalTonnes, 0);
	const cashPeople = active.reduce((s, d) => s + d.cashPeople, 0);
	const clusters = active.reduce((s, d) => s + d.clusters, 0);
	const bookImport = sumPorts(plan.ports);
	const importTonnes = physicalTonnes * (1 - localShareTarget(bookTonnes > 0 ? Math.max(0, bookTonnes - bookImport) / bookTonnes : 0, input.stapleIndex));
	const localTonnes = physicalTonnes - importTonnes;
	const importFactor = bookImport > 0 ? importTonnes / bookImport : 0;
	const dcMap = /* @__PURE__ */ new Map();
	for (const d of active) for (const leg of d.flows) dcMap.set(leg.division, (dcMap.get(leg.division) ?? 0) + leg.tonnes);
	const dcTonnes = DIVISIONS.filter((division) => (dcMap.get(division) ?? 0) > .5).map((division) => ({
		division,
		tonnes: dcMap.get(division) ?? 0,
		x: DC_XY[division].x,
		y: DC_XY[division].y
	}));
	const gateways = GATEWAYS.map((gateway) => {
		const tonnes = sumRecord(plan.ports[gateway.port]) * importFactor;
		const regular = GATEWAY_INDEX.regular[gateway.port];
		const throughput = GATEWAY_INDEX[regime][gateway.port];
		return {
			gateway,
			tonnes,
			throughput,
			regular,
			openIndex: regular > 0 ? throughput / regular : 0
		};
	}).sort((a, b) => b.tonnes - a.tonnes);
	const portLegs = GATEWAYS.flatMap((gateway) => {
		const parts = plan.ports[gateway.port];
		return DIVISIONS.flatMap((division) => {
			const tonnes = (parts[division] ?? 0) * importFactor;
			if (tonnes < 1) return [];
			return [{
				port: gateway.port,
				division,
				tonnes,
				x1: gateway.x,
				y1: gateway.y,
				x2: DC_XY[division].x,
				y2: DC_XY[division].y
			}];
		});
	});
	const busiest = gateways.find((g) => g.tonnes > 1);
	const singleGateway = busiest && importTonnes > 1 && busiest.tonnes / importTonnes > .8 ? busiest.gateway.short : null;
	const ownerByDivision = assignAgencies(active);
	for (const d of raw) if (d.affected > 0) d.owner = ownerByDivision.get(d.seed.division) ?? null;
	const agencies = AGENCIES.map((a) => {
		const rows = active.filter((d) => ownerByDivision.get(d.seed.division) === a.id);
		return {
			id: a.id,
			name: a.name,
			people: rows.reduce((s, d) => s + d.affected, 0),
			tonnes: rows.reduce((s, d) => s + d.physicalTonnes, 0),
			districts: rows.length
		};
	});
	const uncoordinated = uncoordinatedSplit(active);
	let lede = copy.lede;
	let instrumentLine = copy.instrument;
	if (input.cyclone && input.scenario === "south") {
		lede = "Cyclone on top of the southern flood. Ports lose throughput, and the caseload picks up shelter and rehabilitation, not only food and medicine.";
		instrumentLine = "Shelter and rehabilitation lead, with physical aid still moving. Chattogram and Mongla are both stressed in the capacity table.";
	} else if (input.cyclone && input.scenario === "stochastic") instrumentLine = "Coastal districts shift to shelter and rehabilitation. Gateway index uses the cyclone column.";
	else if (input.cyclone && input.scenario === "north") lede = "A cyclone stacked on a northern flash flood is outside the main scenario pair. The desk still applies the worst-case gateway index so you can see the pinch.";
	if (input.network === "flex") instrumentLine += " Flexible network: more gateways and more divisional DCs, so one closure does not own the plan.";
	const regimeLabel = regime === "north" ? "Northern flood index" : regime === "south" ? "Cyclone coincidence index" : regime === "worst" ? "Worst-case index" : "Regular gateway index";
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
		kgPerPerson: affected > 0 ? bookTonnes * 1e3 / affected : 0,
		dcTonnes,
		gateways,
		localTonnes,
		importTonnes,
		singleGateway,
		agencies,
		uncoordinated,
		portLegs,
		regimeLabel
	};
}
function assignAgencies(active) {
	const loads = /* @__PURE__ */ new Map();
	for (const d of active) loads.set(d.seed.division, (loads.get(d.seed.division) ?? 0) + d.affected);
	const divisions = [...loads.entries()].sort((a, b) => b[1] - a[1]);
	const tally = AGENCIES.map((a) => ({
		id: a.id,
		people: 0
	}));
	const out = /* @__PURE__ */ new Map();
	for (const [division, people] of divisions) {
		tally.sort((a, b) => a.people - b.people);
		const pick = tally[0];
		pick.people += people;
		out.set(division, pick.id);
	}
	return out;
}
function uncoordinatedSplit(active) {
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
		if (mid < .5) overlap += d.affected;
		else if (mid < .85) single += d.affected;
		else excluded += d.affected;
	}
	return {
		overlap,
		single,
		excluded
	};
}
function sumRecord(parts) {
	if (!parts) return 0;
	return Object.values(parts).reduce((s, n) => s + (n ?? 0), 0);
}
function sumPorts(ports) {
	return GATEWAYS.reduce((s, g) => s + sumRecord(ports[g.port]), 0);
}
function clamp(n, a, b) {
	return Math.min(b, Math.max(a, n));
}
function mulberry32(seed) {
	let a = seed >>> 0;
	return function rand() {
		a |= 0;
		a = a + 1831565813 | 0;
		let t = Math.imul(a ^ a >>> 15, 1 | a);
		t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
function normal(rand) {
	const u = Math.max(1e-12, 1 - rand());
	const v = rand();
	return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}
/** Two-bucket fill rate. The largest gateway can be derated; local tonnes sit in the safe bucket. */
function simulate(input) {
	const stressed = Math.max(0, input.importThroughBusiest);
	const safe = Math.max(0, input.otherTonnes);
	const plan = stressed + safe;
	if (plan < 1) return null;
	const rand = mulberry32(input.seed);
	const bins = Array.from({ length: 10 }, () => 0);
	let fillSum = 0;
	let hits = 0;
	const runs = Math.max(200, Math.min(4e3, input.runs));
	for (let i = 0; i < runs; i++) {
		const common = normal(rand);
		const shock = () => Math.max(.05, 1 + input.cv * (.55 * common + .84 * normal(rand)));
		const needS = stressed * shock();
		const needO = safe * shock();
		const stockS = stressed * input.capacity * (1 + input.safety) * (1 - input.nodeStress);
		const stockO = safe * input.capacity * (1 + input.safety);
		const need = needS + needO;
		const got = Math.min(needS, Math.max(0, stockS)) + Math.min(needO, Math.max(0, stockO));
		const fill = need > 0 ? got / need : 1;
		fillSum += fill;
		if (fill >= .95) hits += 1;
		const idx = Math.min(9, Math.max(0, Math.floor((fill - .7) / .03)));
		bins[idx] += 1;
	}
	const histogram = bins.map((count, i) => {
		return {
			label: `${70 + i * 3}`,
			count
		};
	});
	return {
		fillRate: fillSum / runs,
		shareAt95: hits / runs,
		histogram,
		busiestShare: stressed / plan
	};
}
function busiestGatewayTonnes(desk) {
	const top = desk.gateways.find((g) => g.tonnes > 0);
	return {
		name: top?.gateway.short ?? "None",
		tonnes: top?.tonnes ?? 0
	};
}
function shockSeed(scenario, cyclone) {
	return hash(`${scenario}:${cyclone ? "cyclone" : "calm"}:floodaid`);
}
var PHASES = [
	{
		at: 0,
		k: "Signal",
		d: "River and rainfall signal. About seven days before the worst isolation."
	},
	{
		at: 2,
		k: "Instrument",
		d: "Lock cash where markets still trade. Lock goods where they do not."
	},
	{
		at: 4,
		k: "Divisional DCs",
		d: "Cross-dock local purchases and gateway inflows. Divisional markets usually stay open."
	},
	{
		at: 6,
		k: "District stores",
		d: "Stage tonnes in district warehouses placed to stay reachable."
	},
	{
		at: 7,
		k: "Households",
		d: "Local organizers hand over to clusters. Cash, mobile money, or goods."
	}
];
function phaseFor(day) {
	let current = PHASES[0];
	for (const p of PHASES) if (day >= p.at) current = p;
	return current;
}
function instrumentLabel(instrument) {
	if (instrument === "cash") return "Cash";
	if (instrument === "physical") return "Physical";
	if (instrument === "rehab") return "Shelter";
	return "Watch";
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function DistrictsPanel(props) {
	const rows = props.desk.districts.filter((d) => props.showAll ? true : d.affected > 0).filter((d) => props.division === "all" || d.seed.division === props.division).filter((d) => d.seed.name.toLowerCase().includes(props.query.trim().toLowerCase())).sort((a, b) => b.affected - a.affected);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grid gap-4 lg:grid-cols-[16rem_minmax(0,1fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 border border-ink/10 bg-card p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "block text-sm font-medium",
					htmlFor: "cluster-size",
					children: "Cluster size"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					id: "cluster-size",
					className: "grid grid-cols-3 gap-2",
					role: "radiogroup",
					"aria-label": "Cluster size",
					children: [
						1e3,
						5e3,
						1e4
					].map((n) => {
						const on = props.desk.input.clusterSize === n;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							role: "radio",
							"aria-checked": on,
							className: `min-h-11 border px-2 text-sm tabular-nums ${on ? "border-teal bg-teal text-card" : "border-ink/15"}`,
							onClick: () => props.onCluster(n),
							children: n.toLocaleString("en-US")
						}, n);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-ink/65",
					children: [props.desk.clusters.toLocaleString("en-US"), " clusters across the caseload. One local organizer per cluster, with the NGO that already works there."]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-pressed": props.desk.input.zoning,
					className: `min-h-11 border px-3 text-left text-sm ${props.desk.input.zoning ? "border-teal bg-teal text-card" : "border-ink/15"}`,
					onClick: () => props.onZoning(!props.desk.input.zoning),
					children: props.desk.input.zoning ? "Zones are shared" : "Zones are not shared"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-ink/65",
					children: "If agencies waive privacy, each division is given to one operator so the same households are not served twice and the tail is not skipped."
				}),
				props.desk.input.zoning ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col gap-2",
					children: props.desk.agencies.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-t border-ink/10 pt-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: a.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-ink/70 tabular-nums",
							children: [
								people(a.people),
								" · ",
								a.districts,
								" districts"
							]
						})]
					}, a.id))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "flex flex-col gap-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-t border-ink/10 pt-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: "Likely overlap"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-ink/70 tabular-nums",
								children: people(props.desk.uncoordinated.overlap)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-ink/60",
								children: "The most visible half of the caseload, where every agency shows up."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-t border-ink/10 pt-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: "Likely missed"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-clay tabular-nums",
								children: people(props.desk.uncoordinated.excluded)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-ink/60",
								children: "The tail, if each agency only chases the obvious districts. An illustration, not a field count."
							})
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 border border-ink/10 bg-card",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 border-b border-ink/10 p-3 sm:flex-row",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "min-w-0 flex-1 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Search districts"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: props.query,
							onChange: (e) => props.onQuery(e.target.value),
							placeholder: "Search districts",
							className: "min-h-11 w-full border border-ink/15 bg-card px-3 text-ink outline-none focus-visible:outline-2 focus-visible:outline-teal"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Division"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: props.division,
							onChange: (e) => props.onDivision(e.target.value),
							className: "min-h-11 w-full border border-ink/15 bg-card px-3 sm:w-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "all",
								children: "All divisions"
							}), DIVISIONS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: d }, d))]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": props.showAll,
						className: "min-h-11 border border-ink/15 px-3 text-sm",
						onClick: () => props.onShowAll(!props.showAll),
						children: props.showAll ? "Showing all 64" : "In this plan"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-h-[32rem] overflow-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[36rem] text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "sticky top-0 bg-card text-xs tracking-wide text-ink/60 uppercase",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-3 font-medium",
								children: "District"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-3 font-medium",
								children: "People"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-3 font-medium",
								children: "Goods"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-3 font-medium",
								children: "Instrument"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-3 font-medium",
								children: "Clusters"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-3 font-medium",
								children: "Zone"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						colSpan: 6,
						className: "px-3 py-8 text-ink/60",
						children: "No districts match."
					}) }) : rows.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-ink/10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "min-h-11 text-left font-medium",
									onClick: () => props.onSelect(d.seed.name),
									children: [d.seed.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-0.5 block text-xs font-normal text-ink/55",
										children: d.seed.division
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 tabular-nums",
								children: d.affected ? people(d.affected) : "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 tabular-nums",
								children: d.physicalTonnes ? tonnes(d.physicalTonnes) : "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2",
								children: instrumentLabel(d.instrument)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 tabular-nums",
								children: d.clusters ? d.clusters.toLocaleString("en-US") : "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2",
								children: props.desk.input.zoning ? agencyName(d.owner) : "Open"
							})
						]
					}, d.seed.name)) })]
				})
			})]
		})]
	});
}
function agencyName(id) {
	return AGENCIES.find((a) => a.id === id)?.name ?? "—";
}
function OpsMap({ desk, selected, onSelect }) {
	const xs = [
		...desk.districts.map((d) => d.seed.x),
		...GATEWAYS.map((g) => g.x),
		...desk.dcTonnes.map((d) => d.x)
	];
	const ys = [
		...desk.districts.map((d) => d.seed.y),
		...GATEWAYS.map((g) => g.y),
		...desk.dcTonnes.map((d) => d.y)
	];
	const minX = Math.min(...xs) - 36;
	const maxX = Math.max(...xs) + 48;
	const minY = Math.min(...ys) - 28;
	const maxY = Math.max(...ys) + 28;
	const vb = `${minX} ${-maxY} ${maxX - minX} ${maxY - minY}`;
	const maxLeg = Math.max(1, ...desk.active.flatMap((d) => d.flows.map((f) => f.tonnes)), ...desk.portLegs.map((p) => p.tonnes));
	const ranked = new Set(desk.active.slice(0, 5).map((d) => d.seed.name));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: vb,
			role: "img",
			"aria-label": "Operational map. Kilometres from Dhaka, north at the top. Lines are aid flows.",
			className: "h-auto w-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: minX,
					y: -maxY,
					width: maxX - minX,
					height: maxY - minY,
					fill: "var(--color-card)"
				}),
				grid(minX, maxX, minY, maxY),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, {
					minX,
					maxY
				}),
				desk.portLegs.map((leg) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: leg.x1,
					y1: -leg.y1,
					x2: leg.x2,
					y2: -leg.y2,
					stroke: "var(--color-teal)",
					strokeWidth: stroke(leg.tonnes, maxLeg),
					strokeDasharray: "3 2",
					strokeLinecap: "round",
					opacity: .85,
					pointerEvents: "none"
				}, `${leg.port}-${leg.division}`)),
				desk.active.flatMap((d) => d.flows.map((f) => {
					const dc = desk.dcTonnes.find((x) => x.division === f.division);
					if (!dc) return null;
					const hot = selected === d.seed.name;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: dc.x,
						y1: -dc.y,
						x2: d.seed.x,
						y2: -d.seed.y,
						stroke: hot ? "var(--color-clay)" : "var(--color-ink)",
						strokeWidth: stroke(f.tonnes, maxLeg),
						strokeLinecap: "round",
						opacity: selected && !hot ? .18 : .8,
						pointerEvents: "none"
					}, `${d.seed.name}-${f.division}`);
				})),
				desk.districts.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DistrictDot, {
					district: d,
					selected: selected === d.seed.name,
					labeled: ranked.has(d.seed.name) || selected === d.seed.name,
					onSelect
				}, d.seed.name)),
				desk.dcTonnes.map((dc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: dc.x - 4.2,
					y: -dc.y - 4.2,
					width: 8.4,
					height: 8.4,
					fill: "var(--color-card)",
					stroke: "var(--color-ink)",
					strokeWidth: 1.4,
					pointerEvents: "none"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
					x: dc.x + 7,
					y: -dc.y + 2,
					fill: "var(--color-ink)",
					fontSize: 9,
					fontFamily: "Outfit, sans-serif",
					pointerEvents: "none",
					children: [dc.division, " DC"]
				})] }, dc.division)),
				desk.gateways.filter((g) => g.tonnes > 1).map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
					points: diamond(g.gateway.x, -g.gateway.y, 5.2),
					fill: "var(--color-teal)",
					pointerEvents: "none"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: g.gateway.x + 8,
					y: -g.gateway.y - 6,
					fill: "var(--color-teal)",
					fontSize: 8.5,
					fontFamily: "Outfit, sans-serif",
					pointerEvents: "none",
					children: g.gateway.short
				})] }, g.gateway.port))
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "absolute bottom-2 left-3 bg-card/90 px-2 py-1 text-xs text-ink/70",
			children: "Kilometres from Dhaka. Squares are divisional DCs. Diamonds are gateways. Dashed lines are inbound."
		})]
	});
}
function DistrictDot({ district, selected, labeled, onSelect }) {
	const active = district.affected > 0;
	const r = active ? 3.2 + Math.sqrt(district.affected) / 900 : 1.7;
	const fill = !active ? "var(--color-ink)" : district.instrument === "cash" ? "var(--color-teal)" : district.instrument === "rehab" ? "var(--color-ink)" : "var(--color-clay)";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: district.seed.x,
			cy: -district.seed.y,
			r: selected ? r + 2.4 : r,
			fill,
			opacity: active ? 1 : .28,
			stroke: selected ? "var(--color-card)" : "transparent",
			strokeWidth: selected ? 1.5 : 0,
			pointerEvents: "none"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: district.seed.x,
			cy: -district.seed.y,
			r: 26,
			fill: "transparent",
			className: "cursor-pointer",
			role: "button",
			tabIndex: 0,
			"aria-label": `${district.seed.name}, ${district.seed.division}`,
			onClick: () => onSelect(district.seed.name),
			onKeyDown: (e) => {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					onSelect(district.seed.name);
				}
			}
		}),
		labeled && active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
			x: district.seed.x + r + 2,
			y: -district.seed.y - r - 1,
			fill: "var(--color-ink)",
			fontSize: 8,
			fontFamily: "Outfit, sans-serif",
			pointerEvents: "none",
			children: district.seed.name
		}) : null
	] });
}
function grid(minX, maxX, minY, maxY) {
	const lines = [];
	for (let x = Math.ceil(minX / 100) * 100; x <= maxX; x += 100) lines.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
		x1: x,
		x2: x,
		y1: -maxY,
		y2: -minY,
		stroke: "var(--color-ink)",
		strokeOpacity: .08,
		strokeWidth: .6
	}, `vx${x}`));
	for (let y = Math.ceil(minY / 100) * 100; y <= maxY; y += 100) lines.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
		y1: -y,
		y2: -y,
		x1: minX,
		x2: maxX,
		stroke: "var(--color-ink)",
		strokeOpacity: .08,
		strokeWidth: .6
	}, `hy${y}`));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { children: lines });
}
function Scale({ minX, maxY }) {
	const x = minX + 16;
	const y = -maxY + 18;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: x,
			x2: x + 100,
			y1: y,
			y2: y,
			stroke: "var(--color-ink)",
			strokeWidth: 1.2
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: x,
			x2: x,
			y1: y - 3,
			y2: y + 3,
			stroke: "var(--color-ink)",
			strokeWidth: 1.2
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: x + 100,
			x2: x + 100,
			y1: y - 3,
			y2: y + 3,
			stroke: "var(--color-ink)",
			strokeWidth: 1.2
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
			x,
			y: y + 12,
			fill: "var(--color-ink)",
			fontSize: 8,
			fontFamily: "Outfit, sans-serif",
			children: "100 km"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
			x: x + 118,
			y: y + 4,
			fill: "var(--color-ink)",
			fontSize: 8,
			fontFamily: "Outfit, sans-serif",
			children: "N"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
			points: `${x + 128},${y - 8} ${x + 124},${y + 2} ${x + 132},${y + 2}`,
			fill: "var(--color-ink)"
		})
	] });
}
function stroke(tonnes, max) {
	return .7 + 5 * Math.sqrt(tonnes / max);
}
function diamond(x, y, r) {
	return `${x},${y - r} ${x + r},${y} ${x},${y + r} ${x - r},${y}`;
}
function ServicePanel(props) {
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setReady(true);
	}, []);
	const current = useSim(props.desk, props);
	const otherInput = {
		...props.desk.input,
		network: props.desk.input.network === "base" ? "flex" : "base"
	};
	const other = useSim((0, import_react.useMemo)(() => buildDesk(otherInput), [
		otherInput.scenario,
		otherInput.network,
		otherInput.cyclone,
		otherInput.physicalShare,
		otherInput.stapleIndex,
		otherInput.clusterSize,
		otherInput.zoning
	]), props);
	const busy = busiestGatewayTonnes(props.desk);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border border-ink/10 bg-card p-4 sm:p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-widest text-teal uppercase",
					children: "Fill rate"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-serif text-5xl text-ink tabular-nums",
					children: current ? pct1(current.fillRate) : "—"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-xl text-sm text-ink/75",
					children: "Expected share of physical tonnes that can be filled. The humanitarian mark used here is 95%. This is a fast surrogate of a 10,000-run study: demand is shocked, then the largest gateway is derated if you set gateway stress. It is not a second MILP."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							k: "Runs at or above 95%",
							v: current ? pct(current.shareAt95) : "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							k: props.desk.input.network === "base" ? "Flexible network" : "Base network",
							v: other ? pct1(other.fillRate) : "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							k: "Largest gateway",
							v: `${busy.name} · ${tonnes(busy.tonnes)}`
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 h-48",
					children: ready && current ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
							data: current.histogram,
							barCategoryGap: 2,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "label",
									tick: {
										fill: "var(--color-ink)",
										fontSize: 11
									},
									axisLine: false,
									tickLine: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, { hide: true }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
									cursor: {
										fill: "var(--color-ink)",
										opacity: .05
									},
									content: ({ active, payload }) => {
										if (!active || !payload?.length) return null;
										const row = payload[0].payload;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "border border-ink/15 bg-card px-2 py-1 text-xs text-ink",
											children: [
												"Fill ",
												row.label,
												"% and up · ",
												row.count,
												" runs"
											]
										});
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "count",
									fill: "var(--color-teal)",
									isAnimationActive: false
								})
							]
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full bg-ink/5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-ink/60",
					children: "Histogram starts at 70% fill. Anything lower is stacked in the first bar."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 border border-ink/10 bg-card p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
					label: "Capacity positioned",
					hint: "1.00 is the workbook mean. 0.90 is the tight case, where fill rate usually sits near 93%.",
					min: .7,
					max: 1.15,
					step: .01,
					value: props.capacity,
					format: (n) => n.toFixed(2),
					onChange: props.onCapacity
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
					label: "Safety stock",
					hint: "Extra stock above the mean. This is what holds the 95% mark when demand runs hot.",
					min: 0,
					max: .3,
					step: .01,
					value: props.safety,
					format: (n) => pct(n),
					onChange: props.onSafety
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
					label: "Demand uncertainty",
					hint: "Coefficient of variation on event tonnes.",
					min: .05,
					max: .4,
					step: .01,
					value: props.cv,
					format: (n) => pct(n),
					onChange: props.onCv
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
					label: "Stress on largest gateway",
					hint: "Share of that gateway's tonnes you cannot move. Local purchase is not hit.",
					min: 0,
					max: .5,
					step: .01,
					value: props.nodeStress,
					format: (n) => pct(n),
					onChange: props.onStress
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto grid grid-cols-1 gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "min-h-11 border border-ink/15 px-3 text-left text-sm",
							onClick: () => apply(props, 1, .08, .15, 0),
							children: "Workbook posture"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "min-h-11 border border-ink/15 px-3 text-left text-sm",
							onClick: () => apply(props, .9, .08, .15, 0),
							children: "Tight capacity"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "min-h-11 border border-ink/15 px-3 text-left text-sm",
							onClick: () => apply(props, 1, 0, .15, 0),
							children: "No safety stock"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "min-h-11 border border-clay/40 px-3 text-left text-sm text-clay",
							onClick: () => apply(props, 1, .08, .15, .2),
							children: "Largest gateway at 80%"
						})
					]
				})
			]
		})]
	});
}
function apply(props, capacity, safety, cv, stress) {
	props.onCapacity(capacity);
	props.onSafety(safety);
	props.onCv(cv);
	props.onStress(stress);
}
function useSim(desk, knobs) {
	return (0, import_react.useMemo)(() => {
		const busy = busiestGatewayTonnes(desk);
		return simulate({
			importThroughBusiest: busy.tonnes,
			otherTonnes: Math.max(0, desk.physicalTonnes - busy.tonnes),
			capacity: knobs.capacity,
			safety: knobs.safety,
			cv: knobs.cv,
			nodeStress: knobs.nodeStress,
			runs: 1600,
			seed: shockSeed(desk.input.scenario, desk.input.cyclone)
		});
	}, [
		desk,
		knobs.capacity,
		knobs.safety,
		knobs.cv,
		knobs.nodeStress
	]);
}
function Stat({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-t border-ink/10 pt-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-xs text-ink/60",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-1 text-sm font-medium text-ink tabular-nums",
			children: v
		})]
	});
}
function Slider({ label, hint, min, max, step, value, format, onChange }) {
	const id = label.replace(/\s+/g, "-").toLowerCase();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		htmlFor: id,
		className: "block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-baseline justify-between gap-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tabular-nums text-ink/70",
					children: format(value)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id,
				className: "mt-2 min-h-11",
				type: "range",
				min,
				max,
				step,
				value,
				onChange: (e) => onChange(Number(e.target.value))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-xs text-ink/60",
				children: hint
			})
		]
	});
}
var SCENARIOS = [
	{
		id: "north",
		label: "North flash",
		hint: "2–4 weeks, markets often open"
	},
	{
		id: "south",
		label: "South sustained",
		hint: "Into the second month"
	},
	{
		id: "stochastic",
		label: "Stochastic",
		hint: "Preposition for the blend"
	}
];
function Desk() {
	const [scenario, setScenario] = (0, import_react.useState)("north");
	const [network, setNetwork] = (0, import_react.useState)("base");
	const [cyclone, setCyclone] = (0, import_react.useState)(false);
	const [physicalOverride, setPhysicalOverride] = (0, import_react.useState)(null);
	const [stapleIndex, setStapleIndex] = (0, import_react.useState)(100);
	const [clusterSize, setClusterSize] = (0, import_react.useState)(5e3);
	const [zoning, setZoning] = (0, import_react.useState)(true);
	const [view, setView] = (0, import_react.useState)("map");
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [query, setQuery] = (0, import_react.useState)("");
	const [division, setDivision] = (0, import_react.useState)("all");
	const [showAll, setShowAll] = (0, import_react.useState)(false);
	const [day, setDay] = (0, import_react.useState)(0);
	const [capacity, setCapacity] = (0, import_react.useState)(1);
	const [safety, setSafety] = (0, import_react.useState)(.08);
	const [cv, setCv] = (0, import_react.useState)(.15);
	const [nodeStress, setNodeStress] = (0, import_react.useState)(0);
	const physicalShare = physicalOverride ?? defaultPhysical(scenario, cyclone);
	const desk = (0, import_react.useMemo)(() => buildDesk({
		scenario,
		network,
		cyclone,
		physicalShare,
		stapleIndex,
		clusterSize,
		zoning
	}), [
		scenario,
		network,
		cyclone,
		physicalShare,
		stapleIndex,
		clusterSize,
		zoning
	]);
	const picked = desk.districts.find((d) => d.seed.name === selected) ?? null;
	const phase = phaseFor(day);
	const importShare = desk.physicalTonnes > 0 ? desk.importTonnes / desk.physicalTonnes : 0;
	function chooseScenario(id) {
		setScenario(id);
		setCyclone(false);
		setPhysicalOverride(null);
		setSelected(null);
		setShowAll(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 pt-6 pb-20 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "border-b border-ink/10 pb-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mb-4 h-1 w-16 bg-teal" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-widest text-teal uppercase",
						children: "FloodAid Systems"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-serif text-4xl text-ink sm:text-5xl",
							children: "Planning desk"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-sm text-sm text-ink/70",
							children: "Bangladesh flood aid. One week from the river signal to a household handover."
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-5 grid gap-3",
				"aria-label": "Scenario",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-2 sm:grid-cols-3",
					role: "radiogroup",
					"aria-label": "Flood scenario",
					children: SCENARIOS.map((s) => {
						const on = scenario === s.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							role: "radio",
							"aria-checked": on,
							onClick: () => chooseScenario(s.id),
							className: cn("min-h-11 border px-3 py-2 text-left", on ? "border-teal bg-teal text-card" : "border-ink/15 bg-card text-ink"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm font-medium",
								children: s.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("block text-xs", on ? "text-card/80" : "text-ink/60"),
								children: s.hint
							})]
						}, s.id);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid flex-1 grid-cols-2 gap-2",
						role: "radiogroup",
						"aria-label": "Network",
						children: [["base", "Base network"], ["flex", "Flexible network"]].map(([id, label]) => {
							const on = network === id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								role: "radio",
								"aria-checked": on,
								onClick: () => setNetwork(id),
								className: cn("min-h-11 border px-3 text-sm font-medium", on ? "border-ink bg-ink text-card" : "border-ink/15 bg-card"),
								children: label
							}, id);
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-pressed": cyclone,
						onClick: () => {
							setCyclone((v) => !v);
							setPhysicalOverride(null);
						},
						className: cn("min-h-11 border px-3 text-left text-sm sm:w-56", cyclone ? "border-clay bg-clay text-card" : "border-ink/15 bg-card"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-medium",
							children: "Cyclone coincidence"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("block text-xs", cyclone ? "text-card/80" : "text-ink/60"),
							children: cyclone ? "On. Ports and shelter stressed." : "Off. Flood only."
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4",
				"aria-label": "Caseload",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						k: "People in the plan",
						v: people(desk.affected)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						k: "Reached with cash",
						v: people(desk.cashPeople)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						k: "Physical tonnes",
						v: tonnes(desk.physicalTonnes)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						k: `Clusters of ${clusterSize.toLocaleString("en-US")}`,
						v: desk.clusters.toLocaleString("en-US")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-4 border border-ink/10 bg-card p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-2xl",
							children: phase.k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-ink/60 tabular-nums",
							children: [
								"Day ",
								day,
								" of ",
								desk.leadDays
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 max-w-2xl text-sm text-ink/75",
						children: phase.d
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-3 block text-xs text-ink/60",
						htmlFor: "day",
						children: ["Move through the response week", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "day",
							className: "mt-2",
							type: "range",
							min: 0,
							max: 10,
							step: 1,
							value: day,
							onChange: (e) => setDay(Number(e.target.value))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-2 grid grid-cols-5 gap-1 text-xs",
						children: PHASES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: cn("border-t-2 pt-1", day >= p.at ? "border-teal text-ink" : "border-ink/15 text-ink/45"),
							children: p.k
						}, p.k))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex gap-2 overflow-x-auto",
				role: "tablist",
				"aria-label": "Desk sections",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tab, {
						id: "map",
						view,
						setView,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Map$1, {
							size: 16,
							"aria-hidden": true
						}),
						label: "Network"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tab, {
						id: "districts",
						view,
						setView,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
							size: 16,
							"aria-hidden": true
						}),
						label: "Districts"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tab, {
						id: "service",
						view,
						setView,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
							size: 16,
							"aria-hidden": true
						}),
						label: "Service level"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				role: "tabpanel",
				children: [
					view === "map" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid items-start gap-4 lg:grid-cols-[minmax(0,1.5fr)_20rem]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border border-ink/10 bg-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpsMap, {
								desk,
								selected,
								onSelect: (name) => {
									setSelected(name);
									setView("map");
								}
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2 overflow-x-auto border-t border-ink/10 p-3",
								children: desk.active.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setSelected(d.seed.name),
									className: cn("min-h-11 shrink-0 border px-3 text-sm", selected === d.seed.name ? "border-ink bg-ink text-card" : "border-ink/15"),
									children: d.seed.name
								}, d.seed.name))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
							className: "border border-ink/10 bg-card p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs font-medium tracking-widest text-teal uppercase",
									children: [desk.weeks, " week disruption"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-1 font-serif text-3xl",
									children: desk.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-ink/75",
									children: desk.lede
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm",
									children: desk.instrumentLine
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-xs text-ink/60",
									children: [
										"Workbook ration ",
										kg(desk.kgPerPerson),
										" per person in the caseload. ",
										desk.regimeLabel,
										"."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "mt-5 block text-sm",
									htmlFor: "physical",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium",
											children: "Physical share of the caseload"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "tabular-nums text-ink/70",
											children: pct(physicalShare)
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "physical",
										className: "mt-2",
										type: "range",
										min: 0,
										max: 1,
										step: .01,
										value: physicalShare,
										onChange: (e) => setPhysicalOverride(Number(e.target.value))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "mt-4 block text-sm",
									htmlFor: "staple",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium",
												children: "Staple price index"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "tabular-nums text-ink/70",
												children: stapleIndex
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "staple",
											className: "mt-2",
											type: "range",
											min: 70,
											max: 150,
											step: 1,
											value: stapleIndex,
											onChange: (e) => setStapleIndex(Number(e.target.value))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-xs text-ink/60",
											children: "100 keeps the workbook split. Above 100, local buying is pulled back so aid does not inflame prices."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-2 w-full overflow-hidden bg-ink/15",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-full bg-teal",
											style: { width: `${importShare * 100}%` }
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 flex justify-between text-xs text-ink/70 tabular-nums",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Import ", tonnes(desk.importTonnes)] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Local ", tonnes(desk.localTonnes)] })]
									})]
								}),
								desk.singleGateway ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 border border-clay/40 bg-clay/10 p-3 text-sm text-clay",
									children: [
										"More than 80% of imports in this network come through ",
										desk.singleGateway,
										". One closure stalls the physical plan. The flexible network is the comparison."
									]
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 flex flex-col gap-3",
									children: desk.gateways.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-baseline justify-between gap-2 text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium",
												children: g.gateway.short
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-ink/70 tabular-nums",
												children: g.tonnes > 1 ? tonnes(g.tonnes) : "Idle"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1 h-1.5 bg-ink/10",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: cn("h-full", g.openIndex < .5 ? "bg-clay" : "bg-teal"),
												style: { width: `${Math.max(4, Math.min(100, g.openIndex * 100))}%` }
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 text-xs text-ink/55",
											children: [
												"Throughput ",
												g.throughput.toFixed(2),
												" vs ",
												g.regular.toFixed(2),
												" regular, million t/month. ",
												g.gateway.note
											]
										})
									] }, g.gateway.port))
								}),
								picked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DistrictCard, {
									district: picked,
									zoned: zoning
								}) : null
							]
						})]
					}) : null,
					view === "districts" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DistrictsPanel, {
						desk,
						query,
						division,
						showAll,
						onQuery: setQuery,
						onDivision: setDivision,
						onShowAll: setShowAll,
						onCluster: setClusterSize,
						onZoning: setZoning,
						onSelect: (name) => {
							setSelected(name);
							setView("map");
						}
					}) : null,
					view === "service" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicePanel, {
						desk,
						capacity,
						safety,
						cv,
						nodeStress,
						onCapacity: setCapacity,
						onSafety: setSafety,
						onCv: setCv,
						onStress: setNodeStress
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
				className: "mt-8 border-t border-ink/10 pt-4 text-sm text-ink/70",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
					className: "min-h-11 cursor-pointer font-medium text-ink",
					children: "Where the numbers come from"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 max-w-3xl space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "District coordinates are kilometres from Dhaka. Populations, aid tonnes, and the divisional flows are the scenario workbook solutions: a concentrated network and a flexible one, for a northern event, a southern event, and a stochastic blend." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Northern and southern caseloads use the full district population in those files (about 20 kg per person in the north, about 40 kg in the south). The stochastic file uses a probability-weighted affected population, and only part of its tonnes arrive through a gateway. The rest is treated as local purchase at the divisional DC." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Gateway indices are the workbook throughput figures, in million tonnes per month, for regular trade, a northern flood, a southern cyclone, and a worst case. They describe how open a port is. They are not a live feed from the flood forecasting centre." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "FloodAid Systems is the planning desk behind that library. Masrur Rahman Faraz. frazbd2@gmail.com." })
					]
				})]
			})
		]
	});
}
function Kpi({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-ink/10 bg-card px-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-ink/60",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 font-serif text-2xl text-ink tabular-nums sm:text-3xl",
			children: v
		})]
	});
}
function Tab({ id, view, setView, icon, label }) {
	const on = view === id;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		role: "tab",
		"aria-selected": on,
		onClick: () => setView(id),
		className: cn("inline-flex min-h-11 shrink-0 items-center gap-2 border px-3 text-sm font-medium", on ? "border-ink bg-ink text-card" : "border-ink/15 bg-card text-ink"),
		children: [icon, label]
	});
}
function DistrictCard({ district, zoned }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-5 border-t border-ink/10 pt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-ink/50 uppercase",
				children: district.seed.division
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-serif text-2xl",
				children: district.seed.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm",
				children: [instrumentLabel(district.instrument), " is the lead instrument."]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-3 grid grid-cols-2 gap-2 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs text-ink/55",
						children: "People"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "tabular-nums",
						children: people(district.affected)
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs text-ink/55",
						children: "Goods"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "tabular-nums",
						children: tonnes(district.physicalTonnes)
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs text-ink/55",
						children: "Cash caseload"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "tabular-nums",
						children: people(district.cashPeople)
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs text-ink/55",
						children: "Clusters"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "tabular-nums",
						children: district.clusters.toLocaleString("en-US")
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 text-sm text-ink/75",
				children: district.flows.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex justify-between gap-3 border-t border-ink/10 py-1 tabular-nums",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [f.division, " DC"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tonnes(f.tonnes) })]
				}, f.division))
			}),
			zoned && district.owner ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-xs text-ink/60",
				children: [
					"Zoned to ",
					district.owner === "gov" ? "Government" : district.owner === "un" ? "United Nations" : "Local NGOs",
					"."
				]
			}) : null
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Desk, {});
}
//#endregion
export { Home as component };
