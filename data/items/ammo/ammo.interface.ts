import { Item } from '../items.interface';
import { WeaponType } from '../weapons/weapons.interface';

export enum AmmoType {
  Ballistic = 'Ballistic',
  Volt = 'Volt',
}

export enum MagazineType {
  Light = 'Light',
  Heavy = 'Heavy',
  MIPS = 'MIPS',
  VoltBattery = 'Volt Battery', // Blue one
  VoltCell = 'Volt Cell', // White one
}

export interface Ammo extends Item {
  magazineType: MagazineType;
  weaponTypes: WeaponType[];
}
