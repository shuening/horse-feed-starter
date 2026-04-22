xport type HorseId = "tenor" | "odinn" | "spoi" | "uffie";

export type SymptomId =
  | "poor_teeth"
  | "sensitive_digestion"
  | "poor_appetite"
  | "pssm"
  | "insulin";

export type Goal = "gain" | "maintain" | "lose";

export type FeedingItem = {
  name: string;
  amount: string;
  note?: string;
};

export type HorseProfile = {
  id: HorseId;
  name: string;
  weightLb: number;
  notes: string[];
  defaultGoal: Goal;
  defaultSymptoms: SymptomId[];
  baselinePlan: string[];
  feedingSuggestion: FeedingItem[];
  supplements: FeedingItem[];
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
    feedingSuggestion: [
      { name: "Timothy hay cubes", amount: "9.5 lb/day", note: "Feed as a fully soaked mash." },
      { name: "Beet pulp / beet cubes", amount: "1.0 lb/day dry equivalent", note: "Soak well before feeding if used as extra digestible fiber." },
      { name: "Haystack Special Blend", amount: "2.0 lb/day" },
    ],
    supplements: [
      { name: "Triple Crown Balancer Gold", amount: "0.75 lb/day" },
      { name: "Salt", amount: "Free-choice", note: "Keep water available at all times." },
    ],
  },
  {
    id: "odinn",
    name: "Odinn",
    weightLb: 700,
