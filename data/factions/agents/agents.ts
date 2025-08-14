import { FactionType } from '../factions.interface';
import { FactionAgent } from './agents.interface';

export const FACTION_AGENT: Record<FactionType, FactionAgent> = {
  Cyberacme: {
    name: 'Oni',
    imageUrl: 'assets/factions/agents/oni.jpg',
    comms: `CyberAcme is the digital backbone of modern life, an industry leader in AI functionality. We've seamlessly integrated ONI into each shell for life support and neural sync, letting Runners focus on what's important: profit.
    <br/><br/>
    CyberAcme: Your New Best Friend`,
  },
  Nucaloric: {
    name: 'Gaius',
    imageUrl: 'assets/factions/agents/gaius.jpg',
    comms: `MISSION: Ensure long-term human survival. 
    <br/><br/>
    METHOD: Optimize production and distribution of essential consumer goods. Mitigate or eliminate species-level risks.`,
  },
  Traxus: {
    name: 'Vulcan',
    imageUrl: 'assets/factions/agents/vulcan.jpg',
    comms: `Traxus OffWorld Industries stands at the forefront of innovation across all major industrial categories. Our noncorporate temporary assets gain access to diverse assignments and competitive compensation.`,
  },
  Mida: {
    name: 'Mida',
    imageUrl: 'assets/factions/agents/mida.jpg',
    comms: ``,
  },
  Arachne: {
    name: 'Arachne',
    imageUrl: 'assets/factions/agents/arachne.jpg',
    comms: ``,
  },
  Sekiguchi: {
    name: 'Sekiguchi',
    imageUrl: 'assets/factions/agents/sekiguchi.jpg',
    comms: ``,
  },
};
