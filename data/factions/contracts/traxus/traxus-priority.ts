import { MAPS } from '../../../maps/maps';
import { FactionType } from '../../factions.interface';
import { FactionContract, FactionContractType, TRAXUS_REWARD_75_REP } from '../contracts.interface';

export const TRAXUS_PRIORITY_CONTRACTS: FactionContract[] = [
  {
    name: 'Cutthroat Competition',
    factionType: FactionType.Traxus,
    type: FactionContractType.Priority,
    steps: [
      {
        slug: 'cutthroat-competition',
        description: `In Dire Marsh, search for Deimosite Rods in Field Maintenance to support Traxus salvage research, then exfil successfully.`,
        rewards: [],
        inSingleRun: true,
        contested: false,
        map: MAPS.direMarsh,
        objectives: [
          {
            description: 'Loot Deimosite Rods in FIELD MAINTENANCE',
            quantity: 2,
            reward: TRAXUS_REWARD_75_REP,
          },
          {
            description: 'Exfil Succesfully',
            quantity: 1,
            reward: TRAXUS_REWARD_75_REP,
          },
        ],
      },
    ],
  },
];
