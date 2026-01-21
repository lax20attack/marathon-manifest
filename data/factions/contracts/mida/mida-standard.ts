import { FactionType } from '../../factions.interface';
import { FactionContract, FactionContractType, MIDA_REWARD_60_REP } from '../contracts.interface';

export const MIDA_STANDARD_CONTRACTS: FactionContract[] = [
  {
    name: 'Heads/Tails',
    factionType: FactionType.Mida,
    type: FactionContractType.Standard,
    steps: [
      {
        slug: 'heads-tails',
        description: `toe the bottom line // blood money // make them pay`,
        rewards: [],
        inSingleRun: false,
        contested: false,
        objectives: [
          {
            description: 'Activate guarded exfil',
            quantity: 1,
            reward: MIDA_REWARD_60_REP,
          },
          {
            description: 'Eliminate UESC [Elites++]',
            quantity: 20,
            reward: MIDA_REWARD_60_REP,
          },
        ],
      },
    ],
  },
];
