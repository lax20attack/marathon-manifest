import { RunnerStatSlot, RunnerStatType } from './runners.interface';

export const RUNNER_STAT_SLOTS: RunnerStatSlot[] = [
  {
    type: RunnerStatType.HeatCapacity,
    key: 'heatCapacity',
    description: 'Increases the number of movement actions, such as sprinting or sliding, you can perform before overheating.',
    images: { icon: 'assets/runners/stats/heat-capacity.jpg' },
  },
  {
    type: RunnerStatType.Agility,
    key: 'agility',
    description: 'Increases your movement speed and jump height.',
    images: { icon: 'assets/runners/stats/agility.jpg' },
  },
  {
    type: RunnerStatType.LootSpeed,
    key: 'lootSpeed',
    description: `Increases how quickly items are revealed when looting containers.`,
    images: { icon: 'assets/runners/stats/loot-speed.jpg' },
  },
  {
    type: RunnerStatType.MeleeDamage,
    key: 'meleeDamage',
    description: `Increases the damage dealt by melee attacks.`,
    images: { icon: 'assets/items/placeholder.png' },
  },
  {
    type: RunnerStatType.PrimeRecovery,
    key: 'primeRecovery',
    description: `Increases how quickly your prime ability recharges.`,
    images: { icon: 'assets/items/placeholder.png' },
  },
  {
    type: RunnerStatType.TacticalRecovery,
    key: 'tacticalRecovery',
    description: `Increases how quickly your tactical ability recharges.`,
    images: { icon: 'assets/items/placeholder.png' },
  },
  {
    type: RunnerStatType.SelfRepairSpeed,
    key: 'selfRepairSpeed',
    description: 'Increases the rate at which you recover health and shields.',
    images: { icon: 'assets/runners/stats/self-repair-speed.jpg' },
  },
  {
    type: RunnerStatType.FinisherSiphon,
    key: 'finisherSiphon',
    description: `Increases the amount of shields regained after performing a finisher on a downed Runner.`,
    images: { icon: 'assets/runners/stats/finisher-siphon.jpg' },
  },
  {
    type: RunnerStatType.ReviveSpeed,
    key: 'reviveSpeed',
    description: `Increases how quickly you can revive downed allies or use self-revive consumables.`,
    images: { icon: 'assets/runners/stats/revive-speed.jpg' },
  },
  {
    type: RunnerStatType.Hardware,
    key: 'hardware',
    description: `Reduces the duration of status effects applied to you that affect your Runner's physical chassis (Immobilize, Overheat, Toxin).`,
    images: { icon: 'assets/runners/stats/hardware.jpg' },
  },
  {
    type: RunnerStatType.Firewall,
    key: 'firewall',
    description: `Reduces the duration of status effects applied to you that degrade your Runner's electronic systems (EMP, Hack).`,
    images: { icon: 'assets/runners/stats/firewall.jpg' },
  },
  {
    type: RunnerStatType.FallResistance,
    key: 'fallResistance',
    description: `Reduces fall damage.`,
    images: { icon: 'assets/items/placeholder.png' },
  },
  {
    type: RunnerStatType.PingDuration,
    key: 'pingDuration',
    description: `Increases the duration of ping when targeting enemies.`,
    images: { icon: 'assets/items/placeholder.png' },
  },
];
