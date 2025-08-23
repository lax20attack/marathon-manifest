import { RunnerStats } from '../../runners/runners.interface';
import { Item, ItemImages } from '../items.interface';

export enum ImplantType {
  Head = 'Head', // Red icon
  Chest = 'Chest', // Orange icon
  Leg = 'Leg', // Yellow
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

export interface ImplantSlot {
  type: ImplantType;
  images: ItemImages;
}
