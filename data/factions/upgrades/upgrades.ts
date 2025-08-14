import { FactionType } from '../factions.interface';
import { CYBERACME_UPGRADES } from './cyberacme';
import { NUCALORIC_UPGRADES } from './nucaloric';
import { TRAXUS_UPGRADES } from './traxus';
import { FactionUpgrade, FactionUpgradeOptimization } from './upgrades.interface';

export const FACTION_UPGRADE: Record<FactionType, FactionUpgrade[]> = {
  Cyberacme: CYBERACME_UPGRADES,
  Nucaloric: NUCALORIC_UPGRADES,
  Traxus: TRAXUS_UPGRADES,
  Mida: [],
  Arachne: [],
  Sekiguchi: [],
};

export const FACTION_OPTIMIZATION: Record<FactionType, FactionUpgradeOptimization> = {
  Cyberacme: {
    name: 'CYBERACME OPTIMIZATION',
    description: `Unlocks second offer from AI iteration group, which unlocks a second role in the black market for Cyberacme.`,
    imageUrl: 'assets/images/factions/cyberacme.png',
  },
  Nucaloric: {
    name: 'NUCALORIC OPTIMIZATION',
    description: `Reviving a crew member grants lingering heal over time that's interrupted when taking damage.`,
    imageUrl: 'assets/images/factions/cyberacme.png',
  },
  Traxus: {
    name: 'TRAXUS OPTIMIZATION',
    description: 'Automatically deploy a smoke cloud when you activate an Exfil Site.',
    imageUrl: 'assets/images/factions/traxus.png',
  },
  Mida: {
    name: 'MIDA OPTIMIZATION',
    description: '',
    imageUrl: 'assets/images/factions/mida.png',
  },
  Arachne: {
    name: 'ARACHNE OPTIMIZATION',
    description: '',
    imageUrl: 'assets/images/factions/arakhne.png',
  },
  Sekiguchi: {
    name: 'SEKIGUCHI OPTIMIZATION',
    description: '',
    imageUrl: 'assets/images/factions/sekiguchi.png',
  },
};
