import { FactionType } from '../factions.interface';
import { FactionContract } from './contracts.interface';
import { CYBERACME_CONTRACTS } from './cyberacme';
import { NUCALORIC_CONTRACTS } from './nucaloric';
import { TRAXUS_CONTRACTS } from './traxus';

export const FACTION_CONTRACTS: Record<FactionType, FactionContract[]> = {
  Cyberacme: CYBERACME_CONTRACTS,
  Nucaloric: NUCALORIC_CONTRACTS,
  Traxus: TRAXUS_CONTRACTS,
  Mida: [],
  Arachne: [],
  Sekiguchi: [],
};
