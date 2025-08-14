import { REPUTATIONS } from '../../items/reputations/reputations';
import { FactionType } from '../factions.interface';
import { FactionContract, FactionContractObjectiveRewardType, FactionContractType } from './contracts.interface';

export const CYBERACME_CONTRACTS: FactionContract[] = [
  {
    faction: FactionType.Cyberacme,
    type: FactionContractType.Priority,
    name: 'Welcome to Tau Ceti',
    description: `This is ONI, your Onboard Navigational Intelligence. Your Runner shell is equipped with powerful abilities. Engage them as you scour Tau Ceti for valuables.`,
    objectives: [
      {
        description: 'Activate prime ability',
        quantity: 1,
        reward: {
          type: FactionContractObjectiveRewardType.Reputation,
          value: 75,
          item: REPUTATIONS.find((x) => x.name === 'CyberAcme Rep'),
        },
      },
      {
        description: 'Loot Containers',
        quantity: 5,
        reward: {
          type: FactionContractObjectiveRewardType.Reputation,
          value: 75,
          item: REPUTATIONS.find((x) => x.name === 'CyberAcme Rep'),
        },
      },
    ],
    rank: 1,
    step: 1,
    totalSteps: 3,
    rewards: ['Modded Overrun AR', 'Patch Kits'],
  },
  {
    faction: FactionType.Cyberacme,
    type: FactionContractType.Priority,
    name: 'Welcome to Tau Ceti',
    description: `The UESC has deployed hostile forces across the colony to disrupt your retrieval efforts. Eliminate them, and repair any nonlethal damage to your shell.`,
    objectives: [
      {
        description: 'Eliminate UESC forces',
        quantity: 5,
        reward: {
          type: FactionContractObjectiveRewardType.Reputation,
          value: 75,
          item: REPUTATIONS.find((x) => x.name === 'CyberAcme Rep'),
        },
      },
      {
        description: 'Use Shield Charges or Patch Kits',
        quantity: 1,
        reward: {
          type: FactionContractObjectiveRewardType.Reputation,
          value: 75,
          item: REPUTATIONS.find((x) => x.name === 'CyberAcme Rep'),
        },
      },
    ],
    rank: 1,
    step: 2,
    totalSteps: 3,
    rewards: ['Enhanced Shield Implant', 'Shield Charges'],
  },
  {
    faction: FactionType.Cyberacme,
    type: FactionContractType.Priority,
    name: 'Welcome to Tau Ceti',
    description: `While the baseline for successful. Runner exfiltration is approximately 33%, the value of any recovered materials outweighs the risk. Attempt to leave Tau Ceti IV intact.`,
    objectives: [
      {
        description: 'Exfil successfully',
        quantity: 1,
        reward: {
          type: FactionContractObjectiveRewardType.Reputation,
          value: 75,
          item: REPUTATIONS.find((x) => x.name === 'CyberAcme Rep'),
        },
      },
    ],
    rank: 1,
    step: 3,
    totalSteps: 3,
    rewards: [
      'Enhanced backpack',
      'Standard cores',
      'Materials',
    ],
  },
  {
    faction: FactionType.Cyberacme,
    type: FactionContractType.Priority,
    name: 'Return on Investment',
    description:
      'Increased violence on Tau Ceti IV destabalizes day-to-day USEC operations. Bolster your arsenal by salvaging explosives from munitions crates.',
    objectives: [
      {
        description: 'Exfil Frag Grenades',
        quantity: 1,
        reward: {
          type: FactionContractObjectiveRewardType.Reputation,
          value: 100,
          item: REPUTATIONS.find((x) => x.name === 'CyberAcme Rep'),
        },
      },
      {
        description: 'Exfil Claymore Mines',
        quantity: 1,
        reward: {
          type: FactionContractObjectiveRewardType.Reputation,
          value: 100,
          item: REPUTATIONS.find((x) => x.name === 'CyberAcme Rep'),
        },
      },
    ],
    rank: 2,
    rewards: [],
    step: 2,
    totalSteps: 5,
  },
];
