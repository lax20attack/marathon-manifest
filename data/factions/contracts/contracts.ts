import { FactionType } from '../factions.interface';
import { ARACHNE_PRIORITY_CONTRACTS } from './arachne/arachne-priority';
import { ARACHNE_STANDARD_CONTRACTS } from './arachne/arachne-standard';
import { FactionContract } from './contracts.interface';
import { CYBERACME_LIASON_CONTRACTS } from './cyberacme/cyberacme-liason';
import { CYBERACME_PRIORITY_CONTRACTS } from './cyberacme/cyberacme-priority';
import { CYBERACME_STANDARD_CONTRACTS } from './cyberacme/cyberacme-standard';
import { MIDA_PRIORITY_CONTRACTS } from './mida/mida-priority';
import { MIDA_STANDARD_CONTRACTS } from './mida/mida-standard';
import { NUCALORIC_PRIORITY_CONTRACTS } from './nucaloric/nucaloric-priority';
import { NUCALORIC_STANDARD_CONTRACTS } from './nucaloric/nucaloric-standard';
import { TRAXUS_PRIORITY_CONTRACTS } from './traxus/traxus-priority';
import { TRAXUS_STANDARD_CONTRACTS } from './traxus/traxus-standard';

export const FACTION_CONTRACTS: Record<FactionType, FactionContract[]> = {
  Cyberacme: [
    ...CYBERACME_LIASON_CONTRACTS,
    ...CYBERACME_PRIORITY_CONTRACTS,
    ...CYBERACME_STANDARD_CONTRACTS,
  ],
  Nucaloric: [
    ...NUCALORIC_PRIORITY_CONTRACTS,
    ...NUCALORIC_STANDARD_CONTRACTS,
  ],
  Traxus: [
    ...TRAXUS_PRIORITY_CONTRACTS,
    ...TRAXUS_STANDARD_CONTRACTS,
  ],
  Mida: [
    ...MIDA_PRIORITY_CONTRACTS,
    ...MIDA_STANDARD_CONTRACTS,
  ],
  Arachne: [
    ...ARACHNE_PRIORITY_CONTRACTS,
    ...ARACHNE_STANDARD_CONTRACTS,
  ],
  Sekiguchi: [],
};
