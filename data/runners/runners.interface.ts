export type RunnerType = 'locus' | 'glitch' | 'blackbird' | 'void';

export interface Runner {
  type: RunnerType;
  summary: RunnerSummary;
  abilities: RunnerAbilities;
  imageUrl: string;
}

export interface RunnerSummary {
  kitType: string;
  occupation: string;
  origin: string;
  role: string;
  description: string;
}

export interface RunnerAbilities {
  prime: RunnerAbility;
  tactical: RunnerAbility;
  trait1: RunnerAbility;
  trait2: RunnerAbility;
}

export interface RunnerAbility {
  name: string;
  description: string;
}
