import { MAPS } from '../../../maps/maps';
import { FactionType } from '../../factions.interface';
import { FactionContract, FactionContractType, MIDA_REWARD_75_REP } from '../contracts.interface';

export const MIDA_PRIORITY_CONTRACTS: FactionContract[] = [
  {
    name: 'Order/Chaos',
    factionType: FactionType.Mida,
    type: FactionContractType.Priority,
    steps: [
      {
        slug: 'order-chaos',
        description: `In Dire Marsh, trigger alarms by hacking a terminal in Complex. Acquire credentials from the responding Commander in order to download encrypted data in Maintenance.`,
        rewards: [],
        inSingleRun: true,
        contested: false,
        map: MAPS.direMarsh,
        objectives: [
          {
            description: 'Trigger alarms in south Complex by hacking a terminal',
            quantity: 1,
            reward: MIDA_REWARD_75_REP,
          },
          {
            description: 'THEN Acquire Security Commander credentials',
            quantity: 1,
            reward: MIDA_REWARD_75_REP,
          },
          {
            description: 'THEN Download data from terminal inside south Maintenance',
            quantity: 1,
            reward: MIDA_REWARD_75_REP,
          },
        ],
      },
    ],
  },
];
