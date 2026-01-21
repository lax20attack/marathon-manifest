import { AmmoType } from '../ammo/ammo.interface';
import { ItemRarity, ItemType } from '../items.interface';
import { WeaponType } from '../weapons/weapons.interface';
import { WeaponMod, WeaponModSlotType } from './mods.interface';

export const GRIPS: WeaponMod[] = [
  {
    id: 10300,
    name: 'Combat Grip',
    slug: 'combat-grip',
    rarity: ItemRarity.Enhanced,
    weaponTypes: [WeaponType.AssaultRifle],
    ammoTypes: [AmmoType.Ballistic, AmmoType.Volt],
    slotType: WeaponModSlotType.Grip,
    type: ItemType.Mod,
    description: null,
    images: {
      icon: 'assets/items/mods/grips/grip-64x64.png',
    },
    sources: {},
    credits: 60,
    stats: {},
  },
  {
    id: 10301,
    name: 'Combat Grip',
    slug: 'combat-grip-deluxe',
    rarity: ItemRarity.Deluxe,
    weaponTypes: [WeaponType.AssaultRifle],
    ammoTypes: [AmmoType.Ballistic, AmmoType.Volt],
    slotType: WeaponModSlotType.Grip,
    type: ItemType.Mod,
    description: null,
    images: {
      icon: 'assets/items/mods/grips/grip-64x64.png',
    },
    sources: {},
    credits: 180,
    stats: {},
  },
];
