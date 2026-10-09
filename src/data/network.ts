/* Planning figures extracted from the FloodAid scenario workbooks.
   District coordinates are kilometres from Dhaka. Aid tonnes and divisional
   flows are the MILP solutions (base network and flexible network). */
export type DivisionName =
  | "Dhaka"
  | "Chattogram"
  | "Mymensingh"
  | "Sylhet"
  | "Rangpur"
  | "Rajshahi"
  | "Khulna"
  | "Barishal"

export type PortName = "Dhaka" | "Chattogram" | "Sylhet" | "Jashore" | "Bagerhat"

export type DistrictSeed = {
  name: string
  x: number
  y: number
  population: number
  division: DivisionName
}

export type DistrictPlan = {
  demand: number
  affected: number
  from: Partial<Record<DivisionName, number>>
}

export type NetworkPlan = {
  districts: Record<string, DistrictPlan>
  ports: Record<PortName, Partial<Record<DivisionName, number>>>
}

export const DISTRICTS: DistrictSeed[] = [
  {
    "name": "Dhaka",
    "x": 0.0,
    "y": 0.0,
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
    "x": 78.0,
    "y": -38.8,
    "population": 6212216,
    "division": "Chattogram"
  },
  {
    "name": "Mymensingh",
    "x": -1.0,
    "y": 104.0,
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
    "y": 49.0,
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
    "x": 71.0,
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
    "x": 31.0,
    "y": 12.1,
    "population": 2584452,
    "division": "Dhaka"
  },
  {
    "name": "Barishal",
    "x": -6.0,
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
    "x": -217.0,
    "y": 87.3,
    "population": 1835528,
    "division": "Rajshahi"
  },
  {
    "name": "Patuakhali",
    "x": -8.4,
    "y": -161.0,
    "population": 1727254,
    "division": "Barishal"
  },
  {
    "name": "Feni",
    "x": 100.0,
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
    "y": 6.0,
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
    "y": -71.0,
    "population": 1293027,
    "division": "Dhaka"
  },
  {
    "name": "Shariatpur",
    "x": -4.0,
    "y": -63.0,
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
    "x": -78.0,
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
    "y": -128.0,
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
]

export const PLANS: Record<string, NetworkPlan> = {
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
        "from": {
          "Sylhet": 77140.74
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
          "Sylhet": 53909.9
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
          "Mymensingh": 51244.64
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
          "Mymensingh": 38718.3,
          "Sylhet": 7864.92
        },
        "affected": 2329161
      },
      "Netrokona": {
        "demand": 46497.12,
        "from": {
          "Sylhet": 46497.12
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
          "Mymensingh": 30037.06
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
        "Mymensingh": 120000.0
      },
      "Chattogram": {},
      "Sylhet": {
        "Sylhet": 185412.68
      },
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
      "Chattogram": {
        "Sylhet": 22516.13
      },
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
        "from": {
          "Barishal": 145010.08
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
          "Khulna": 104535.4
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
          "Khulna": 87863.24
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
        "demand": 77524.44,
        "from": {
          "Barishal": 77524.44
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
          "Khulna": 7033.0,
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
      "Dhaka": {
        "Barishal": 5021.35
      },
      "Chattogram": {
        "Chattogram": 124479.95
      },
      "Sylhet": {},
      "Jashore": {
        "Khulna": 36471.97
      },
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
        "from": {
          "Chattogram": 18338.93
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
        "demand": 11571.11,
        "from": {
          "Sylhet": 11571.11
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
          "Chattogram": 87006.05
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
          "Chattogram": 5646.53
        },
        "affected": 1129306
      },
      "Naogaon": {
        "demand": 0,
        "from": {},
        "affected": 0
      },
      "Sunamganj": {
        "demand": 8086.48,
        "from": {
          "Sylhet": 8086.48
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
          "Khulna": 62721.24
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
        "demand": 7686.7,
        "from": {
          "Rangpur": 7686.7
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
        "demand": 6987.48,
        "from": {
          "Rangpur": 6987.48
        },
        "affected": 768623
      },
      "Netrokona": {
        "demand": 6974.57,
        "from": {
          "Sylhet": 6974.57
        },
        "affected": 767202
      },
      "Satkhira": {
        "demand": 52717.94,
        "from": {
          "Khulna": 52717.94
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
          "Barishal": 46514.66
        },
        "affected": 1162867
      },
      "Bhola": {
        "demand": 3865.03,
        "from": {
          "Barishal": 3865.03
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
          "Barishal": 3454.51
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
        "demand": 3226.01,
        "from": {
          "Khulna": 3226.01
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
        "demand": 4505.56,
        "from": {
          "Rangpur": 4505.56
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
          "Barishal": 2021.06
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
      "Dhaka": {},
      "Chattogram": {
        "Chattogram": 43503.02
      },
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
        "demand": 3226.0,
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
      "Dhaka": {
        "Barishal": 1506.4
      },
      "Chattogram": {
        "Chattogram": 37343.98
      },
      "Sylhet": {},
      "Jashore": {
        "Khulna": 10941.59
      },
      "Bagerhat": {
        "Khulna": 37343.98,
        "Barishal": 37343.98
      }
    }
  }
}
