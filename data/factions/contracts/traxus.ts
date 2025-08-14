import { ITEMS } from '../../items/items';
import { FactionType } from '../factions.interface';
import { FactionContract, FactionContractObjectiveRewardType, FactionContractType } from './contracts.interface';

export const TRAXUS_CONTRACTS: FactionContract[] = [
  {
    faction: FactionType.Cyberacme,
    type: FactionContractType.Priority,
    name: 'Cutthroat Competition',
    description: `Runners, enter a competitive profit-sharing plan with Traxus OffWorld Industries. Take inventory of UESC stores.`,
    objectives: [
      {
        description: 'Loot containers in Hauler (Perimeter)',
        quantity: 3,
        reward: {
          type: FactionContractObjectiveRewardType.Reputation,
          value: 75,
          item: ITEMS.find((x) => x.name === 'Traxus Rep'),
        },
      },
    ],
    rank: 1,
    step: 1,
    totalSteps: 2,
    rewards: ['Modded Overrun AR', 'OS Reboots'],
  },
  {
    faction: FactionType.Cyberacme,
    type: FactionContractType.Priority,
    name: 'Cutthroat Competition',
    description: `UESC presence on Tau Ceti IV is detrimental to Traxus corporate KPIs. Eliminate UESC operatives to improve market conditions.`,
    objectives: [
      {
        description: 'Deal damage to UESC in North Relay (Perimeter)',
        quantity: 300,
        reward: {
          type: FactionContractObjectiveRewardType.Reputation,
          value: 75,
          item: ITEMS.find((x) => x.name === 'Traxus Rep'),
        },
      },
      {
        description: 'Deal damage to UESC in South Relay (Perimeter)',
        quantity: 300,
        reward: {
          type: FactionContractObjectiveRewardType.Reputation,
          value: 75,
          item: ITEMS.find((x) => x.name === 'Traxus Rep'),
        },
      },
    ],
    rank: 1,
    step: 2,
    totalSteps: 2,
    rewards: ['Modded Magnum MC', 'Signal Jammers'],
  },
  {
    faction: FactionType.Traxus,
    type: FactionContractType.Priority,
    name: 'Equitable Distribution',
    description: `The UESC currently controls access to Tau Ceti IV's resources. Increase competition by salvaging from colony storage and Supply Drops.`,
    objectives: [
      {
        description: 'Loot Supply Drop containers in Perimeter',
        quantity: 4,
        reward: {
          type: FactionContractObjectiveRewardType.Reputation,
          value: 75,
          item: ITEMS.find((x) => x.name === 'Traxus Rep'),
        },
      },
      {
        description: 'Follow flares to find and loot cache containers in Perimeter',
        quantity: 3,
        reward: {
          type: FactionContractObjectiveRewardType.Reputation,
          value: 75,
          item: ITEMS.find((x) => x.name === 'Traxus Rep'),
        },
      },
    ],
    rank: 1,
    step: 1,
    totalSteps: 4,
    rewards: [],
  },
  {
    faction: FactionType.Traxus,
    type: FactionContractType.Standard,
    name: 'Arms Dealer',
    description: `Tau Ceti IV presents a lucrative opportunity for salvage. Traxis invites Runners to acquire weapons for data collection.`,
    objectives: [
      {
        description: 'Loot arms lockers in Field Maintenance (Dire Marsh)',
        quantity: 2,
        reward: {
          type: FactionContractObjectiveRewardType.Reputation,
          value: 60,
          item: ITEMS.find((x) => x.name === 'Traxus Rep'),
        },
      },
      {
        description: 'Exfil volt weapons',
        quantity: 2,
        reward: {
          type: FactionContractObjectiveRewardType.Reputation,
          value: 60,
          item: ITEMS.find((x) => x.name === 'Traxus Rep'),
        },
      },
    ],
    rank: 1,
    rewards: [],
  },
];
