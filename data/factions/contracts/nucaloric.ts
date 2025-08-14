import { ITEMS } from '../../items/items';
import { FactionType } from '../factions.interface';
import { FactionContract, FactionContractObjectiveRewardType, FactionContractType } from './contracts.interface';

export const NUCALORIC_CONTRACTS: FactionContract[] = [
  {
    faction: FactionType.Nucaloric,
    type: FactionContractType.Priority,
    name: 'For A Better Tomorrow',
    description: `Building a better tomorrow is impossible without understanding yesterday's failures. Find the colonists' firsthand reports.`,
    objectives: [
      {
        description: 'Download geological survey in Overflow (Perimeter)',
        quantity: 2,
        reward: {
          type: FactionContractObjectiveRewardType.Reputation,
          value: 75,
          item: ITEMS.find((x) => x.name === 'Nucal Rep'),
        },
      },
    ],
    rank: 1,
    rewards: ['Modded V75 SCAR', 'Patch Kits'],
    step: 1,
    totalSteps: 2,
  },
  {
    faction: FactionType.Nucaloric,
    type: FactionContractType.Priority,
    name: 'For A Better Tomorrow',
    description:
      'The scientists who landed on Tau Ceti IV are gone, but their knowledge remains. Locate their botany research and corresponding plant samples.',
    objectives: [
      {
        description: 'Download the botany report from Station (Perimeter)',
        quantity: 1,
        reward: {
          type: FactionContractObjectiveRewardType.Reputation,
          value: 75,
          item: ITEMS.find((x) => x.name === 'Nucal Rep'),
        },
      },
    ],
    rank: 1,
    rewards: ['Enhanced shield implant', 'Shield Charges'],
    step: 2,
    totalSteps: 2,
  },
  {
    faction: FactionType.Nucaloric,
    type: FactionContractType.Priority,
    name: 'A Survivable Future',
    description:
      'Piece together what remains of weather and crop yield data. Cross-reference that with the growing conditions of edible fungi.',
    objectives: [
      {
        description: 'Scan Spark Leaf incubators in South Relay (Perimeter)',
        quantity: 2,
        reward: {
          type: FactionContractObjectiveRewardType.Reputation,
          value: 75,
          item: ITEMS.find((x) => x.name === 'Nucal Rep'),
        },
      },
      {
        description: 'Scan fungal incubators in Overflow (Perimeter)',
        quantity: 2,
        dependsOnPrevious: true,
        reward: {
          type: FactionContractObjectiveRewardType.Reputation,
          value: 75,
          item: ITEMS.find((x) => x.name === 'Nucal Rep'),
        },
      },
      {
        description: 'Upload data and agriculture reports in North or South Relay (Perimeter)',
        quantity: 1,
        dependsOnPrevious: true,
        reward: {
          type: FactionContractObjectiveRewardType.Reputation,
          value: 75,
          item: ITEMS.find((x) => x.name === 'Nucal Rep'),
        },
      },
    ],
    rank: 1,
    rewards: ['Modded V22 Volt Thrower', 'Standard Cores'],
    step: 1,
    totalSteps: 3,
  },
  {
    faction: FactionType.Nucaloric,
    type: FactionContractType.Priority,
    name: 'A Survivable Future',
    description: `Fact-checking is essential to any investigation. Locate the colony support AI's automated logs.`,
    objectives: [
      {
        description: 'Download the last AI maintenance protocol from Hauler (Perimeter)',
        quantity: 1,
        reward: {
          type: FactionContractObjectiveRewardType.Reputation,
          value: 75,
          item: ITEMS.find((x) => x.name === 'Nucal Rep'),
        },
      },
      {
        description: 'Download harvest logs from Algae Ponds (Dire Marsh)',
        quantity: 1,
        reward: {
          type: FactionContractObjectiveRewardType.Reputation,
          value: 75,
          item: ITEMS.find((x) => x.name === 'Nucal Rep'),
        },
      },
      {
        description: 'Upload data and agriculture reports in North or South Relay (Perimeter)',
        quantity: 1,
        dependsOnPrevious: true,
        reward: {
          type: FactionContractObjectiveRewardType.Reputation,
          value: 75,
          item: ITEMS.find((x) => x.name === 'Nucal Rep'),
        },
      },
    ],
    rank: 1,
    rewards: ['Modded V22 Volt Thrower', 'Standard Cores'],
    step: 2,
    totalSteps: 3,
  },
  {
    faction: FactionType.Nucaloric,
    type: FactionContractType.Standard,
    name: 'Digitized Analgesia',
    description: 'Shells still feel pain when taking damage. Gather support equipment discomfort to mitigate discomfort.',
    objectives: [
      {
        description: 'Exfil Shield Charges',
        quantity: 1,
        reward: {
          type: FactionContractObjectiveRewardType.Reputation,
          value: 60,
          item: ITEMS.find((x) => x.name === 'Nucal Rep'),
        },
      },
      {
        description: 'Exfil Patch Kits',
        quantity: 1,
        dependsOnPrevious: true,
        reward: {
          type: FactionContractObjectiveRewardType.Reputation,
          value: 60,
          item: ITEMS.find((x) => x.name === 'Nucal Rep'),
        },
      },
    ],
    rank: 1,
    rewards: [],
  },
  {
    faction: FactionType.Nucaloric,
    type: FactionContractType.Standard,
    name: 'Survival Odds',
    description: 'Repeated shell death is wasteful. Improve the odds in your favor with shields.',
    objectives: [
      {
        description: 'Block damage as Locus',
        quantity: 4,
        reward: {
          type: FactionContractObjectiveRewardType.Reputation,
          value: 60,
          item: ITEMS.find((x) => x.name === 'Nucal Rep'),
        },
      },
      {
        description: 'Exfil Shield Charges',
        quantity: 1,
        dependsOnPrevious: true,
        reward: {
          type: FactionContractObjectiveRewardType.Reputation,
          value: 60,
          item: ITEMS.find((x) => x.name === 'Nucal Rep'),
        },
      },
    ],
    rank: 1,
    rewards: [],
  },
  {
    faction: FactionType.Nucaloric,
    type: FactionContractType.Boosted,
    name: 'Varied Environs',
    description: 'Do not limit your search of Tau Ceti IV to a single location. Variety has inherent value.',
    objectives: [
      {
        description: 'Loot containers in North Relay (Perimeter)',
        quantity: 10,
        reward: {
          type: FactionContractObjectiveRewardType.Reputation,
          value: 90,
          item: ITEMS.find((x) => x.name === 'Nucal Rep'),
        },
      },
      {
        description: 'Loot containers in South Relay (Perimeter)',
        quantity: 10,
        reward: {
          type: FactionContractObjectiveRewardType.Reputation,
          value: 90,
          item: ITEMS.find((x) => x.name === 'Nucal Rep'),
        },
      },
    ],
    rank: 1,
    rewards: [],
  },
  {
    faction: FactionType.Nucaloric,
    type: FactionContractType.Standard,
    name: 'Data Mapping',
    description: 'No data point is too trivial, especially if it concerns the colony era.',
    objectives: [
      {
        description: 'Find data cards in AI Uplink (Dire Marsh)',
        quantity: 1,
        reward: {
          type: FactionContractObjectiveRewardType.Reputation,
          value: 60,
          item: ITEMS.find((x) => x.name === 'Nucal Rep'),
        },
      },
      {
        description: 'Find data cards',
        quantity: 2,
        reward: {
          type: FactionContractObjectiveRewardType.Reputation,
          value: 60,
          item: ITEMS.find((x) => x.name === 'Nucal Rep'),
        },
      },
    ],
    rank: 1,
    rewards: [
      'A reward package that can contain credits, consumables, gear, or weapons. NuCaloric favors volt weaponry and focuses on Runner survivability and storage.',
    ],
  },
];
