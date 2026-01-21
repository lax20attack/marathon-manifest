import { RunnerAbilities } from './abilities.interface';

export const ABILITY_SLOTS: { name: string; key: keyof RunnerAbilities }[] = [
  { name: 'Prime Ability', key: 'prime' },
  { name: 'Tactical Ability', key: 'tactical' },
  { name: 'Trait 1', key: 'trait1' },
  { name: 'Trait 2', key: 'trait2' },
];
