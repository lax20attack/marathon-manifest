import { Item } from '../../items/items.interface';
import { REPUTATIONS } from '../../items/reputations/reputations';
import { Map } from '../../maps/maps.interface';
import { FactionType } from '../factions.interface';

// Predefined contracts that are available for factions. This is different from the Lost Contract item, which is an in-game item that players can obtain.
export interface FactionContract {
  factionType: FactionType;
  type: FactionContractType;
  name: string;
  steps: FactionContractStep[];

  // Optional runtime variable to track if the contract should be shown in the UI. Hide if all steps are hidden.
  isHidden?: boolean;
}

// Some contracts have multiples steps, each with their own objectives and rewards
export interface FactionContractStep {
  description: string;
  slug: string;
  objectives: FactionContractObjective[];
  rewards?: string[];
  inSingleRun: boolean;
  contested: boolean;

  // Optional runtime variable to track if the contract step should be shown in the UI
  map?: Map;

  // Optional runtime variable to track if
  isHidden?: boolean;
}

export interface FactionContractReward {
  type?: string;
}

export enum FactionContractType {
  Liason = 'Liason',
  Priority = 'Priority',
  Boosted = 'Boosted',
  Standard = 'Standard',
}

export interface FactionContractObjective {
  description: string;
  quantity: number; // Total number of things required to complete the objective
  reward: FactionContractObjectiveReward;
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

export const CYBERACME_REWARD_60_REP: FactionContractObjectiveReward = {
  type: FactionContractObjectiveRewardType.Reputation,
  value: 60,
  item: REPUTATIONS.find((x) => x.slug === 'cyberacme-rep'),
};

export const CYBERACME_REWARD_75_REP: FactionContractObjectiveReward = {
  type: FactionContractObjectiveRewardType.Reputation,
  value: 75,
  item: REPUTATIONS.find((x) => x.slug === 'cyberacme-rep'),
};

export const NUCALORIC_REWARD_60_REP: FactionContractObjectiveReward = {
  type: FactionContractObjectiveRewardType.Reputation,
  value: 60,
  item: REPUTATIONS.find((x) => x.slug === 'nucaloric-rep'),
};

export const NUCALORIC_REWARD_75_REP: FactionContractObjectiveReward = {
  type: FactionContractObjectiveRewardType.Reputation,
  value: 75,
  item: REPUTATIONS.find((x) => x.slug === 'nucaloric-rep'),
};

export const TRAXUS_REWARD_60_REP: FactionContractObjectiveReward = {
  type: FactionContractObjectiveRewardType.Reputation,
  value: 60,
  item: REPUTATIONS.find((x) => x.slug === 'traxus-rep'),
};

export const TRAXUS_REWARD_75_REP: FactionContractObjectiveReward = {
  type: FactionContractObjectiveRewardType.Reputation,
  value: 75,
  item: REPUTATIONS.find((x) => x.slug === 'traxus-rep'),
};

export const MIDA_REWARD_60_REP: FactionContractObjectiveReward = {
  type: FactionContractObjectiveRewardType.Reputation,
  value: 60,
  item: REPUTATIONS.find((x) => x.slug === 'mida-rep'),
};

export const MIDA_REWARD_75_REP: FactionContractObjectiveReward = {
  type: FactionContractObjectiveRewardType.Reputation,
  value: 75,
  item: REPUTATIONS.find((x) => x.slug === 'mida-rep'),
};

export const ARACHNE_REWARD_60_REP: FactionContractObjectiveReward = {
  type: FactionContractObjectiveRewardType.Reputation,
  value: 60,
  item: REPUTATIONS.find((x) => x.slug === 'arachne-rep'),
};

export const ARACHNE_REWARD_75_REP: FactionContractObjectiveReward = {
  type: FactionContractObjectiveRewardType.Reputation,
  value: 75,
  item: REPUTATIONS.find((x) => x.slug === 'arachne-rep'),
};

export const SEKIGUCHI_REWARD_60_REP: FactionContractObjectiveReward = {
  type: FactionContractObjectiveRewardType.Reputation,
  value: 60,
  item: REPUTATIONS.find((x) => x.slug === 'sekiguchi-rep'),
};

export const SEKIGUCHI_REWARD_75_REP: FactionContractObjectiveReward = {
  type: FactionContractObjectiveRewardType.Reputation,
  value: 75,
  item: REPUTATIONS.find((x) => x.slug === 'sekiguchi-rep'),
};
