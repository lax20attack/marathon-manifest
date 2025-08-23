import { ItemRarity, ItemType } from '../items.interface';
import { Implant, ImplantSlot, ImplantType } from './implants.interface';

export const IMPLANT_SLOTS: ImplantSlot[] = [
  {
    type: ImplantType.Head,
    images: {
      icon: 'assets/items/implants/head-slot-72x72.jpg',
    },
  },
  {
    type: ImplantType.Chest,
    images: {
      icon: 'assets/items/implants/chest-slot-72x72.jpg',
    },
  },
  {
    type: ImplantType.Leg,
    images: {
      icon: 'assets/items/implants/leg-slot-72x72.jpg',
    },
  },
  {
    type: ImplantType.Shield,
    images: {
      icon: 'assets/items/implants/shield-slot-72x72.jpg',
    },
  },
];

export const IMPLANTS: Implant[] = [
  {
    id: 11000,
    slug: 'ping-plus-v3',
    type: ItemType.Implant,
    implantType: ImplantType.Head,
    rarity: ItemRarity.Deluxe,
    name: 'Ping+ V3',
    description: 'Slightly increases weapon handling and aim down sights speed.',
    images: {
      icon: 'assets/items/implants/head-72x72.png',
    },
    sources: null,
    credits: null,
    stats: {
      firewall: 10,
      lootSpeed: 10,
      pingDuration: 40,
      tacticalAbilityRecovery: -10,
    },
  },
  {
    id: 11001,
    slug: 'energy-harvesting-v1',
    type: ItemType.Implant,
    implantType: ImplantType.Head,
    rarity: ItemRarity.Standard,
    name: 'Energy Harvesting V1',
    description: '',
    images: {
      icon: 'assets/items/implants/head-72x72.png',
    },
    sources: null,
    credits: null,
    stats: {
      lootSpeed: -10,
      pingDuration: -40,
      tacticalAbilityRecovery: 5,
    },
  },
  {
    id: 11002,
    slug: 'helping-hands-v3',
    type: ItemType.Implant,
    implantType: ImplantType.Chest,
    rarity: ItemRarity.Deluxe,
    name: 'Helping Hands V3',
    description: '',
    images: {
      icon: 'assets/items/implants/chest-72x72.png',
    },
    sources: null,
    credits: 200,
    stats: {
      reviveSpeed: 30,
      hardware: 15,
      tacticalAbilityRecovery: 5,
    },
  },
  {
    id: 11003,
    slug: 'kinetic-resistance-v2',
    type: ItemType.Implant,
    implantType: ImplantType.Shield,
    rarity: ItemRarity.Deluxe,
    name: 'Kinetic Resistance V2',
    description: `+2 Shield Slots 
    <br/><br/>
    Reduces incoming UESC damage from ballistic weapons.`,
    images: {
      icon: 'assets/items/implants/shield-72x72.png',
    },
    sources: null,
    credits: null,
    stats: {
      heatCapacity: -15,
    },
  },
  {
    id: 11004,
    slug: 'nimble-fingers-v5',
    type: ItemType.Implant,
    implantType: ImplantType.Chest,
    rarity: ItemRarity.Prestige,
    name: 'Nimble Fingers V5',
    trait: {
      name: 'Unique Trait',
      description: 'Opening loot container pings unopened loot container nearby.',
    },
    description: `Slightly increases hipfire accuracy and control.`,
    images: {
      icon: 'assets/items/implants/chest-72x72.png',
    },
    sources: null,
    credits: null,
    stats: {
      agility: 5,
      lootSpeed: 50,
    },
  },
  {
    id: 11005,
    slug: 'protector-v1',
    type: ItemType.Implant,
    implantType: ImplantType.Shield,
    rarity: ItemRarity.Enhanced,
    name: 'Protector V1',
    description: `+1 Shield`,
    images: {
      icon: 'assets/items/implants/shield-72x72.png',
    },
    sources: null,
    credits: 100,
    stats: null,
  },
  {
    id: 11006,
    slug: 'protector-v3',
    type: ItemType.Implant,
    implantType: ImplantType.Shield,
    rarity: ItemRarity.Superior,
    name: 'Protector V3',
    description: `+3 Shield`,
    images: {
      icon: 'assets/items/implants/shield-72x72.png',
    },
    sources: null,
    credits: 900,
    stats: null,
  },
  {
    id: 11007,
    slug: 'volt-resistance-v2',
    type: ItemType.Implant,
    implantType: ImplantType.Shield,
    rarity: ItemRarity.Deluxe,
    name: 'Volt Resistance V2',
    description: `+2 Shield Slots 
    <br/><br/>
    Reduces UESC damage from volt weapons.`,
    images: {
      icon: 'assets/items/implants/shield-72x72.png',
    },
    sources: null,
    credits: 900,
    stats: {
      agility: -15,
    },
  },
];
