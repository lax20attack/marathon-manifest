import { FactionType } from '../factions.interface';
import { FactionAgent } from './agents.interface';

export const FACTION_AGENT: Record<FactionType, FactionAgent> = {
  Cyberacme: {
    name: 'Oni',
    imageUrl: 'assets/factions/agents/oni.jpg',
  },
  Nucaloric: {
    name: 'Gaius',
    imageUrl: 'assets/factions/agents/gaius.jpg',
  },
  Traxus: {
    name: 'Vulcan',
    imageUrl: 'assets/factions/agents/vulcan.jpg',
  },
  Mida: {
    name: '_Gantry',
    imageUrl: 'assets/factions/agents/_gantry.jpg',
  },
  Arachne: {
    name: 'Charter',
    imageUrl: 'assets/factions/agents/charter.jpg',
  },
  Sekiguchi: {
    name: 'Nona',
    imageUrl: 'assets/factions/agents/nona.jpg',
  },
};
