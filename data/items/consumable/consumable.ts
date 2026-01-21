import { ItemRarity, ItemType } from '../items.interface';
import { Consumable, ConsumableType } from './consumable.interface';

export const CONSUMABLES: Consumable[] = [
  {
    id: 3000,
    slug: 'advanced-mechanics-kit',
    type: ItemType.Consumable,
    consumableType: ConsumableType.Survival,
    rarity: ItemRarity.Enhanced,
    name: 'Advanced Mechanics Kit',
    description: `Removes hazardous mechanical (MCH) status effects (Immobilize, Overheat, Toxin). 
    <br/>
    Maximizes Hardware stat for extended duration.
    <br/>
    Adds buffer against hostile data corruption.`,
    images: {
      icon: 'assets/items/consumables/advanced-mechanics-kit-64x64.png',
    },
    sources: {},
    credits: null,
  },
  {
    id: 3001,
    slug: 'os-reboot',
    type: ItemType.Consumable,
    consumableType: ConsumableType.Survival,
    rarity: ItemRarity.Standard,
    name: 'OS Reboot',
    description: ``,
    images: {
      icon: 'assets/items/consumables/os-reboot-64x64.png',
    },
    sources: {},
    credits: null,
  },
  {
    id: 3002,
    slug: 'advanced-os-reboot',
    type: ItemType.Consumable,
    consumableType: ConsumableType.Survival,
    rarity: ItemRarity.Enhanced,
    name: 'Advanced OS Reboot',
    description: `Removes hazardous operating system status effects. 
    <br/><br/>
    Minimizes Firewall stat for extended duration.`,
    images: {
      icon: 'assets/items/consumables/advanced-os-reboot-72x72.png',
    },
    sources: {},
    credits: 140,
  },
  {
    id: 3005,
    slug: 'shield-charge',
    type: ItemType.Consumable,
    consumableType: ConsumableType.Shield,
    rarity: ItemRarity.Enhanced,
    name: 'Shield Charge',
    description: `Gradually recharges shields to full.`,
    images: {
      icon: 'assets/items/consumables/shield-charge-64x64.png',
    },
    sources: {},
    credits: 40,
  },
  {
    id: 3006,
    slug: 'advanced-shield-charge',
    type: ItemType.Consumable,
    consumableType: ConsumableType.Shield,
    rarity: ItemRarity.Deluxe,
    name: 'Advanced Shield Charge',
    description: `Quickly recharges shields to full.`,
    images: {
      icon: 'assets/items/consumables/advanced-shield-charge-64x64.png',
    },
    sources: {},
    credits: 80,
  },
  {
    id: 3010,
    slug: 'patch-kit',
    type: ItemType.Consumable,
    consumableType: ConsumableType.Heal,
    rarity: ItemRarity.Enhanced,
    name: 'Patch Kit',
    description: `Restores health.`,
    images: {
      icon: 'assets/items/consumables/patch-kit-64x64.png',
    },
    sources: {},
    credits: 55,
  },
  {
    id: 3011,
    slug: 'advanced-patch-kit',
    type: ItemType.Consumable,
    consumableType: ConsumableType.Heal,
    rarity: ItemRarity.Deluxe,
    name: 'Advanced Patch Kit',
    description: `Restores large amount of health.`,
    images: {
      icon: 'assets/items/consumables/advanced-patch-kit-64x64.png',
    },
    sources: {},
    credits: 90,
  },
  {
    id: 3015,
    slug: 'energy-amp',
    type: ItemType.Consumable,
    consumableType: ConsumableType.Heal,
    rarity: ItemRarity.Deluxe,
    name: 'Energy Amp',
    description: `Improves prime and tactical ability recharge rates.`,
    images: {
      icon: 'assets/items/consumables/energy-amp-64x64.png',
    },
    sources: {},
    credits: 80,
  },
  {
    id: 3018,
    slug: 'cardio-kick',
    type: ItemType.Consumable,
    consumableType: ConsumableType.Debuff,
    rarity: ItemRarity.Deluxe,
    name: 'Cardio Kick',
    description: `Temporarily increases Heat Capacity and Agility stats.`,
    images: {
      icon: 'assets/items/consumables/cardio-kick-72x72.png',
    },
    sources: {},
    credits: 90,
  },
  {
    id: 3020,
    slug: 'hec',
    type: ItemType.Consumable,
    consumableType: ConsumableType.Survival,
    rarity: ItemRarity.Enhanced,
    name: 'HEC',
    description: `Adds buffer against hostile data corruption.`,
    images: {
      icon: 'assets/items/consumables/hec-72x72.png',
    },
    sources: {},
    credits: 60,
  },
  {
    id: 3025,
    slug: 'self-revive',
    type: ItemType.Consumable,
    consumableType: ConsumableType.Survival,
    rarity: ItemRarity.Deluxe,
    name: 'Self Revive',
    description: `Allows for self-revive when downed.`,
    images: {
      icon: 'assets/items/consumables/self-revive-72x72.png',
    },
    sources: {},
    credits: 100,
  },
  {
    id: 3030,
    slug: 'panacea-kit',
    type: ItemType.Consumable,
    consumableType: ConsumableType.Shield,
    rarity: ItemRarity.Superior,
    name: 'Panacea Kit',
    description: `Fully restores health, fully recharges shields, and removes all hazardous status effects.`,
    images: {
      icon: 'assets/items/consumables/panacea-kit-72x72.png',
    },
    sources: {},
    credits: 140,
  },
];
