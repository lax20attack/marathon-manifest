import { Runner } from './runners.interface';

export const RUNNERS: Runner[] = [
  {
    type: 'glitch',
    imageUrl: 'assets/runners/glitch.png',
    summary: {
      kitType: 'Disruptor',
      occupation: 'Freelance Runner',
      origin: 'Martian freedom fighter',
      role: 'Combat anarchist',
      description: `Break the rhythm. Change the chaos. Own the cycle. Replace the cage. <br/><br/>
      Amplify. Antagonize. Disrupt. Destroy. Survivordie.`,
    },
    abilities: {
      prime: {
        name: 'Amplify',
        description: `Overcharge your <b>movement systems</b>, reducing the heat of buildup of movement abilities. Increases <b>movement speed</b> and <b>weapon dexterity</b>.`,
      },
      tactical: {
        name: 'Disruptor',
        description: `Press: Transform your arm into a <b>cannon</b> and fire a high-powered energy projectile that deals damage and <b>pushes</b> targets away. <br/><br/>
        Hold: <b>Overcharge</b> your arm cannon, greatly increasing the size and damage of the blast.`,
      },
      trait1: {
        name: 'Microjets',
        description: `Activate in air to perform <b>another jump</b> at the cost of <b>generating additional heat</b>.`,
      },
      trait2: { name: 'Power Slide', description: 'Grants a <b>supercharged</b> slide that generates additional heat.' },
    },
  },
  {
    type: 'void',
    imageUrl: 'assets/runners/void.png',
    summary: {
      kitType: 'Stealth',
      occupation: 'Freelance Runner',
      origin: 'Unknown',
      role: 'Shadow assassin',
      description: `I saw a star fade and the expanse did offer; 'no sympathy, until the last spark shines. <br/><br/>
      These are my memories; us as blades quest past each synthetic pulse, in search of dreams; of peace.'`,
    },
    abilities: {
      prime: {
        name: 'Smoke Screen',
        description: `Throw a smoke disc that emits a <b>line of smoke fields</b> in front of you, disrupting the optics of those who step inside.`,
      },
      tactical: {
        name: 'Active Camo',
        description: `Activate your shell's camouflage systems, pulling a shroud of <b>invisibility</b> over yourself. <br/><br/>
        Performing offensive actions, taking damage, and using abilities or consumables briefly <b>disrupts your invisibility</b>.`,
      },
      trait1: {
        name: 'Shadow Dive',
        description: `Activate while <b>airborne</b> to slam a smoke disc into the ground, deploying a <b>smoke field</b>.`,
      },
      trait2: {
        name: 'Shroud',
        description: `Your shell automatically activates camouflage systems when entering any <b>smoke field</b>, making you <b>invisible</b>. <br/><br/>
        Invisibility persists for a short time after leaving the smoke field.`,
      },
    },
  },
  {
    type: 'locus',
    imageUrl: 'assets/runners/locus.png',
    summary: {
      kitType: 'Destroyer',
      occupation: 'Freelance Runner',
      origin: 'Ex-UESC special operations',
      role: 'Combat specialist',
      description: `War is brutal. Be brutal. Brutal is your nature. Be you. You are unstoppable. Don't stop. They are the enemy. Make friends.`,
    },
    abilities: {
      prime: {
        name: 'Search and Destroy',
        description: `Activate your <b>shoulder-mounted missile pods</b>. <br/><br/>
        Dealing systained damage to targets launches homing missiles, <b>immobilizing</b> and dealing damage upon impact.`,
      },
      tactical: {
        name: 'Riot Barricade',
        description: `Activate an <b>energy barricade</b> that blocks incoming damage, draining tactical ability energy over time.<br/><br/>
        <b>Taking damage</b> drains additional energy.`,
      },
      trait1: {
        name: 'Thruster',
        description: `Activate while airborne to fire <b>boosters</b> that <b>thrust</b> you in the direction you are moving.`,
      },
      trait2: {
        name: 'Tactical Sprint',
        description: `Double-press sprint to move faster at the cost of generating <b>additional heat</b>.`,
      },
    },
  },
  {
    type: 'blackbird',
    imageUrl: 'assets/runners/blackbird.png',
    summary: {
      kitType: 'Scout',
      occupation: 'Freelance Runner',
      origin: 'Classified',
      role: 'Tactical specialist',
      description: `Run. See the pattern. <br/>
      Run. Become the pattern. <br/>
      Run. Die. Repeat. <br/>
      Run. Deliver the signal. <br/>
      Run. The pattern repeats. <br/>`,
    },
    abilities: {
      prime: {
        name: 'Echo Pulse',
        description: `Activate your shell's <b>advanced detection systems</b>, releasing a series of <b>sonar pulses</b> that reveal the location of nearby hostiles.`,
      },
      tactical: {
        name: 'Tracker Drone',
        description: `Deploy a mechanized <b>microbot</b> that tracks down nearby hostiles and explodes, <b>overheating</b> any targets caught in the blast.`,
      },
      trait1: {
        name: 'Interrogation',
        description: `When pinged by a hostile Runner, you automatically receive a <b>warning</b> in your shell's HUD. <br/><br/>
        Performing a <b>finisher</b> on a Runner <b>pings</b> their crew.`,
      },
      trait2: {
        name: 'Stalker Protocol',
        description: `After breaking a combatant's shields, they leave behind a <b>lingering holographic trail</b> for a short time.`,
      },
    },
  },
];
