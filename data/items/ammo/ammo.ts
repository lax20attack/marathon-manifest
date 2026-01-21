import { ItemRarity, ItemType } from '../items.interface';
import { WeaponType } from '../weapons/weapons.interface';
import { Ammo, MagazineType } from './ammo.interface';

export const AMMOS: Ammo[] = [
  {
    id: 9000,
    slug: 'mips',
    type: ItemType.Ammo,
    magazineType: MagazineType.MIPS,
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
    sources: {},
    credits: 0.5,
  },
  {
    id: 9001,
    slug: 'light-rounds',
    type: ItemType.Ammo,
    magazineType: MagazineType.Light,
    rarity: ItemRarity.Standard,
    name: 'Light Rounds',
    description: 'Small-caliber compact ammunition used for a variety of weapon types.',
    images: {
      icon: 'assets/items/weapons/ammo/light-rounds-64x64.png',
    },
    weaponTypes: [],
    sources: {},
    credits: 1 / 24,
  },
  {
    id: 9002,
    slug: 'heavy-rounds',
    type: ItemType.Ammo,
    magazineType: MagazineType.Heavy,
    rarity: ItemRarity.Standard,
    name: 'Heavy Rounds',
    description: 'High-caliber rounds used for advanced ballistic weaponry.',
    images: {
      icon: 'assets/items/weapons/ammo/heavy-rounds-64x64.png',
    },
    weaponTypes: [],
    sources: {},
    credits: 1 / 3,
  },
  {
    id: 9003,
    slug: 'volt-battery',
    type: ItemType.Ammo,
    magazineType: MagazineType.VoltBattery,
    rarity: ItemRarity.Standard,
    name: 'Volt Battery',
    description: 'Compact batteries used to power a variety of volt weapon types. Remaining ammo in the battery is lost upon reload.',
    images: {
      icon: 'assets/items/weapons/ammo/volt-battery-64x64.png',
    },
    weaponTypes: [],
    sources: {},
    credits: 3 / 4,
  },
  {
    id: 9004,
    slug: 'volt-cell',
    type: ItemType.Ammo,
    magazineType: MagazineType.VoltCell,
    rarity: ItemRarity.Standard,
    name: 'Volt Cell',
    description: 'High-capacity energy cells used for powering advanced volt weaponry. Remaining ammo in the cell is lost upon reload.',
    images: {
      icon: 'assets/items/weapons/ammo/volt-cell-64x64.png',
    },
    weaponTypes: [],
    sources: {},
    credits: 3 / 4,
  },
];
