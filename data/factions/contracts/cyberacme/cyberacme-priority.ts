import { MAPS } from '../../../maps/maps';
import { FactionType } from '../../factions.interface';
import { CYBERACME_REWARD_75_REP, FactionContract, FactionContractType } from '../contracts.interface';

export const CYBERACME_PRIORITY_CONTRACTS: FactionContract[] = [
  {
    name: 'Welcome to Tau Ceti',
    factionType: FactionType.Cyberacme,
    type: FactionContractType.Priority,
    steps: [
      {
        slug: 'welcome-to-tau-ceti-old-1',
        description: `This is ONI, your Onboard Navigational Intelligence. Your Runner shell is equipped with powerful abilities. Engage them as you scour Tau Ceti for valuables.`,
        rewards: ['Modded Overrun AR', 'Patch Kits'],
        inSingleRun: false,
        contested: false,
        objectives: [
          {
            description: 'Activate prime ability',
            quantity: 1,
            reward: CYBERACME_REWARD_75_REP,
          },
          {
            description: 'Loot Containers',
            quantity: 5,
            reward: CYBERACME_REWARD_75_REP,
          },
        ],
      },
      {
        slug: 'welcome-to-tau-ceti-old-2',
        description: `In Dire Marsh, disable the signal towers in AI Uplink. In the tunnels below, destroy CPU Nodes to find a Calibration Kit, then place it in the DCON at the shelter east of AI Uplink.`,
        rewards: ['Enhanced Shield Implant', 'Shield Charges'],
        inSingleRun: true,
        contested: false,
        map: MAPS.direMarsh,
        objectives: [
          {
            description: 'Disable the tall signal towers on the eastern side of AI UPLINK',
            quantity: 2,
            reward: CYBERACME_REWARD_75_REP,
          },
          {
            description: 'THEN Destroy CPU Nodes to find a Calibration Kit in AI UPLINK',
            quantity: 1,
            reward: CYBERACME_REWARD_75_REP,
          },
          {
            description: 'THEN Place the Calibration Kit in the DCON east of AI UPLINK',
            quantity: 1,
            reward: CYBERACME_REWARD_75_REP,
          },
        ],
      },
    ],
  },
];
