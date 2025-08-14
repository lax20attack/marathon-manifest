import { FACTION_AGENT } from './agents/agents';
import { FACTION_CONTRACTS } from './contracts/contracts';
import { Faction, FactionTheme, FactionType } from './factions.interface';
import { FACTION_OPTIMIZATION, FACTION_UPGRADE } from './upgrades/upgrades';

const FACTION_THEME: Record<FactionType, FactionTheme> = {
  Cyberacme: { surface: '#03ff03', onSurface: '#1c1a1b' },
  Nucaloric: { surface: '#ff125d', onSurface: '#1c1a1b' },
  Traxus: { surface: '#ff7300', onSurface: '#1c1a1b' },
  Mida: { surface: '#673ab7', onSurface: '#1c1a1b' },
  Arachne: { surface: '#3a6cb7', onSurface: '#1c1a1b' },
  Sekiguchi: { surface: '#cfb72f', onSurface: '#1c1a1b' },
};

export const FACTIONS: Faction[] = [
  {
    name: FactionType.Cyberacme,
    description:
      'Cyberacme is a leading technology company specializing in advanced cybernetics and artificial intelligence. They are known for their cutting-edge products and innovative solutions.',
    theme: FACTION_THEME.Cyberacme,
    agent: FACTION_AGENT.Cyberacme,
    upgrades: FACTION_UPGRADE.Cyberacme,
    optimization: FACTION_OPTIMIZATION.Cyberacme,
    contracts: FACTION_CONTRACTS.Cyberacme,
  },
  {
    name: FactionType.Nucaloric,
    description:
      'Nucaloric is a global leader in energy production and distribution, focusing on sustainable and renewable energy sources. They are committed to reducing carbon emissions and promoting environmental sustainability.',
    theme: FACTION_THEME.Nucaloric,
    agent: FACTION_AGENT.Nucaloric,
    upgrades: FACTION_UPGRADE.Nucaloric,
    optimization: FACTION_OPTIMIZATION.Nucaloric,
    contracts: FACTION_CONTRACTS.Nucaloric,
  },
  {
    name: FactionType.Traxus,
    description:
      'Traxus is a multinational corporation specializing in transportation and logistics. They are known for their advanced supply chain solutions and innovative transportation technologies.',
    theme: FACTION_THEME.Traxus,
    agent: FACTION_AGENT.Traxus,
    upgrades: FACTION_UPGRADE.Traxus,
    optimization: FACTION_OPTIMIZATION.Traxus,
    contracts: FACTION_CONTRACTS.Traxus,
  },
  {
    name: FactionType.Mida,
    description:
      'Mida is a leading financial services company specializing in investment banking and asset management. They are known for their expertise in financial markets and innovative investment strategies.',
    theme: FACTION_THEME.Mida,
    agent: FACTION_AGENT.Mida,
    upgrades: FACTION_UPGRADE.Mida,
    optimization: FACTION_OPTIMIZATION.Mida,
    contracts: FACTION_CONTRACTS.Mida,
  },
  {
    name: FactionType.Arachne,
    description:
      'Arachne is a global leader in cybersecurity and information security solutions. They are known for their advanced threat detection and prevention technologies.',
    theme: FACTION_THEME.Arachne,
    agent: FACTION_AGENT.Arachne,
    upgrades: FACTION_UPGRADE.Arachne,
    optimization: FACTION_OPTIMIZATION.Arachne,
    contracts: FACTION_CONTRACTS.Arachne,
  },
  {
    name: FactionType.Sekiguchi,
    description:
      'Sekiguchi is a multinational corporation specializing in manufacturing and engineering. They are known for their advanced production technologies and innovative engineering solutions.',
    theme: FACTION_THEME.Sekiguchi,
    agent: FACTION_AGENT.Sekiguchi,
    upgrades: FACTION_UPGRADE.Sekiguchi,
    optimization: FACTION_OPTIMIZATION.Sekiguchi,
    contracts: FACTION_CONTRACTS.Sekiguchi,
  },
];
