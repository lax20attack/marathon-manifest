import { Item } from '../items.interface';

export interface Weapon extends Item {
  weaponType: WeaponType;
  ammoType: AmmoType;
  stats: WeaponStats;
}

export interface WeaponStats {
  damage: number;
  precisionMultiplier: number;
  rateOfFire: number;

  accuracy: number;
  hipfireSpread: number;
  adsSpread: number;
  crouchSpreadBonus: number;
  movingSpreadPenalty: number;

  // Not sure if this is needed, it's included on the inventory item but not in the weapon detail in game
  control: number;

  handling: number;
  equipSpeed: number;
  adsSpeed: number;
  moveSpeedPenalty: number;
  recoil: number;
  aimAssist: number;
  reloadSpeed: number;

  range: number;
  magazine: number;
  zoom: number;
}

export enum WeaponType {
  AssaultRifle = 'Assault Rifle',
  MachineGun = 'Machine Gun',
  Pistol = 'Pistol',
  PrecisionRifle = 'Precision Rifle',
  Railgun = 'Railgun',
  Shotgun = 'Shotgun',
  SniperRifle = 'Sniper Rifle',
  SubmachineGun = 'Submachine Gun',
}

export enum AmmoType {
  Light = 'Light',
  Heavy = 'Heavy',
  MIPS = 'MIPS',
  VoltBattery = 'Volt Battery',
  VoltCell = 'Volt Cell',
}
