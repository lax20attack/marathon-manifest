import { RunnerType } from '../../runners/runners.interface';
import { ItemRarity, ItemType } from '../items.interface';
import { Core } from './cores.interface';

export const RECON_CORES: Core[] = [
  {
    id: 12200,
    slug: 'hot-pursuit',
    type: ItemType.Core,
    runnerType: RunnerType.Recon,
    rarity: ItemRarity.Enhanced,
    name: 'Hot Pursuit',
    description: `Your Tracker Drone travels faster and further before automatically detonating.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 70,
  },
  {
    id: 12201,
    slug: 'on-the-trail',
    type: ItemType.Core,
    runnerType: RunnerType.Recon,
    rarity: ItemRarity.Deluxe,
    name: 'On the Trail',
    description: `The trail left by your Stalker Protocol lasts much longer. Defeating hostiles affected by your Stalker Protocol reduces your generated heat.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 200,
  },
  {
    id: 12202,
    slug: 'cluster-payload',
    type: ItemType.Core,
    runnerType: RunnerType.Recon,
    rarity: ItemRarity.Superior,
    name: 'Cluster Payload',
    description: `The trail left by your Stalker Protocol lasts much longer. Defeating hostiles affected by your Stalker Protocol reduces your generated heat.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 600,
  },
  {
    id: 12203,
    slug: 'early-warning-system',
    type: ItemType.Core,
    runnerType: RunnerType.Recon,
    rarity: ItemRarity.Prestige,
    name: 'Early Warning System',
    description: `You receive an alert on your HUD when a hostile Runner is nearby.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 2500,
  },
  {
    id: 12204,
    slug: 'intuition',
    type: ItemType.Core,
    runnerType: RunnerType.Recon,
    rarity: ItemRarity.Prestige,
    name: 'Intuition',
    description: `Interrogation now triggers upon downing a hostile runner.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 2500,
  },
];
