import { Item } from '../../items/items.interface';
import { FactionType } from '../factions.interface';

export interface FactionContract {
  faction: FactionType;
  type: FactionContractType;
  name: string;
  description: string;
  objectives: FactionContractObjective[];
  rank: number;
  rewards: string[];

  // Sequential Contracts have steps
  step?: number;
  totalSteps?: number;
}

export interface FactionContractReward {
  type?: string;
}

export enum FactionContractType {
  Priority = 'Priority',
  Boosted = 'Boosted',
  Standard = 'Standard',
}

export interface FactionContractObjective {
  description: string;
  quantity: number; // Total number of things required to complete the objective
  reward: FactionContractObjectiveReward;
  dependsOnPrevious?: boolean;
}

export enum FactionContractObjectiveRewardType {
  Item = 'item',
  Reputation = 'reputation',
}

export interface FactionContractObjectiveReward {
  type: FactionContractObjectiveRewardType;
  value: number;
  item: Item;
}
