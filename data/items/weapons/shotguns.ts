import { AmmoType, MagazineType } from '../ammo/ammo.interface';
import { ItemRarity, ItemType, ItemUpdatedVersion } from '../items.interface';
import { WeaponModSlotType } from '../mods/mods.interface';
import { Weapon, WeaponType } from './weapons.interface';

export const SHOTGUNS: Weapon[] = [
  {
    id: 86002,
    updatedVersion: ItemUpdatedVersion.ALPHA_6,
    slug: 'wstr-combat-shotgun',
    type: ItemType.Weapon,
    name: 'WSTR Combat Shotgun',
    description: 'Ballistic double-barrel shotgun. Packs high damage in close quarters.',
    rarity: ItemRarity.Standard,
    images: {
      icon: 'assets/items/weapons/wstr-combat-shotgun-180x135.png',
      large: 'assets/items/weapons/wstr-combat-shotgun-600x450.png',
      xlarge: 'assets/items/weapons/wstr-combat-shotgun-800x600.png',
    },
    sources: {},
    credits: null,
    weaponType: WeaponType.Shotgun,
    ammoType: AmmoType.Ballistic,
    magazineType: MagazineType.MIPS,
    stats: {
      damage: 15, // 15 per pellet, 10 pellets
      pelletCount: 10,
      precisionMultiplier: 1.3,
      rateOfFire: 194,

      handling: 45,
      equipSpeed: 0.9,
      adsSpeed: 0.42,
      weight: 36,
      recoil: 73,
      aimAssist: 3.15,
      reloadSpeed: 2.6,

      range: 8,
      spreadAngle: 3.4,
      magazine: 2,
      zoom: 1.1,
    },
    modSlotTypes: [
      WeaponModSlotType.Chip,
      WeaponModSlotType.Grip,
      WeaponModSlotType.Barrel,
    ],
  },
];
