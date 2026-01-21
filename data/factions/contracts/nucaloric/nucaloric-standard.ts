import { FactionType } from '../../factions.interface';
import { FactionContract, FactionContractType, NUCALORIC_REWARD_60_REP } from '../contracts.interface';

export const NUCALORIC_STANDARD_CONTRACTS: FactionContract[] = [
  {
    name: 'Data Mapping',
    factionType: FactionType.Nucaloric,
    type: FactionContractType.Standard,
    steps: [
      {
        slug: 'data-mapping',
        description: `No data point is too trivial, especially if it concerns the colony era.`,
        rewards: [],
        inSingleRun: false,
        contested: false,
        objectives: [
          {
            description: 'Find data cards',
            quantity: 2,
            reward: NUCALORIC_REWARD_60_REP,
          },
          {
            description: 'Find data cards in AI UPLINK',
            quantity: 1,
            reward: NUCALORIC_REWARD_60_REP,
          },
        ],
      },
    ],
  },
];
