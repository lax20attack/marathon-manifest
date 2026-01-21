import { RunnerType } from '../../runners/runners.interface';
import { ItemRarity, ItemType } from '../items.interface';
import { Core } from './cores.interface';

export const DESTROYER_CORES: Core[] = [
  {
    id: 12100,
    slug: 'heavy-ordnance',
    type: ItemType.Core,
    runnerType: RunnerType.Destroyer,
    rarity: ItemRarity.Enhanced,
    name: 'Heavy Ordnance',
    description: `Defeating hostiles with explosive damage reduces the cooldown of your next Search and Destroy.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 70,
  },
  {
    id: 12101,
    slug: 'Ankle Breaker',
    type: ItemType.Core,
    runnerType: RunnerType.Destroyer,
    rarity: ItemRarity.Deluxe,
    name: 'Ankle Breaker',
    description: `Your Thruster generates less heat while a hostile is nearby.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 200,
  },
  {
    id: 12102,
    slug: 'bullrush',
    type: ItemType.Core,
    runnerType: RunnerType.Destroyer,
    rarity: ItemRarity.Superior,
    name: 'Bullrush',
    description: `Your Riot Barricade does not passively drain energy while you perform your Tactical Sprint.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 600,
  },
  {
    id: 12103,
    slug: 'impact-siphons',
    type: ItemType.Core,
    runnerType: RunnerType.Destroyer,
    rarity: ItemRarity.Prestige,
    name: 'Impact Siphons',
    description: `Incoming damage dealt to your Riot Barricade is returned to you as shield energy.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 2500,
  },
  {
    id: 12104,
    slug: 'counter-attack',
    type: ItemType.Core,
    runnerType: RunnerType.Destroyer,
    rarity: ItemRarity.Prestige,
    name: 'Counter Attack',
    description: `When Riot Barricade takes damage, you periodically release a retaliatory missile at your attacker.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 2500,
  },
  {
    id: 12105,
    slug: 'bombardier',
    type: ItemType.Core,
    runnerType: RunnerType.Destroyer,
    rarity: ItemRarity.Enhanced,
    name: 'Bombardier',
    description: `Defeating hostiles while your search and destroy is active extends its duration.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 70,
  },
  {
    id: 12106,
    slug: 'myrmidon',
    type: ItemType.Core,
    runnerType: RunnerType.Destroyer,
    rarity: ItemRarity.Deluxe,
    name: 'Myrmidon',
    description: `After using your Thruster, your Melee Damage is temporarily increased.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 70,
  },
];
