import { FactionAgent } from './agents/agents.interface';
import { FactionContract } from './contracts/contracts.interface';
import { FactionUpgrade, FactionUpgradeOptimization } from './upgrades/upgrades.interface';

export enum FactionType {
  Cyberacme = 'Cyberacme',
  Nucaloric = 'Nucaloric',
  Traxus = 'Traxus',
  Mida = 'Mida',
  Arachne = 'Arachne',
  Sekiguchi = 'Sekiguchi',
}

export interface Faction {
  // Unique identifier for the faction, used in URLs
  slug: string;

  // Faction name for display
  name: FactionType;

  // Description of the faction
  description: string;

  // Color theme for the faction, used in UI elements
  theme: FactionTheme;

  // Meta information about the faction's agent
  agent: FactionAgent;

  // Optimization is unlocked after purchasing all upgrades for the faction
  optimization: FactionUpgradeOptimization;

  // List of upgrades available for the faction
  upgrades: FactionUpgrade[];

  // List of contracts available for the faction
  contracts: FactionContract[];
}

export interface FactionTheme {
  surface: string;
  onSurface: string;
}
