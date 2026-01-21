import { RunnerType } from '../../runners/runners.interface';
import { Item, ItemImages } from '../items.interface';

export interface Core extends Item {
  runnerType: RunnerType;
}

export interface CoreSlot {
  id: number;
  images: ItemImages;
}
