import { Item } from '../items.interface';

export enum MaterialUsageType {
  CyberAcmeUpgrades = 'CyberAcme Upgrades',
  NuCaloricUpgrades = 'NuCaloric Upgrades',
  TraxusUpgrades = 'Traxus Upgrades',

  CyberAcmeVendorUnlocks = 'CyberAcme Vendor Unlocks',
  MIDAVendorUnlocks = 'MIDA Vendor Unlocks',
  NuCaloricVendorUnlocks = 'NuCaloric Vendor Unlocks',
  TraxusVendorUnlocks = 'Traxus Vendor Unlocks',
}

export interface Material extends Item {
  // Usages of the item, e.g., for upgrades or vendor unlocks
  usages: MaterialUsageType[];
}
