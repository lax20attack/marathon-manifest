import { RunnerStats } from '../../runners/runners.interface';
import { Item } from '../items.interface';

export enum ImplantType {
  Head = 'Head', // Red icon
  Chest = 'Chest', // Orange icon
  Legs = 'Legs', // Yellow
  Shield = 'Shield',
}

export interface Implant extends Item {
  implantType: ImplantType;
  stats: Partial<RunnerStats>;
  trait?: ImplantTrait;
}

/**
 * Some implants have abilities that provide unique effects.
 */
export interface ImplantTrait {
  name: string;
  description: string;
}
