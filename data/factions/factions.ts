import { FACTION_AGENT } from './agents/agents';
import { FACTION_CONTRACTS } from './contracts/contracts';
import { Faction, FactionTheme, FactionType } from './factions.interface';
import { FACTION_OPTIMIZATIONS, FACTION_UPGRADES } from './upgrades/upgrades';

const FACTION_THEME: Record<FactionType, FactionTheme> = {
  Cyberacme: { surface: '#01d838', onSurface: '#1c1a1b' },
  Nucaloric: { surface: '#ff125d', onSurface: '#1c1a1b' },
  Traxus: { surface: '#ff7300', onSurface: '#1c1a1b' },
  Mida: { surface: '#be72e4', onSurface: '#1c1a1b' },
  Arachne: { surface: '#e40b0d', onSurface: '#1c1a1b' },
  Sekiguchi: { surface: '#cfb72f', onSurface: '#1c1a1b' },
};

export const FACTIONS: Faction[] = [
  {
    type: FactionType.Cyberacme,
    slug: 'cyberacme',
    description:
      'Cyberacme is a leading technology company specializing in advanced cybernetics and artificial intelligence. They are known for their cutting-edge products and innovative solutions.',
    theme: FACTION_THEME.Cyberacme,
    agent: FACTION_AGENT.Cyberacme,
    upgrades: FACTION_UPGRADES.Cyberacme,
    optimizations: FACTION_OPTIMIZATIONS.Cyberacme,
    contracts: FACTION_CONTRACTS.Cyberacme,
    reputation: [
      'Successfully Exfiltrating',
      'Engaging with Intercept Events',
    ],
  },
  {
    type: FactionType.Nucaloric,
    slug: 'nucaloric',
    description:
      'Nucaloric is a global leader in energy production and distribution, focusing on sustainable and renewable energy sources. They are committed to reducing carbon emissions and promoting environmental sustainability.',
    theme: FACTION_THEME.Nucaloric,
    agent: FACTION_AGENT.Nucaloric,
    upgrades: FACTION_UPGRADES.Nucaloric,
    optimizations: FACTION_OPTIMIZATIONS.Nucaloric,
    contracts: FACTION_CONTRACTS.Nucaloric,
    reputation: [
      'Gather Sparkleaf (Perimiter)',
      'Calling in and looting Supply Drops',
      'Exfiltrating with NuCal valuables',
    ],
  },
  {
    type: FactionType.Traxus,
    slug: 'traxus',
    description:
      'Traxus is a multinational corporation specializing in transportation and logistics. They are known for their advanced supply chain solutions and innovative transportation technologies.',
    theme: FACTION_THEME.Traxus,
    agent: FACTION_AGENT.Traxus,
    upgrades: FACTION_UPGRADES.Traxus,
    optimizations: FACTION_OPTIMIZATIONS.Traxus,
    contracts: FACTION_CONTRACTS.Traxus,
    reputation: [
      'Looting Arms Lockers and Munitions Crates',
      'Completing Convoy and Lockdown',
      'Exfiltrating with Traxus valuables',
    ],
  },
  {
    type: FactionType.Mida,
    slug: 'mida',
    description:
      'Mida is a leading financial services company specializing in investment banking and asset management. They are known for their expertise in financial markets and innovative investment strategies.',
    theme: FACTION_THEME.Mida,
    agent: FACTION_AGENT.Mida,
    upgrades: FACTION_UPGRADES.Mida,
    optimizations: FACTION_OPTIMIZATIONS.Mida,
    contracts: FACTION_CONTRACTS.Mida,
    reputation: [
      'Looting Lockboxes',
      'Completing Showcase Events',
      'Exfiltrating with MIDA valuables',
    ],
  },
  {
    type: FactionType.Arachne,
    slug: 'arachne',
    description:
      'Arachne is a global leader in cybersecurity and information security solutions. They are known for their advanced threat detection and prevention technologies.',
    theme: FACTION_THEME.Arachne,
    agent: FACTION_AGENT.Arachne,
    upgrades: FACTION_UPGRADES.Arachne,
    optimizations: FACTION_OPTIMIZATIONS.Arachne,
    contracts: FACTION_CONTRACTS.Arachne,
    reputation: [
      'Looting Runner Bags',
      'Downing Runners with Precision Damage',
      'Eliminating Runners with Finishers',
      'Exfiltrating with Arachne valuables',
    ],
  },
  {
    type: FactionType.Sekiguchi,
    slug: 'sekiguchi',
    description:
      'Sekiguchi is a multinational corporation specializing in manufacturing and engineering. They are known for their advanced production technologies and innovative engineering solutions.',
    theme: FACTION_THEME.Sekiguchi,
    agent: FACTION_AGENT.Sekiguchi,
    upgrades: FACTION_UPGRADES.Sekiguchi,
    optimizations: FACTION_OPTIMIZATIONS.Sekiguchi,
    contracts: FACTION_CONTRACTS.Sekiguchi,
    reputation: [
      'Looting Core Storage and Bioprinters',
      'Engaging with Anomolous Extraction',
      'Completing Targeted Treasure Events',
      'Exfiltrating with SekGen valuables',
    ],
  },
];
