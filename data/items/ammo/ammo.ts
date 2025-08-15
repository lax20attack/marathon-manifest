import { ItemRarity, ItemType } from '../items.interface';
import { WeaponType } from '../weapons/weapons.interface';
import { Ammo, AmmoType } from './ammo.interface';

export const AMMOS: Ammo[] = [
  {
    id: 9000,
    slug: 'mips',
    type: ItemType.Ammo,
    ammoType: AmmoType.MIPS,
    rarity: ItemRarity.Standard,
    name: 'MIPS',
    description: 'Specialized ammunition for high-damage ballistic weaponry.',
    images: {
      icon: 'assets/items/weapons/ammo/mips-64x64.png',
    },
    weaponTypes: [
      WeaponType.Railgun,
      WeaponType.Shotgun,
      WeaponType.SniperRifle,
    ],
    usages: [],
    sources: [],
    containers: [],
    activities: [],
    credits: null,
  },
  {
    id: 9001,
    slug: 'light-rounds',
    type: ItemType.Ammo,
    ammoType: AmmoType.MIPS,
    rarity: ItemRarity.Standard,
    name: 'Light Rounds',
    description: 'Small-caliber compact ammunition used for a variety of weapon types.',
    images: {
      icon: 'assets/items/weapons/ammo/light-rounds-64x64.png',
    },
    weaponTypes: [],
    usages: [],
    sources: [],
    containers: [],
    activities: [],
    credits: 1 / 24,
  },
];
