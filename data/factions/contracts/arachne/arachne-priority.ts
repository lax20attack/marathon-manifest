import { MAPS } from '../../../maps/maps';
import { FactionType } from '../../factions.interface';
import { ARACHNE_REWARD_75_REP, FactionContract, FactionContractType } from '../contracts.interface';

export const ARACHNE_PRIORITY_CONTRACTS: FactionContract[] = [
  {
    name: 'Contract Name',
    factionType: FactionType.Arachne,
    type: FactionContractType.Priority,
    steps: [
      {
        slug: 'contract-name',
        description: `You want to complete an Arachne Contract?`,
        rewards: [],
        inSingleRun: false,
        contested: false,
        map: MAPS.perimeter,
        objectives: [
          {
            description: 'Eliminate downed Runners',
            quantity: 10,
            reward: ARACHNE_REWARD_75_REP,
          },
        ],
      },
    ],
  },
];
