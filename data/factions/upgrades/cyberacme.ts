import { ITEMS_MAP } from '../../items/items';
import { ItemRarity } from '../../items/items.interface';
import {
  creditFactionUpgradeCost,
  FactionUpgrade,
  FactionUpgradeOptimization,
  FactionUpgradeStep,
  FactionUpgradeTypes,
} from './upgrades.interface';

const expansionUpgradeStep = (index: number, rank: number, credits: number): FactionUpgradeStep => {
  return {
    name: 'Expansion',
    slug: `expansion-${index}`,
    rank: rank,
    description: 'Gain additional rows of vault capacity for the rest of the current season.',
    modifications: [{ label: 'Vault Size', value: '+6 rows' }],
    costs: [
      creditFactionUpgradeCost(credits),
    ],
  };
};

const informantUpgradeStep = (index: number, rank: number, credits: number): FactionUpgradeStep => {
  return {
    name: 'Informant.exe',
    slug: `informant-exe-${index}`,
    rank: rank,
    description: 'Increases data card credit rewards by 50%. This bonus additively stacks with other Informant upgrades.',
    modifications: [{ label: 'Data Card Credit Value', value: '+50%' }],
    costs: [
      creditFactionUpgradeCost(credits),
    ],
  };
};

const creditLimitUpgradeStep = (index: number, rank: number, capacity: number, credits: number): FactionUpgradeStep => {
  return {
    name: 'Credit Limit',
    slug: `credit-limit-${index}`,
    rank: rank,
    description: `Raises your credit wallet's capacity for the rest of the season.`,
    modifications: [{ label: 'Credit Wallet Capacity', value: `+${capacity}k` }],
    costs: [
      creditFactionUpgradeCost(credits),
    ],
  };
};

export const CYBERACME_UPGRADES: FactionUpgrade[] = [
  {
    type: FactionUpgradeTypes.Inventory,
    steps: [
      expansionUpgradeStep(1, 3, 2500),
      expansionUpgradeStep(2, 7, 4000),
      expansionUpgradeStep(3, 10, 5000),
      expansionUpgradeStep(4, 20, 7000),
      expansionUpgradeStep(5, 1001, 10000), // For now, we'll just assume rank 1000+ is a VIP rank
    ],
    uiProperties: {
      nodeSize: 'large',
    },
  },
  {
    type: FactionUpgradeTypes.Function,
    steps: [
      informantUpgradeStep(1, 2, 1500),
      informantUpgradeStep(2, 15, 2000),
    ],
    uiProperties: {
      nodeSize: 'small',
      connections: ['right'],
    },
  },
  {
    type: FactionUpgradeTypes.Inventory,
    steps: [
      creditLimitUpgradeStep(1, 4, 20, 2500),
      creditLimitUpgradeStep(2, 8, 50, 4000),
      creditLimitUpgradeStep(3, 25, 900, 7000),
    ],
    uiProperties: {
      nodeSize: 'small',
      connections: ['left'],
    },
  },

  {
    type: FactionUpgradeTypes.Armory,
    steps: [
      {
        name: 'Enhanced Weaponry',
        slug: 'cyberacme-enhanced-weaponry',
        rank: 5,
        description: 'Unlocks Enhanced Overrun AR, V11 Punch, and CE Tactical Sidearm for purchase from CyberAcme.',
        costs: [
          creditFactionUpgradeCost(2500),
        ],
      },
    ],
    uiProperties: {
      nodeSize: 'small',
      connections: ['right'],
    },
  },
  {
    type: FactionUpgradeTypes.Armory,
    steps: [
      {
        name: 'Deluxe Weaponry',
        slug: 'deluxe-weaponry',
        rank: 15,
        description: 'Unlocks Deluxe Overrun AR, V11 Punch, and CE Tactical Sidearm for purchase from CyberAcme.',
        costs: [
          creditFactionUpgradeCost(4000),
        ],
      },
    ],
    uiProperties: {
      nodeSize: 'small',
      connections: ['left'],
    },
  },
  {
    type: FactionUpgradeTypes.Stat,
    steps: [
      {
        name: 'HEAT_SINK.EXE',
        slug: 'heat-sink-exe-1',
        rank: 1,
        description: 'Heat Capacity increases the number of movement actions (sprint, sliding) you can perform before overheating.',
        modifications: [{ label: 'Heat Capacity', value: '+20' }],
        costs: [
          creditFactionUpgradeCost(2500),
        ],
      },
      {
        name: 'HEAT_SINK.EXE',
        slug: 'heat-sink-exe-2',
        rank: 12,
        description: 'Heat Capacity increases the number of movement actions (sprint, sliding) you can perform before overheating.',
        modifications: [{ label: 'Heat Capacity', value: '+20' }],
        costs: [
          creditFactionUpgradeCost(3500),
        ],
      },
      {
        name: 'HEAT_SINK.EXE',
        slug: 'heat-sink-exe-3',
        rank: 25,
        description: 'Heat Capacity increases the number of movement actions (sprint, sliding) you can perform before overheating.',
        modifications: [{ label: 'Heat Capacity', value: '+20' }],
        costs: [
          creditFactionUpgradeCost(5000),
        ],
      },
    ],
    uiProperties: {
      nodeSize: 'large',
      connections: ['bottom'],
    },
  },
  {
    type: FactionUpgradeTypes.Armory,
    steps: [
      {
        name: 'Carrier',
        slug: 'carrier',
        rank: 5,
        description: 'Unlocks Enhanced backpacks for purchase in the Armory',
        itemUnlocks: [
          { item: ITEMS_MAP.get('8xs-base-pack'), rarity: ItemRarity.Enhanced },
        ],
        costs: [
          creditFactionUpgradeCost(1500),
        ],
      },
    ],
    uiProperties: {
      nodeSize: 'small',
      connections: ['right'],
    },
  },
  {
    type: FactionUpgradeTypes.HorizontalNode,
  },
  {
    type: FactionUpgradeTypes.HorizontalNode,
  },
  {
    type: FactionUpgradeTypes.HorizontalNode,
  },
  {
    type: FactionUpgradeTypes.Armory,
    steps: [
      {
        name: 'Carrier+',
        slug: 'carrier-plus',
        rank: 15,
        description: 'Unlocks Deluxe backpacks for purchase in the Armory',
        itemUnlocks: [
          { item: ITEMS_MAP.get('16xs-base-pack'), rarity: ItemRarity.Deluxe },
        ],
        costs: [
          creditFactionUpgradeCost(1500),
        ],
      },
    ],
    uiProperties: {
      nodeSize: 'small',
      connections: ['left'],
    },
  },
  {
    type: FactionUpgradeTypes.Stat,
    steps: [
      {
        name: 'QUICK_VENT.EXE',
        slug: 'quick-vent-exe-1',
        rank: 4,
        description: 'Your heat recovery begins more quickly after actions that generate heat.',
        modifications: [{ label: 'Heat Recovery Delay', value: '20%' }],
        costs: [
          creditFactionUpgradeCost(2500),
        ],
      },
      {
        name: 'QUICK_VENT.EXE',
        slug: 'quick-vent-exe-2',
        rank: 20,
        description: 'Your heat recovery begins more quickly after actions that generate heat.',
        modifications: [{ label: 'Heat Recovery Delay', value: '20%' }],
        costs: [
          creditFactionUpgradeCost(4000),
        ],
      },
    ],
    uiProperties: {
      nodeSize: 'small',
      connections: ['top', 'bottom'],
    },
  },
  {
    type: FactionUpgradeTypes.Stat,
    steps: [
      {
        name: 'SCAVENGER.EXE',
        slug: 'scavenger-exe-1',
        rank: 1,
        description: 'Loot Speed increases how quickly items are revealed when looting containers.',
        modifications: [{ label: 'Loot Speed', value: '20%' }],
        costs: [
          creditFactionUpgradeCost(1500),
        ],
      },
      {
        name: 'SCAVENGER.EXE',
        slug: 'scavenger-exe-2',
        rank: 4,
        description: 'Loot Speed increases how quickly items are revealed when looting containers.',
        modifications: [{ label: 'Loot Speed', value: '20%' }],
        costs: [
          creditFactionUpgradeCost(2500),
        ],
      },
      {
        name: 'SCAVENGER.EXE',
        slug: 'scavenger-exe-3',
        rank: 15,
        description: 'Loot Speed increases how quickly items are revealed when looting containers.',
        modifications: [{ label: 'Loot Speed', value: '20%' }],
        costs: [
          creditFactionUpgradeCost(4000),
        ],
      },
    ],
    uiProperties: {
      nodeSize: 'large',
      connections: ['right'],
    },
  },
  {
    type: FactionUpgradeTypes.Stat,
    steps: [
      {
        name: 'LOOT_SIPHON.EXE',
        slug: 'loot-siphon-exe-1',
        rank: 5,
        description: 'Grands bonus tactical ability energy when opening an unlooted container.',
        modifications: [{ label: 'Tactical Energy on Container Loot', value: '5%' }],
        costs: [
          creditFactionUpgradeCost(1500),
        ],
      },
      {
        name: 'LOOT_SIPHON.EXE',
        slug: 'loot-siphon-exe-2',
        rank: 15,
        description: 'Grands bonus tactical ability energy when opening an unlooted container.',
        modifications: [{ label: 'Tactical Energy on Container Loot', value: '5%' }],
        costs: [
          creditFactionUpgradeCost(4000),
        ],
      },
    ],
    uiProperties: {
      nodeSize: 'small',
      connections: ['right'],
    },
  },
  {
    type: FactionUpgradeTypes.HorizontalNode,
  },
  {
    type: FactionUpgradeTypes.HorizontalNode,
  },
  {
    type: FactionUpgradeTypes.Function,
    steps: [
      {
        name: 'SOUNDPROOF.EXE',
        slug: 'soundproof-exe',
        rank: 1001,
        description: 'You make less noise while looting.',
        costs: [
          creditFactionUpgradeCost(5000),
        ],
      },
    ],
    uiProperties: {
      nodeSize: 'small',
      connections: ['left'],
    },
  },
  {
    type: FactionUpgradeTypes.Stat,
    steps: [
      {
        name: 'ACTIVE_COOL.EXE',
        slug: 'active-cool-exe-1',
        rank: 10,
        description: 'Your generated heat recovers more quickly.',
        modifications: [{ label: 'Heat Recovery Rate', value: '15%' }],
        costs: [
          creditFactionUpgradeCost(3500),
        ],
      },
      {
        name: 'ACTIVE_COOL.EXE',
        slug: 'active-cool-exe-2',
        rank: 15,
        description: 'Your generated heat recovers more quickly.',
        modifications: [{ label: 'Heat Recovery Rate', value: '15%' }],
        costs: [
          creditFactionUpgradeCost(5000),
        ],
      },
    ],
    uiProperties: {
      nodeSize: 'small',
      connections: ['top', 'bottom'],
    },
  },
  {
    type: FactionUpgradeTypes.Stat,
    steps: [
      {
        name: 'FIRM_STANCE.EXE',
        slug: 'firm-stance-exe-1',
        rank: 1,
        description: 'Fall Resistance reduces the amount of damage you take after falling.',
        modifications: [{ label: 'Fall Resistance', value: '20%' }],
        costs: [
          creditFactionUpgradeCost(2000),
        ],
      },
      {
        name: 'FIRM_STANCE.EXE',
        slug: 'firm-stance-exe-2',
        rank: 10,
        description: 'Fall Resistance reduces the amount of damage you take after falling.',
        modifications: [{ label: 'Fall Resistance', value: '20%' }],
        costs: [
          creditFactionUpgradeCost(4000),
        ],
      },
      {
        name: 'FIRM_STANCE.EXE',
        slug: 'firm-stance-exe-3',
        rank: 25,
        description: 'Fall Resistance reduces the amount of damage you take after falling.',
        modifications: [{ label: 'Fall Resistance', value: '20%' }],
        costs: [
          creditFactionUpgradeCost(5000),
        ],
      },
    ],
    uiProperties: {
      nodeSize: 'small',
    },
  },
  {
    type: FactionUpgradeTypes.Function,
    steps: [
      {
        name: 'LOOSE_CHANGE.EXE',
        slug: 'loose-change-exe',
        rank: 1001,
        description: 'Opening a container reqards you with 25 credits.',
        costs: [
          creditFactionUpgradeCost(5000),
        ],
      },
    ],
    uiProperties: {
      nodeSize: 'small',
      connections: ['top'],
    },
  },
  null,
  null,
  null,
  {
    type: FactionUpgradeTypes.Function,
    steps: [
      {
        name: 'SLIDER.EXE',
        slug: 'slider-exe',
        rank: 1001,
        description: 'Your sprint slide generates less heat.',
        costs: [
          creditFactionUpgradeCost(7000),
        ],
      },
    ],
    uiProperties: {
      nodeSize: 'small',
      connections: ['top'],
    },
  },
];

export const CYBERACME_OPTIMIZATIONS: FactionUpgradeOptimization[] = [
  {
    type: FactionUpgradeTypes.Function,
    nodesRequired: 5,
    steps: [
      {
        name: 'Bonus Pay',
        slug: 'bonus-pay',
        rank: 0,
        description: `CyberAcme standard contracts will now award increased credits upon completion.`,
      },
    ],
  },
  {
    type: FactionUpgradeTypes.Function,
    nodesRequired: 10,
    steps: [
      {
        name: 'Treasure Hunter',
        slug: 'treasure-hunter-cyberacme',
        rank: 0,
        description: `Increases faction rep gained from CyberAcme treasures.`,
        modifications: [{ label: 'CyAc Treasure Reputation', value: '+20%' }],
      },
    ],
  },
  {
    type: FactionUpgradeTypes.Armory,
    nodesRequired: 15,
    steps: [
      {
        name: 'Sponsorship',
        slug: 'sponsorship-cyberacme',
        rank: 0,
        description: `Unlocks CyberAcme advanced sponsored kit for purchanse in the Armory.`,
        itemUnlocks: [
          { item: ITEMS_MAP.get('cyberacme-sponsored-kit'), rarity: ItemRarity.Enhanced },
        ],
      },
    ],
  },
  {
    type: FactionUpgradeTypes.Function,
    nodesRequired: 20,
    steps: [
      {
        name: 'Stipend',
        slug: 'stipend',
        rank: 0,
        description: `ROOK will now start runs with a small amount of credits in addition to their basic gear.`,
      },
    ],
  },
  {
    type: FactionUpgradeTypes.Armory,
    nodesRequired: 25,
    steps: [
      {
        name: 'Max Looter',
        slug: 'max-looter',
        rank: 0,
        description: `Unlocks Superior backpacks for purchase in the Armory.`,
        itemUnlocks: [
          { item: ITEMS_MAP.get('24xs-base-pack'), rarity: ItemRarity.Superior },
        ],
      },
    ],
  },
  {
    type: FactionUpgradeTypes.Function,
    nodesRequired: 32,
    steps: [
      {
        name: 'Carrier',
        slug: 'carrier-optimization',
        rank: 0,
        description: `ROOK will now start runs with an Enhanced backpack in addition to their basic gear.`,
        itemUnlocks: [
          { item: ITEMS_MAP.get('8xs-base-pack'), rarity: ItemRarity.Enhanced },
        ],
      },
    ],
  },
];
