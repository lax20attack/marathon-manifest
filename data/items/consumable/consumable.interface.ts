import { Item } from '../items.interface';

export enum ConsumableType {
  Debuff = 'Debuff',
  Heal = 'Heal',
  Shield = 'Shield',
  Survival = 'Survival',
}

export interface Consumable extends Item {
  consumableType: ConsumableType;
}
