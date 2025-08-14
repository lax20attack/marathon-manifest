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
  name: FactionType;
  description: string;
  theme: FactionTheme;
  agent: FactionAgent;
  upgrades: FactionUpgrade[];
  optimization: FactionUpgradeOptimization;
  contracts: FactionContract[];
}

export interface FactionTheme {
  surface: string;
  onSurface: string;
}
