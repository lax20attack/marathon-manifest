import { Item } from '../../items/items.interface';

export enum FactionUpgradeTypes {
  BlackMarket = 'blackmarket',
  Carrier = 'carrier',
  Core = 'core',
  Equipment = 'equipment',
  Gadget = 'gadget',
  Medical = 'medical',
  Runner = 'runner',
  Weapon = 'weapon',
  Vault = 'vault',
}

export interface FactionUpgrade {
  id: number;
  type: FactionUpgradeTypes;
  name: string;
  description: string;
  modifications: string[][];
  position: number; // Position of the upgrade in the grid (6x4)
  rank: number; // Rank required to unlock this upgrade
  relatedTo: number[]; // IDs of upgrades that this upgrade is related to
  costs: FactionUpgradeCost[];
}

export interface FactionUpgradeCost {
  item: Item; // ID of the item required for the upgrade
  quantity: number; // Quantity of the item required
}

export interface FactionUpgradeOptimization {
  name: string;
  description: string;
  imageUrl: string;
}
