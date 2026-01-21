import { MAPS } from '../../../maps/maps';
import { FactionType } from '../../factions.interface';
import { FactionContract, FactionContractType, NUCALORIC_REWARD_75_REP } from '../contracts.interface';

export const NUCALORIC_PRIORITY_CONTRACTS: FactionContract[] = [
  {
    name: 'Survival Directive',
    factionType: FactionType.Nucaloric,
    type: FactionContractType.Priority,
    steps: [
      {
        slug: 'survival-directive',
        description: `In Perimeter, download NuCaloric's geological survey data from a terminal in Station, and a botany report from a terminal in Overflow.`,
        rewards: [],
        inSingleRun: false,
        contested: false,
        map: MAPS.perimeter,
        objectives: [
          {
            description: 'Download geological survey in the southeast building in Station',
            quantity: 1,
            reward: NUCALORIC_REWARD_75_REP,
          },
          {
            description: 'Download botany report from second-floor terminal in Overflow',
            quantity: 1,
            reward: NUCALORIC_REWARD_75_REP,
          },
        ],
      },
    ],
  },
];
