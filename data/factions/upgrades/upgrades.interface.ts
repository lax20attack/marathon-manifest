import { ITEMS_MAP } from '../../items/items';
import { Item, ItemRarity } from '../../items/items.interface';

export enum FactionUpgradeTypes {
  Carrier = 'carrier',
  Core = 'core',
  Equipment = 'equipment',
  Gadget = 'gadget',
  Medical = 'medical',
  Runner = 'runner',
  Weapon = 'weapon',

  Armory = 'armory',
  Inventory = 'inventory',
  Function = 'function',
  Stat = 'stat',

  // Special UI type for horizontal connections
  HorizontalNode = 'horizontal-node',
}

export interface FactionUpgrade {
  type: FactionUpgradeTypes;
  steps?: FactionUpgradeStep[];
  uiProperties?: FactionNodeUIProperties;
}

export interface FactionUpgradeStep {
  name: string;
  slug: string;
  rank: number; // Rank required to unlock this upgrade
  description: string;
  itemUnlocks?: FactionItemUnlock[]; // Items unlocked by this upgrade step
  modifications?: { label: string; value: string }[]; // Modifications provided by this upgrade step
  costs?: FactionUpgradeCost[];
}

export interface FactionItemUnlock {
  item: Item;
  rarity?: ItemRarity; // Rarity of the item
}

export interface FactionNodeUIProperties {
  // Size of the node in the upgrade tree
  nodeSize: 'small' | 'large';
  connections?: ('top' | 'right' | 'bottom' | 'left')[];
}

export interface FactionUpgradeCost {
  item: Item; // ID of the item required for the upgrade
  quantity: number; // Quantity of the item required
}

export interface FactionUpgradeOptimization extends FactionUpgrade {
  nodesRequired: number;
}

export const creditFactionUpgradeCost = (credits: number): FactionUpgradeCost => {
  return { item: ITEMS_MAP.get('credits'), quantity: credits };
};

// Helper to locate resource items for upgrade costs
export const itemFactionUpgradeCost = (itemSlug: string, quantity: number) => {
  return {
    item: ITEMS_MAP.get(itemSlug),
    quantity: quantity,
  };
};
