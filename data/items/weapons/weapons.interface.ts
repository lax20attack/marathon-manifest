import { AmmoType } from '../ammo/ammo.interface';
import { Item } from '../items.interface';
import { WeaponModSlotType } from '../mods/mods.interface';

export interface Weapon extends Item {
  weaponType: WeaponType;
  ammoType: AmmoType;
  stats: WeaponStats;
  modSlotTypes: WeaponModSlotType[];
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
  // Volt weapons only
  chargeTime?: number;

  range: number;
  // Ballistic weapons
  magazine?: number;
  // Volt weapons
  voltDrain?: number;

  zoom: number;

  // Shotgun only
  pelletCount?: number;
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
