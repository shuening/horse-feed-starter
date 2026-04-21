export type HorseId = "tenor" | "odinn" | "spoi" | "uffie";

export type SymptomId =
  | "poor_teeth"
  | "sensitive_digestion"
  | "poor_appetite"
  | "pssm"
  | "insulin";

export type Goal = "gain" | "maintain" | "lose";

export type HorseProfile = {
  id: HorseId;
  name: string;
  weightLb: number;
  notes: string[];
  defaultGoal: Goal;
  defaultSymptoms: SymptomId[];
  baselinePlan: string[];
};

export const HORSES: HorseProfile[] = [
  {
    id: "tenor",
    name: "Tenor",
    weightLb: 700,
    notes: ["Senior", "Teeth and digestive issues", "PSSM"],
    defaultGoal: "maintain",
    defaultSymptoms: ["poor_teeth", "sensitive_digestion", "pssm"],
    baselinePlan: [
      "Build around soaked or easy-to-chew fiber sources.",
      "Keep starch and sugar low because of PSSM.",
      "Make feed changes gradually and watch manure quality.",
    ],
  },
  {
    id: "odinn",
    name: "Odinn",
    weightLb: 700,
    notes: ["Healthy adult"],
    defaultGoal: "maintain",
    defaultSymptoms: [],
    baselinePlan: [
      "Start with a simple forage-first maintenance plan.",
      "Adjust only if body condition or workload changes.",
    ],
  },
  {
    id: "spoi",
    name: "Spoi",
    weightLb: 950,
    notes: ["Healthy adult", "A little overweight", "Possible insulin concerns"],
    defaultGoal: "lose",
    defaultSymptoms: ["insulin"],
    baselinePlan: [
      "Use a conservative calorie plan because Spoi is a little overweight.",
      "Prioritize low-sugar forage and avoid adding calories unless truly needed.",
    ],
  },
  {
    id: "uffie",
    name: "Uffie",
    weightLb: 800,
    notes: ["Healthy adult"],
    defaultGoal: "maintain",
    defaultSymptoms: [],
    baselinePlan: [
      "Start with a balanced forage-first maintenance ration.",
      "Increase or reduce feed only if body condition begins to shift.",
    ],
  },
];

export function getHorseById(id: HorseId) {
  return HORSES.find((horse) => horse.id === id)!;
}
