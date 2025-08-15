import { MapActivityType } from '../maps/activity/activity.interface';
import { Map, MapPOI } from '../maps/maps.interface';

export enum ItemRarity {
  Standard = 'Standard', // White
  Enhanced = 'Enhanced', // Green
  Deluxe = 'Deluxe', // Blue
  Superior = 'Superior', // Purple
  Prestige = 'Prestige', // Yellow
}

export enum ItemSourceType {
  MapPoi = 'Map POI',
  UESC = 'UESC',
}

export enum ItemContainerType {
  ArmsLocker = 'Arms Locker',
  Bioprinter = 'Bioprinter',
  CacheCase = 'Cache Case',
  CacheDuffel = 'Cache Duffel',
  CoreStorage = 'Core Storage',
  GrassyAreas = 'Grassy Areas',
  LockedRooms = 'Locked Rooms',
  MedicalCabinet = 'Medical Cabinet',
  MunitionsCrate = 'Munitions Crate',
  TickNest = 'Tick Nest',
  ToolCart = 'Tool Cart',
}

export enum ItemUsageType {
  CyberAcmeUpgrades = 'CyberAcme Upgrades',
  NuCaloricUpgrades = 'NuCaloric Upgrades',
  TraxusUpgrades = 'Traxus Upgrades',

  CyberAcmeVendorUnlocks = 'CyberAcme Vendor Unlocks',
  MIDAVendorUnlocks = 'MIDA Vendor Unlocks',
  NuCaloricVendorUnlocks = 'NuCaloric Vendor Unlocks',
  TraxusVendorUnlocks = 'Traxus Vendor Unlocks',
}

export enum ItemType {
  Ammo = 'Ammo',
  Backpack = 'Backpack',
  Consumable = 'Consumable',
  Container = 'Container',
  Currency = 'Currency',
  DataCard = 'Data Card',
  Key = 'Key',
  Material = 'Material',
  Reputation = 'Reputation',
  Valuable = 'Valuable',
  Weapon = 'Weapon',
}

export const ITEM_RARITY_COLORS: Record<ItemRarity, string> = {
  [ItemRarity.Standard]: '#c9cad1',
  [ItemRarity.Enhanced]: '#00f587',
  [ItemRarity.Deluxe]: '#49abff',
  [ItemRarity.Superior]: '#c233ff',
  [ItemRarity.Prestige]: '#ffeb0f',
};

export const ITEM_IMAGE_SIZES = {
  // Items
  item: { icon: { width: 64, height: 64 }, large: { width: 64, height: 64 } },

  // Weapons
  weapon: { icon: { width: 180, height: 135 }, large: { width: 600, height: 450 } },
};

export interface Item {
  // Unique identifier for the item
  id: number;

  // Unique slug for the item, used in URLs
  slug: string;

  // Type of the item, e.g., Material, Weapon, Consumable
  type: ItemType;

  // Display name of the item
  name: string;

  // Description of the item
  description: string;

  // URL of the item, relative to the root of the manifest directory
  images: ItemImages;

  // Optional rarity of the item. Weapons don't have a rarity, but other items do.
  rarity?: ItemRarity;

  // Sources from which the item can be obtained. e.g., POIs
  sources: ItemSource[];

  // Usages of the item, e.g., for upgrades or vendor unlocks
  usages: ItemUsageType[];

  // Containers where the item can be found. e.g., Arms Locker, Bioprinter
  containers: ItemContainer[];

  // Activities from which the item can be obtained. e.g., High Value Target, Supply Drop, etc.
  activities: MapActivityType[];

  // How many credits the item costs
  credits?: number;
}

export interface ItemImages {
  /**
   * Material items should be 1:1 aspect ratio
   * Weapon items should be 4:3 aspect ratio
   */

  // Icon image of the item, used in lists and small views
  // Material items: 64x64
  // Weapon items: 180w x 135h
  icon: string;

  // Large image of the item, used in detail views
  // Material items: 64x64
  // Weapon items: 600w x 450h
  large?: string;
}

export interface ItemContainer {
  type: ItemContainerType;
  rarity?: ItemRarity;
}

export interface ItemSource {
  type: ItemSourceType;

  // When type is MapPoi
  map?: Map;
  pois?: MapPOI[];
}

export interface ItemContainer {
  type: ItemContainerType;
  rarity?: ItemRarity;
}
