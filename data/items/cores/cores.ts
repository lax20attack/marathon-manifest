import { RunnerType } from '../../runners/runners.interface';
import { ItemRarity, ItemType } from '../items.interface';
import { Core, CoreSlot } from './cores.interface';

export const CORE_SLOTS: CoreSlot[] = [
  {
    id: 0,
    images: {
      icon: 'assets/items/cores/core-slot-72x72.jpg',
    },
  },
  {
    id: 1,
    images: {
      icon: 'assets/items/cores/core-slot-72x72.jpg',
    },
  },
];

export const CORES: Core[] = [
  {
    id: 12000,
    slug: 'bedside-manner',
    type: ItemType.Core,
    rarity: ItemRarity.Enhanced,
    name: 'Bedside Manner',
    description:
      'When an ally is nearby, your Self-Repair Speed is increased and you use shield and healng consumables slightly more quickly.',
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 70,
  },
  {
    id: 12001,
    slug: 'close-and-personal',
    type: ItemType.Core,
    rarity: ItemRarity.Standard,
    name: 'Close And Personal',
    description: 'Your melee and knife attacks generate significantly less heat.',
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 35,
  },
  {
    id: 12002,
    slug: 'emergency-intel',
    type: ItemType.Core,
    rarity: ItemRarity.Deluxe,
    name: 'Emergency Intel',
    description: 'When downed, you automatically ping the hostile that downed you.',
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 200,
  },
  {
    id: 12003,
    slug: 'enzyme-suppressants',
    type: ItemType.Core,
    rarity: ItemRarity.Enhanced,
    name: 'Enzyme Suppressants',
    description: 'Lingering effects from your consumables last longer.',
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 70,
  },
  {
    id: 12004,
    slug: 'glass-cannon',
    type: ItemType.Core,
    rarity: ItemRarity.Standard,
    name: 'Glass Cannon',
    description: 'When your shields break, you gain a brief burst of increased ability regeneration.',
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 35,
  },
  {
    id: 12005,
    slug: 'like-for-like',
    type: ItemType.Core,
    rarity: ItemRarity.Standard,
    name: 'Like For Like',
    description: `Defeating enemies with ballistic weapons reduces the duration of active MCH status effects on you.
    <br/><br/>
    Defeating enemies with volt weapons reduces the duration of active OS status effects on you.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 35,
  },
  {
    id: 12006,
    slug: 'on-a-roll',
    type: ItemType.Core,
    rarity: ItemRarity.Standard,
    name: 'On A Roll',
    description: `Defeating enemies grants a stacking bonus to your agility, up to a maximum of 30. Being downed or killed resets this bonus to zero.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 35,
  },
  {
    id: 12007,
    slug: 'impact-siphons',
    type: ItemType.Core,
    runnerType: RunnerType.Locus,
    rarity: ItemRarity.Prestige,
    name: 'Impact Siphons',
    description: `Incoming damage dealt to your Riot Barricade is returned to you as shield energy.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 2500,
  },
  {
    id: 12008,
    slug: 'shadow-strike',
    type: ItemType.Core,
    runnerType: RunnerType.Void,
    rarity: ItemRarity.Prestige,
    name: 'Shadow Strike',
    description: `Your Utility Knife deals greatly increased damage when attacking from invisibility.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 2500,
  },
  {
    id: 12009,
    slug: 'intuition',
    type: ItemType.Core,
    runnerType: RunnerType.Blackbird,
    rarity: ItemRarity.Prestige,
    name: 'Intuition',
    description: `Interrogation now triggers upon downing a hostile runner.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 2500,
  },
  {
    id: 12010,
    slug: 'microjet-efficiency-package',
    type: ItemType.Core,
    runnerType: RunnerType.Glitch,
    rarity: ItemRarity.Prestige,
    name: 'Microjet Efficiency Package',
    description: `Gain an additional Microjets charge that generates less heat.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 2500,
  },
  {
    id: 12011,
    slug: 'thermal-sinks',
    type: ItemType.Core,
    rarity: ItemRarity.Enhanced,
    name: 'Thermal Sinks',
    description: `Sliding in water generates no heat buildup.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 70,
  },
  {
    id: 12012,
    slug: 'savior-complex',
    type: ItemType.Core,
    rarity: ItemRarity.Enhanced,
    name: 'Savior Complex',
    description: `When you are the only remaining crew member alive, your Revive Speed is massively increased.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 70,
  },
  {
    id: 12013,
    slug: 'just-flight-actually',
    type: ItemType.Core,
    rarity: ItemRarity.Standard,
    name: 'Just Flight, Actually',
    description: `While at critical health, your Heat Capacity is increased.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 35,
  },
];
