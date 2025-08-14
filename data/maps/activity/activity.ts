import { MapActivityItem, MapActivityType } from './activity.interface';

export const MAP_ACTIVITY_ITEMS: Record<string, MapActivityItem> = {
  [MapActivityType.CREW_EXFIL]: {
    type: MapActivityType.CREW_EXFIL,
    name: 'Crew Exfil',
    imageUrl: 'assets/maps/activities/crew-exfil.jpg',
    description:
      'A designated area for crew members to safely exfiltrate from the map. This can only be used one time before moving to a new location.',
  },
  [MapActivityType.GUARDED_EXFIL]: {
    type: MapActivityType.GUARDED_EXFIL,
    name: 'Guarded Exfil',
    imageUrl: 'assets/maps/activities/guarded-exfil.jpg',
    description: 'A guarded extraction point. Once the exfil is started, UESC forces will arrive to defend the area.',
  },
  [MapActivityType.HIGH_VALUE_TARGET]: {
    type: MapActivityType.HIGH_VALUE_TARGET,
    name: 'High Value Target',
    imageUrl: 'assets/maps/activities/high-value-target.jpg',
    description: `A bubble spawns around a high value area. Enemies can shoot out but you can't shoot them unless you're inside the bubble.
    After the first wave, the bubble will disappear.
    <br/><br/> 
    Finish off the remaining enemies and interact with the box, which will shoot red flares and start a countdown until it opens.

    <br/><br/>
    You'll need an Advanced Mechanics Kit to reduce the damage received in the bubble. 
    `,
  },
  [MapActivityType.INTERCEPT]: {
    type: MapActivityType.INTERCEPT,
    name: 'Intercept',
    imageUrl: 'assets/maps/activities/intercept.jpg',
    description:
      'Triggered by selecting the terminals with matching numbers. This will spawn a UESC ship somewhere on the map, which can be destroyed for loot.',
    videoUrl: 'https://www.youtube.com/embed/w4ZRefkmA54?&amp;start=133s',
  },
  [MapActivityType.UESC_INCURSION]: {
    type: MapActivityType.UESC_INCURSION,
    name: 'UESC Incursion',
    imageUrl: 'assets/maps/activities/uesc-incursion.jpg',
    description: 'Battle UESC forces in a wave based format. Interact with the terminal to trigger the incursion.',
  },
  [MapActivityType.UNKNOWN]: {
    type: MapActivityType.UNKNOWN,
    name: 'Unknown',
    imageUrl: 'assets/maps/activities/unknown-activity.jpg',
    isHiddenActivitiesItem: true,
    description:
      'The activity type will be revealed when you get close to the location. The map markers will disappear once the activity is completed.',
  },

  // Hidden activities
  [MapActivityType.FLARE_ROOM]: {
    type: MapActivityType.FLARE_ROOM,
    name: 'Flare Room',
    imageUrl: 'assets/maps/activities/flare-room.jpg',
    description: 'Find extra loot in the flare room. Look for the marking below to see where the loot is located.',
  },
  [MapActivityType.GAS_ROOM]: {
    type: MapActivityType.GAS_ROOM,
    name: 'Gas Room',
    imageUrl: 'assets/maps/activities/gas-room.jpg',
    description: `Clear the gas by interacting with a nearby terminal. This will let you loot the area safely for a short time. Using an Advanced Mechanics Kit will reduce the damage taken by the gas.`,
  },
  [MapActivityType.SUPPLY_DROP]: {
    type: MapActivityType.SUPPLY_DROP,
    name: 'Supply Drop',
    imageUrl: 'assets/maps/activities/supply-drop.jpg',
    description: `Call down a high-value Supply Drop from low orbit by activating the terminal. 
    Supply drops contain valuable loot like mods and implants, but everyone on the map can see the blue beam in the sky when the event is triggered.`,
  },
};
