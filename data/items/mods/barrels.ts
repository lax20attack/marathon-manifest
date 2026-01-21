import { AmmoType } from '../ammo/ammo.interface';
import { ItemRarity, ItemType } from '../items.interface';
import { WeaponType } from '../weapons/weapons.interface';
import { WeaponMod, WeaponModSlotType } from './mods.interface';

const BARREL_ABILITIES = {
  Suppressor: {
    name: 'Suppressor',
    description: `Silences this weapon's shots and scrambles targets' health display`,
  },
  ReactiveBurst: {
    name: 'Reactive Burst',
    description: `Consecutive shots create an AoE Burst on the target`,
  },
};

export const BARRELS: WeaponMod[] = [
  {
    id: 10101,
    name: 'Precision Barrel',
    slug: 'precision-barrel',
    rarity: ItemRarity.Deluxe,
    weaponTypes: [WeaponType.SubmachineGun],
    ammoTypes: [AmmoType.Ballistic, AmmoType.Volt],
    slotType: WeaponModSlotType.Barrel,
    type: ItemType.Mod,
    description: null,
    ability: BARREL_ABILITIES.Suppressor,
    images: {
      icon: 'assets/items/mods/barrels/barrel-64x64.png',
    },
    sources: {},
    credits: 180,
    stats: {},
  },
];
