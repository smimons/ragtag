export enum StarshipRole {
  CAPTAIN = "captain",
  GUNNER = "gunner",
  ENGINEER = "engineer",
  PILOT = "pilot",
}

export enum Attribute {
  PROWESS = "prowess",
  TECHNQIUE = "technique",
  ACUITY = "acuity",
  SOCIAL = "social",
}

export enum WeaponType {
  LM = "lm",
  LR = "lr",
  HM = "hm",
  HR = "hr",
}

export enum Training {
  UNTRAINED = "untrained",
  COMPETENT = "competent",
  MASTERED = "mastered",
}

export const TrainingDiceMap: Record<number, Training> = {
  1: Training.UNTRAINED,
  2: Training.COMPETENT,
  3: Training.MASTERED,
};
export const DEFAULT_MAX_STAT: number = 6;
