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
