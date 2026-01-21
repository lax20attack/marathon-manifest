import { FactionType } from '../factions.interface';
import { ARACHNE_OPTIMIZATIONS, ARACHNE_UPGRADES } from './arachne';
import { CYBERACME_OPTIMIZATIONS, CYBERACME_UPGRADES } from './cyberacme';
import { MIDA_OPTIMIZATIONS, MIDA_UPGRADES } from './mida';
import { NUCAL_UPGRADES, NUCALORIC_OPTIMIZATIONS } from './nucaloric';
import { SEKIGUCHI_OPTIMIZATIONS, SEKIGUCHI_UPGRADES } from './sekiguchi';
import { TRAXUS_OPTIMIZATIONS, TRAXUS_UPGRADES } from './traxus';
import { FactionUpgrade, FactionUpgradeOptimization } from './upgrades.interface';

export const FACTION_UPGRADES: Record<FactionType, FactionUpgrade[]> = {
  Cyberacme: CYBERACME_UPGRADES,
  Nucaloric: NUCAL_UPGRADES,
  Traxus: TRAXUS_UPGRADES,
  Mida: MIDA_UPGRADES,
  Arachne: ARACHNE_UPGRADES,
  Sekiguchi: SEKIGUCHI_UPGRADES,
};

export const FACTION_OPTIMIZATIONS: Record<FactionType, FactionUpgradeOptimization[]> = {
  Cyberacme: CYBERACME_OPTIMIZATIONS,
  Nucaloric: NUCALORIC_OPTIMIZATIONS,
  Traxus: TRAXUS_OPTIMIZATIONS,
  Mida: MIDA_OPTIMIZATIONS,
  Arachne: ARACHNE_OPTIMIZATIONS,
  Sekiguchi: SEKIGUCHI_OPTIMIZATIONS,
};
