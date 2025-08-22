import { MapActivitySourceType } from '../../maps/activity/activity.interface';
import { MAPS } from '../../maps/maps';
import { ItemContainerType, ItemEnemySourceType, ItemRarity, ItemType } from '../items.interface';
import { Material, MaterialUsageType } from './materials.interface';

export const MATERIALS: Material[] = [
  {
    id: 1000,
    slug: 'micro-processor',
    type: ItemType.Material,
    rarity: ItemRarity.Enhanced,
    name: 'Micro Processor',
    description: 'Grants a temporary but significant boost to computing power.',
    images: {
      icon: 'assets/items/materials/processor-64x64.png',
    },
    usages: [MaterialUsageType.CyberAcmeUpgrades, MaterialUsageType.NuCaloricVendorUnlocks],
    sources: {
      pois: [
        {
          map: MAPS.perimeter,
          pois: [MAPS.perimeter.pois.northRelay, MAPS.perimeter.pois.southRelay],
        },
      ],
      containers: [{ type: ItemContainerType.CoreStorage }],
    },
    credits: 10,
  },
  {
    id: 1001,
    slug: 'synthetic-rubber',
    type: ItemType.Material,
    rarity: ItemRarity.Deluxe,
    name: 'Synthetic Rubber',
    description: 'Constantly devulcanized, recycled, and reused in an exoplanet colony.',
    images: {
      icon: 'assets/items/materials/rubber-64x64.png',
    },
    usages: [MaterialUsageType.CyberAcmeUpgrades],
    sources: {
      pois: [
        {
          map: MAPS.perimeter,
          pois: [MAPS.perimeter.pois.station, MAPS.perimeter.pois.overflow],
        },
      ],
      containers: [{ type: ItemContainerType.ArmsLocker }, { type: ItemContainerType.LockedRooms, rarity: ItemRarity.Deluxe }],
    },
    credits: 50,
  },
  {
    id: 1002,
    slug: 'aluminum-rods',
    type: ItemType.Material,
    rarity: ItemRarity.Enhanced,
    name: 'Aluminum Rods',
    description: 'Lightweight, reliable, and easily recycled.',
    images: {
      icon: 'assets/items/materials/rods-64x64.png',
    },
    usages: [MaterialUsageType.CyberAcmeUpgrades],
    sources: {
      pois: [
        {
          map: MAPS.perimeter,
          pois: [MAPS.perimeter.pois.station, MAPS.perimeter.pois.hauler],
        },
      ],
      containers: [{ type: ItemContainerType.ArmsLocker }],
    },
    credits: 10,
  },
  {
    id: 1003,
    slug: 'flex-processor',
    type: ItemType.Material,
    rarity: ItemRarity.Superior,
    name: 'Flex Processor',
    description: 'A flexible processor used in advanced crafting recipes.',
    images: {
      icon: 'assets/items/materials/processor-64x64.png',
    },
    usages: [MaterialUsageType.CyberAcmeUpgrades],
    sources: {
      containers: [
        { type: ItemContainerType.LockedRooms, rarity: ItemRarity.Superior },
      ],
      activities: [
        MapActivitySourceType.UESC_INCURSION,
      ],
    },
    credits: null,
  },
  {
    id: 1004,
    slug: 'lab-xerogel',
    type: ItemType.Material,
    rarity: ItemRarity.Deluxe,
    name: 'Lab Xerogel',
    description: 'A gel-like substance used in advanced crafting recipes.',
    images: {
      icon: 'assets/items/materials/xerogel-64x64.png',
    },
    usages: [MaterialUsageType.CyberAcmeUpgrades],
    sources: {
      pois: [
        {
          map: MAPS.direMarsh,
          pois: [MAPS.direMarsh.pois.quarantine, MAPS.direMarsh.pois.greenhouse],
        },
      ],
      containers: [{ type: ItemContainerType.ToolCart }, { type: ItemContainerType.LockedRooms, rarity: ItemRarity.Deluxe }],
    },
    credits: 50,
  },
  {
    id: 1005,
    slug: 'spark-leaf',
    type: ItemType.Material,
    rarity: ItemRarity.Enhanced,
    name: 'Spark Leaf',
    description: 'High in silica content, making this plant a valuable resource on Tau Ceti IV.',
    images: {
      icon: 'assets/items/materials/leaf-64x64.png',
    },
    usages: [MaterialUsageType.CyberAcmeUpgrades],
    sources: {
      pois: [
        {
          map: MAPS.direMarsh,
          pois: [MAPS.direMarsh.pois.aiUplink, MAPS.direMarsh.pois.greenhouse],
        },
      ],
      containers: [
        {
          type: ItemContainerType.GrassyAreas,
        },
      ],
    },
    credits: 10,
  },
  {
    id: 1006,
    slug: 'expanded-processor',
    type: ItemType.Material,
    rarity: ItemRarity.Deluxe,
    name: 'Expanded Processor',
    description: 'This versatile processor can be permanently attached to any compatible hardware.',
    images: {
      icon: 'assets/items/materials/processor-64x64.png',
    },
    usages: [MaterialUsageType.CyberAcmeUpgrades, MaterialUsageType.NuCaloricUpgrades],
    sources: {
      pois: [{ map: MAPS.perimeter, pois: [MAPS.perimeter.pois.northRelay, MAPS.perimeter.pois.southRelay] }],
      containers: [{ type: ItemContainerType.CoreStorage }, { type: ItemContainerType.LockedRooms, rarity: ItemRarity.Deluxe }],
    },
    credits: 50,
  },
  {
    id: 1007,
    slug: 'steel-rods',
    type: ItemType.Material,
    rarity: ItemRarity.Deluxe,
    name: 'Steel Rods',
    description: 'Durable rods used in various crafting recipes.',
    images: {
      icon: 'assets/items/materials/rods-64x64.png',
    },
    usages: [MaterialUsageType.CyberAcmeUpgrades],
    sources: {
      pois: [
        {
          map: MAPS.perimeter,
          pois: [MAPS.perimeter.pois.hauler, MAPS.perimeter.pois.station],
        },
      ],
      containers: [
        { type: ItemContainerType.ArmsLocker },
      ],
    },
    credits: 50,
  },
  {
    id: 1008,
    slug: 'symbiote-rubber',
    type: ItemType.Material,
    rarity: ItemRarity.Superior,
    name: 'Symbiote Rubber',
    description: 'A flexible and durable material used in various crafting recipes.',
    images: {
      icon: 'assets/items/materials/rubber-64x64.png',
    },
    usages: [MaterialUsageType.CyberAcmeUpgrades],
    sources: {
      containers: [
        { type: ItemContainerType.LockedRooms, rarity: ItemRarity.Superior },
      ],
      activities: [
        MapActivitySourceType.UESC_INCURSION,
      ],
    },
    credits: null,
  },
  {
    id: 1009,
    slug: 'combat-xerogel',
    type: ItemType.Material,
    rarity: ItemRarity.Superior,
    name: 'Combat Xerogel',
    description: 'A rare gel used in various crafting recipes.',
    images: {
      icon: 'assets/items/materials/xerogel-64x64.png',
    },
    usages: [MaterialUsageType.CyberAcmeUpgrades],
    sources: {
      containers: [
        { type: ItemContainerType.LockedRooms, rarity: ItemRarity.Superior },
      ],
      activities: [
        MapActivitySourceType.UESC_INCURSION,
      ],
    },
    credits: null,
  },
  {
    id: 1010,
    slug: 'hydrocarbon-rubber',
    type: ItemType.Material,
    rarity: ItemRarity.Enhanced,
    name: 'Hydrocarbon Rubber',
    description: 'Easily harvested from plant tissue, but prone to decomposition on Tau Ceti IV.',
    images: {
      icon: 'assets/items/materials/rubber-64x64.png',
    },
    usages: [
      MaterialUsageType.CyberAcmeUpgrades,
      MaterialUsageType.NuCaloricVendorUnlocks,
      MaterialUsageType.TraxusVendorUnlocks,
    ],
    sources: {
      pois: [
        {
          map: MAPS.perimeter,
          pois: [MAPS.perimeter.pois.station, MAPS.perimeter.pois.overflow],
        },
      ],
      containers: [
        {
          type: ItemContainerType.ArmsLocker,
        },
      ],
    },
    credits: 10,
  },
  {
    id: 1011,
    slug: 'shell-id',
    type: ItemType.Material,
    rarity: ItemRarity.Superior,
    name: 'Shell ID',
    description: 'Unique synth-vat identification for each biosynthetic Runner shell. Used as an informal trophy among mercenaries.',
    images: {
      icon: 'assets/items/materials/shell-id-64x64.jpg',
    },
    usages: [MaterialUsageType.CyberAcmeUpgrades],
    sources: {
      activities: [MapActivitySourceType.HIGH_VALUE_TARGET, MapActivitySourceType.SUPPLY_DROP],
    },
    credits: 300,
  },
  {
    id: 1012,
    slug: 'storage-drive',
    type: ItemType.Material,
    rarity: ItemRarity.Enhanced,
    name: 'Storage Drive',
    description: 'A potential treasure trove of colony-era data.',
    images: {
      icon: 'assets/items/materials/drive-64x64.png',
    },
    usages: [
      MaterialUsageType.NuCaloricUpgrades,
      MaterialUsageType.NuCaloricVendorUnlocks,
      MaterialUsageType.TraxusVendorUnlocks,
    ],
    sources: {
      pois: [{ map: MAPS.direMarsh, pois: [MAPS.direMarsh.pois.algaePonds, MAPS.direMarsh.pois.aiUplink] }],
      containers: [
        {
          type: ItemContainerType.CoreStorage,
        },
      ],
    },
    credits: 10,
  },
  {
    id: 1013,
    slug: 'organic-lens',
    type: ItemType.Material,
    rarity: ItemRarity.Enhanced,
    name: 'Organic Lens',
    description: 'Mass-produced for military, scientific, and communicational devices.',
    images: {
      icon: 'assets/items/materials/lens-64x64.png',
    },
    usages: [MaterialUsageType.NuCaloricUpgrades, MaterialUsageType.CyberAcmeUpgrades],
    sources: {
      pois: [
        {
          map: MAPS.direMarsh,
          pois: [MAPS.direMarsh.pois.bioResearch, MAPS.direMarsh.pois.quarantine],
        },
      ],
      containers: [
        { type: ItemContainerType.Bioprinter },
        { type: ItemContainerType.GrassyAreas },
      ],
    },
    credits: 10,
  },
  {
    id: 1014,
    slug: 'encrypted-drive',
    type: ItemType.Material,
    rarity: ItemRarity.Deluxe,
    name: 'Encrypted Drive',
    description: 'A',
    images: {
      icon: 'assets/items/materials/drive-64x64.png',
    },
    usages: [
      MaterialUsageType.NuCaloricUpgrades,
      MaterialUsageType.NuCaloricVendorUnlocks,
      MaterialUsageType.TraxusVendorUnlocks,
    ],
    sources: {
      pois: [
        { map: MAPS.direMarsh, pois: [MAPS.direMarsh.pois.algaePonds, MAPS.direMarsh.pois.aiUplink] },
      ],
      containers: [{ type: ItemContainerType.CoreStorage }, { type: ItemContainerType.LockedRooms, rarity: ItemRarity.Deluxe }],
    },
    credits: 50,
  },
  {
    id: 1015,
    slug: 'chitin-sample',
    type: ItemType.Material,
    rarity: ItemRarity.Deluxe,
    name: 'Chitin Sample',
    description: 'A',
    images: {
      icon: 'assets/items/materials/chitin-sample-64x64.jpg',
    },
    usages: [MaterialUsageType.NuCaloricUpgrades],
    sources: {
      containers: [
        {
          type: ItemContainerType.TickNest,
        },
      ],
    },
    credits: 50,
  },
  {
    id: 1016,
    slug: 'coherence-drive',
    type: ItemType.Material,
    rarity: ItemRarity.Superior,
    name: 'Coherence Drive',
    description: 'A',
    images: {
      icon: 'assets/items/materials/drive-64x64.png',
    },
    usages: [MaterialUsageType.NuCaloricUpgrades],
    sources: {
      containers: [
        { type: ItemContainerType.LockedRooms, rarity: ItemRarity.Superior },
      ],
      activities: [MapActivitySourceType.UESC_INCURSION],
    },
    credits: null,
  },
  {
    id: 1017,
    slug: 'conductive-filament',
    type: ItemType.Material,
    rarity: ItemRarity.Deluxe,
    name: 'Conductive Filament',
    description: 'Once proprietary to the UESC, now scavenged by everyone on Tau Ceti IV.',
    images: {
      icon: 'assets/items/materials/filament-64x64.png',
    },
    usages: [
      MaterialUsageType.NuCaloricUpgrades,
      MaterialUsageType.TraxusUpgrades,
      MaterialUsageType.NuCaloricVendorUnlocks,
      MaterialUsageType.NuCaloricUpgrades,
    ],
    sources: {
      pois: [
        {
          map: MAPS.perimeter,
          pois: [MAPS.perimeter.pois.northRelay, MAPS.perimeter.pois.overflow],
        },
      ],
      containers: [{ type: ItemContainerType.Bioprinter }, { type: ItemContainerType.LockedRooms, rarity: ItemRarity.Deluxe }],
    },
    credits: 50,
  },
  {
    id: 1018,
    slug: 'tarax-seed',
    type: ItemType.Material,
    rarity: ItemRarity.Deluxe,
    name: 'Tarax Seed',
    description: 'Mildly toxic when eaten, but pharmaceuticals can be extracted from the seeds.',
    images: {
      icon: 'assets/items/materials/leaf-64x64.png',
    },
    usages: [
      MaterialUsageType.NuCaloricUpgrades,
      MaterialUsageType.TraxusUpgrades,
      MaterialUsageType.NuCaloricVendorUnlocks,
      MaterialUsageType.NuCaloricUpgrades,
    ],
    sources: {
      pois: [
        {
          map: MAPS.direMarsh,
          pois: [MAPS.direMarsh.pois.aiUplink, MAPS.direMarsh.pois.greenhouse],
        },
      ],
      containers: [{ type: ItemContainerType.GrassyAreas }, { type: ItemContainerType.LockedRooms, rarity: ItemRarity.Deluxe }],
    },
    credits: 50,
  },
  {
    id: 1019,
    slug: 'anomalous-plasma',
    type: ItemType.Material,
    rarity: ItemRarity.Prestige,
    name: 'Anomalous Plasma',
    description: 'A',
    images: {
      icon: 'assets/items/materials/anomalous-plasma-64x64.jpg',
    },
    usages: [MaterialUsageType.NuCaloricUpgrades],
    sources: {
      containers: [
        { type: ItemContainerType.LockedRooms, rarity: ItemRarity.Prestige },
      ],
      activities: [MapActivitySourceType.UESC_INCURSION, MapActivitySourceType.UESC_INTERCEPT],
    },
    credits: null,
  },
  {
    id: 1020,
    slug: 'biofilament',
    type: ItemType.Material,
    rarity: ItemRarity.Superior,
    name: 'Biofilament',
    description: 'A',
    images: {
      icon: 'assets/items/materials/biofilament-64x64.jpg',
    },
    usages: [MaterialUsageType.NuCaloricUpgrades],
    sources: {
      containers: [
        { type: ItemContainerType.LockedRooms, rarity: ItemRarity.Superior },
      ],
      activities: [MapActivitySourceType.UESC_INCURSION],
    },
    credits: null,
  },
  {
    id: 1021,
    slug: 'plastic-filament',
    type: ItemType.Material,
    rarity: ItemRarity.Enhanced,
    name: 'Plastic Filament',
    description: 'A',
    images: {
      icon: 'assets/items/materials/filament-64x64.png',
    },
    usages: [
      MaterialUsageType.NuCaloricUpgrades,
      MaterialUsageType.NuCaloricVendorUnlocks,
      MaterialUsageType.TraxusVendorUnlocks,
    ],
    sources: {
      pois: [
        {
          map: MAPS.perimeter,
          pois: [MAPS.perimeter.pois.northRelay, MAPS.perimeter.pois.overflow],
        },
      ],
      containers: [
        {
          type: ItemContainerType.Bioprinter,
        },
      ],
    },
    credits: 10,
  },
  {
    id: 1022,
    slug: 'fungal-growth',
    type: ItemType.Material,
    rarity: ItemRarity.Deluxe,
    name: 'Fungal Growth',
    description: 'A',
    images: {
      icon: 'assets/items/materials/fungal-growth-64x64.jpg',
    },
    usages: [MaterialUsageType.NuCaloricUpgrades, MaterialUsageType.TraxusUpgrades],
    sources: {},
    credits: 50,
  },
  {
    id: 1023,
    slug: 'carbon-wire',
    type: ItemType.Material,
    rarity: ItemRarity.Enhanced,
    name: 'Carbon Wire',
    description: 'A',
    images: {
      icon: 'assets/items/materials/carbon-wire-64x64.jpg',
    },
    usages: [MaterialUsageType.TraxusUpgrades],
    sources: {
      pois: [
        {
          map: MAPS.perimeter,
          pois: [MAPS.perimeter.pois.hauler, MAPS.perimeter.pois.southRelay],
        },
      ],
      containers: [
        {
          type: ItemContainerType.MunitionsCrate,
        },
      ],
    },
    credits: null,
  },
  {
    id: 1024,
    slug: 'basic-xerogel',
    type: ItemType.Material,
    rarity: ItemRarity.Enhanced,
    name: 'Basic Xerogel',
    description: 'Multipurpose construction material, perfect for space colonies.',
    images: {
      icon: 'assets/items/materials/xerogel-64x64.png',
    },
    usages: [
      MaterialUsageType.TraxusUpgrades,
      MaterialUsageType.NuCaloricVendorUnlocks,
      MaterialUsageType.TraxusVendorUnlocks,
    ],
    sources: {
      pois: [
        {
          map: MAPS.direMarsh,
          pois: [MAPS.direMarsh.pois.quarantine, MAPS.direMarsh.pois.greenhouse],
        },
      ],
      containers: [
        {
          type: ItemContainerType.ToolCart,
        },
      ],
    },
    credits: 10,
  },
  {
    id: 1025,
    slug: 'gel-explosive',
    type: ItemType.Material,
    rarity: ItemRarity.Deluxe,
    name: 'Gel Explosive',
    description: 'A',
    images: {
      icon: 'assets/items/materials/explosive-64x64.png',
    },
    usages: [MaterialUsageType.TraxusUpgrades],
    sources: {
      containers: [{ type: ItemContainerType.MunitionsCrate }, { type: ItemContainerType.LockedRooms, rarity: ItemRarity.Deluxe }],
      pois: [
        {
          map: MAPS.direMarsh,
          pois: [MAPS.direMarsh.pois.complex, MAPS.direMarsh.pois.fieldMaintenance],
        },
      ],
    },
    credits: 50,
  },
  {
    id: 1026,
    slug: 'dynamic-lens',
    type: ItemType.Material,
    rarity: ItemRarity.Deluxe,
    name: 'Dynamic Lens',
    description: 'Uses multiple images to gather visual data.',
    images: {
      icon: 'assets/items/materials/lens-64x64.png',
    },
    usages: [
      MaterialUsageType.NuCaloricUpgrades,
      MaterialUsageType.TraxusUpgrades,
      MaterialUsageType.NuCaloricVendorUnlocks,
      MaterialUsageType.TraxusVendorUnlocks,
    ],
    sources: {
      pois: [
        {
          map: MAPS.direMarsh,
          pois: [MAPS.direMarsh.pois.bioResearch, MAPS.direMarsh.pois.quarantine],
        },
      ],
      containers: [{ type: ItemContainerType.Bioprinter }, { type: ItemContainerType.LockedRooms, rarity: ItemRarity.Deluxe }],
    },
    credits: 50,
  },
  {
    id: 1027,
    slug: 'polymer-wire',
    type: ItemType.Material,
    rarity: ItemRarity.Deluxe,
    name: 'Polymer Wire',
    description: 'Organic polymers "grown" for conductivity, and a frequent target of scavengers.',
    images: {
      icon: 'assets/items/materials/rubber-64x64.png',
    },
    usages: [
      MaterialUsageType.TraxusUpgrades,
      MaterialUsageType.NuCaloricVendorUnlocks,
      MaterialUsageType.TraxusVendorUnlocks,
    ],
    sources: {
      pois: [
        {
          map: MAPS.perimeter,
          pois: [MAPS.perimeter.pois.hauler, MAPS.perimeter.pois.southRelay],
        },
      ],
      containers: [
        { type: ItemContainerType.MunitionsCrate },
        { type: ItemContainerType.LockedRooms, rarity: ItemRarity.Deluxe },
      ],
    },
    credits: 50,
  },
  {
    id: 1028,
    slug: 'putty-explosive',
    type: ItemType.Material,
    rarity: ItemRarity.Enhanced,
    name: 'Putty Explosive',
    description: `Soft, moldable, and stable. Sometimes it's best to stick with the classics.`,
    images: {
      icon: 'assets/items/materials/explosive-64x64.png',
    },
    usages: [
      MaterialUsageType.TraxusUpgrades,
      MaterialUsageType.NuCaloricVendorUnlocks,
      MaterialUsageType.TraxusVendorUnlocks,
    ],
    sources: {
      pois: [
        {
          map: MAPS.direMarsh,
          pois: [MAPS.direMarsh.pois.complex, MAPS.direMarsh.pois.fieldMaintenance],
        },
      ],
      containers: [
        {
          type: ItemContainerType.MunitionsCrate,
        },
      ],
    },
    credits: 10,
  },
  {
    id: 1029,
    slug: 'liquid-explosive',
    type: ItemType.Material,
    rarity: ItemRarity.Superior,
    name: 'Liquid Explosive',
    description: 'A',
    images: {
      icon: 'assets/items/materials/explosive-64x64.png',
    },
    usages: [MaterialUsageType.TraxusUpgrades],
    sources: {
      containers: [
        { type: ItemContainerType.LockedRooms, rarity: ItemRarity.Superior },
      ],
      activities: [MapActivitySourceType.UESC_INCURSION],
    },
    credits: null,
  },
  {
    id: 1030,
    slug: 'papaver-bloom',
    type: ItemType.Material,
    rarity: ItemRarity.Superior,
    name: 'Papaver Bloom',
    description: 'This hybridized flowering plant was an early escapee from Dire Marsh greenhouses.',
    images: {
      icon: 'assets/items/materials/papaver-bloom-64x64.jpg',
    },
    usages: [
      MaterialUsageType.TraxusUpgrades,
      MaterialUsageType.NuCaloricVendorUnlocks,
      MaterialUsageType.TraxusVendorUnlocks,
    ],
    sources: {
      containers: [
        { type: ItemContainerType.GrassyAreas },
        { type: ItemContainerType.LockedRooms, rarity: ItemRarity.Superior },
      ],
      activities: [
        MapActivitySourceType.UESC_INCURSION,
      ],
    },
    credits: 300,
  },
  {
    id: 1031,
    slug: 'molecular-wire',
    type: ItemType.Material,
    rarity: ItemRarity.Superior,
    name: 'Molecular Wire',
    description: 'Used in molecular electronics. The spool comes preprogrammed with repair algorithms.',
    images: {
      icon: 'assets/items/materials/molecular-wire-64x64.jpg',
    },
    usages: [
      MaterialUsageType.TraxusUpgrades,
      MaterialUsageType.NuCaloricVendorUnlocks,
      MaterialUsageType.TraxusVendorUnlocks,
    ],
    sources: {
      containers: [
        {
          type: ItemContainerType.LockedRooms,
          rarity: ItemRarity.Superior,
        },
      ],
      activities: [
        MapActivitySourceType.UESC_INCURSION,
      ],
    },
    credits: null,
  },
  {
    id: 1032,
    slug: 'synchronizer',
    type: ItemType.Material,
    rarity: ItemRarity.Superior,
    name: 'Synchronizer',
    description: 'Acts as a control unit for UESC ground troops. A faint rhythmic pulse can be felt when held.',
    images: {
      icon: 'assets/items/materials/synchronizer-64x64.png',
    },
    usages: [
      MaterialUsageType.CyberAcmeUpgrades,
      MaterialUsageType.NuCaloricVendorUnlocks,
      MaterialUsageType.TraxusVendorUnlocks,
      MaterialUsageType.MIDAVendorUnlocks,
    ],
    sources: {
      enemies: [{ type: ItemEnemySourceType.UESC }],
    },
    credits: null,
  },
  {
    id: 1033,
    slug: 'regen-resin',
    type: ItemType.Material,
    rarity: ItemRarity.Superior,
    name: 'Regen Resin',
    description: 'A',
    images: {
      icon: 'assets/items/materials/resin-64x64.png',
    },
    usages: [MaterialUsageType.TraxusUpgrades],
    sources: {
      containers: [
        { type: ItemContainerType.LockedRooms, rarity: ItemRarity.Superior },
      ],
      activities: [
        MapActivitySourceType.UESC_INCURSION,
      ],
    },
    credits: null,
  },
  {
    id: 1034,
    slug: 'biogenic-alloy',
    type: ItemType.Material,
    rarity: ItemRarity.Prestige,
    name: 'Biogenic Alloy',
    description: 'A',
    images: {
      icon: 'assets/items/materials/biogenic-alloy-64x64.jpg',
    },
    usages: [MaterialUsageType.TraxusUpgrades],
    sources: {
      containers: [
        { type: ItemContainerType.LockedRooms, rarity: ItemRarity.Prestige },
      ],
      activities: [
        MapActivitySourceType.UESC_INCURSION,
        MapActivitySourceType.UESC_INTERCEPT,
      ],
    },
    credits: null,
  },
  {
    id: 1035,
    slug: 'nanocomposites',
    type: ItemType.Material,
    rarity: ItemRarity.Enhanced,
    name: 'Nanocomposites',
    description: `The original colony mission would've been impossible without breakthroughs in microfabrication.`,
    images: {
      icon: 'assets/items/materials/nano-64x64.png',
    },
    usages: [
      MaterialUsageType.NuCaloricUpgrades,
      MaterialUsageType.NuCaloricVendorUnlocks,
      MaterialUsageType.TraxusVendorUnlocks,
    ],
    sources: {
      pois: [
        {
          map: MAPS.direMarsh,
          pois: [MAPS.direMarsh.pois.bioResearch, MAPS.direMarsh.pois.fieldMaintenance],
        },
      ],
      containers: [
        {
          type: ItemContainerType.MedicalCabinet,
        },
      ],
    },
    credits: 10,
  },
  {
    id: 1036,
    slug: 'nanozymes',
    type: ItemType.Material,
    rarity: ItemRarity.Deluxe,
    name: 'Nanozymes',
    description: `Batches of artificial enzymes, each designed for a custom purpose.`,
    images: {
      icon: 'assets/items/materials/nano-64x64.png',
    },
    usages: [],
    sources: {
      pois: [
        {
          map: MAPS.direMarsh,
          pois: [MAPS.direMarsh.pois.bioResearch],
        },
      ],
    },
    credits: 50,
  },
  {
    id: 1037,
    slug: 'epoxy-resin',
    type: ItemType.Material,
    rarity: ItemRarity.Enhanced,
    name: 'Epoxy Resin',
    description: `A versatile colony-era synthetic resin.`,
    images: {
      icon: 'assets/items/materials/resin-64x64.png',
    },
    usages: [
      MaterialUsageType.TraxusUpgrades,
      MaterialUsageType.NuCaloricVendorUnlocks,
      MaterialUsageType.TraxusVendorUnlocks,
    ],
    sources: {
      pois: [
        {
          map: MAPS.direMarsh,
          pois: [MAPS.direMarsh.pois.complex, MAPS.direMarsh.pois.algaePonds],
        },
      ],
      containers: [
        {
          type: ItemContainerType.ToolCart,
        },
      ],
    },
    credits: 10,
  },
  {
    id: 1038,
    slug: 'nanotruss',
    type: ItemType.Material,
    rarity: ItemRarity.Superior,
    name: 'Nanotruss',
    description: `A`,
    images: {
      icon: 'assets/items/materials/nanotruss-64x64.png',
    },
    usages: [],
    sources: {
      containers: [
        { type: ItemContainerType.LockedRooms, rarity: ItemRarity.Superior },
      ],
      activities: [
        MapActivitySourceType.UESC_INCURSION,
      ],
    },
    credits: null,
  },
  {
    id: 1039,
    slug: 'smart-lens',
    type: ItemType.Material,
    rarity: ItemRarity.Superior,
    name: 'Smart Lens',
    description: `A`,
    images: {
      icon: 'assets/items/materials/smart-lens-64x64.png',
    },
    usages: [],
    sources: {
      containers: [
        { type: ItemContainerType.LockedRooms, rarity: ItemRarity.Superior },
      ],
      activities: [
        MapActivitySourceType.UESC_INCURSION,
      ],
    },
    credits: null,
  },
];
