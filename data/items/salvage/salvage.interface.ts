import { Item } from '../items.interface';

export enum SalvageUsageType {
  ArachneUpgrades = 'Arachne Upgrades',
  CyberAcmeUpgrades = 'CyberAcme Upgrades',
  MidaUpgrades = 'MIDA Upgrades',
  NuCaloricUpgrades = 'NuCaloric Upgrades',
  SekiguchiUpgrades = 'Sekiguchi Upgrades',
  TraxusUpgrades = 'Traxus Upgrades',

  ArachneVendorUnlocks = 'Arachne Vendor Unlocks',
  CyberAcmeVendorUnlocks = 'CyberAcme Vendor Unlocks',
  MIDAVendorUnlocks = 'MIDA Vendor Unlocks',
  NuCaloricVendorUnlocks = 'NuCaloric Vendor Unlocks',
  SekiguchiVendorUnlocks = 'Sekiguchi Vendor Unlocks',
  TraxusVendorUnlocks = 'Traxus Vendor Unlocks',

  ArachneBarter = 'Arachne Barter',
  CyberAcmeBarter = 'Cyber Acme Barter',
  MIDABarter = 'MIDA Barter',
  NuCaloricBarter = 'NuCaloric Barter',
  SekiguchiBarter = 'Sekiguchi Barter',
  TraxusBarter = 'Traxus Barter',
}

export interface Salvage extends Item {
  // Usages of the item, e.g., for upgrades or vendor unlocks
  usages: SalvageUsageType[];
}
