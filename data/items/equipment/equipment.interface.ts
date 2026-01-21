import { Item } from '../items.interface';

export enum EquipmentType {
  Gadget = 'Gadget',
  Grenade = 'Grenade',
}

export interface Equipment extends Item {
  equipmentType: EquipmentType;
}
