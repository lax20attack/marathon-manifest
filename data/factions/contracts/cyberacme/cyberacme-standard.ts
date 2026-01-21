import { FactionType } from '../../factions.interface';
import { CYBERACME_REWARD_60_REP, FactionContract, FactionContractType } from '../contracts.interface';

export const CYBERACME_STANDARD_CONTRACTS: FactionContract[] = [
  {
    name: `Prime Time`,
    factionType: FactionType.Cyberacme,
    type: FactionContractType.Standard,
    steps: [
      {
        slug: 'prime-time',
        description: `Each Runner shell archetype is equipped with a prime ability that defines that shell's intended engagement is up to you.`,
        rewards: [],
        inSingleRun: false,
        contested: false,
        objectives: [
          {
            description: 'Use prime ability',
            quantity: 1,
            reward: CYBERACME_REWARD_60_REP,
          },
          {
            description: 'Eliminate hostiles [Runners++]',
            quantity: 5,
            reward: CYBERACME_REWARD_60_REP,
          },
        ],
      },
    ],
  },
];
