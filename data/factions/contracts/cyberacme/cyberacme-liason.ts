import { MAPS } from '../../../maps/maps';
import { FactionType } from '../../factions.interface';
import { CYBERACME_REWARD_75_REP, FactionContract, FactionContractType } from '../contracts.interface';

export const CYBERACME_LIASON_CONTRACTS: FactionContract[] = [
  {
    name: 'Introducing: Nucaloric',
    factionType: FactionType.Cyberacme,
    type: FactionContractType.Liason,
    steps: [
      {
        slug: 'introducing-nucaloric',
        description: `In Perimeter, retrieve a NuCal ID from a tick-infested building. Use the nearby workstation, then head northeast of the infested building to find the DCON on a rooftop.`,
        rewards: [],
        inSingleRun: true,
        contested: true,
        map: MAPS.perimeter,
        objectives: [
          {
            description: 'Find NuCal Employee ID in building east of OVERFLOW',
            quantity: 1,
            reward: CYBERACME_REWARD_75_REP,
          },
          {
            description: 'THEN Download employee data from workstation nearby',
            quantity: 1,
            reward: CYBERACME_REWARD_75_REP,
          },
          {
            description: 'THEN Deliver NuCal Employee ID to DCON northeast of OVERFLOW',
            quantity: 1,
            reward: CYBERACME_REWARD_75_REP,
          },
        ],
      },
    ],
  },
];
