import liftyIcon from '../assets/lifty-icon.png';
import movingIcon from '../assets/moving-icon.svg';
import migraineIcon from '../assets/migraine-icon.svg';

export interface StoreLink {
  label: string;
  href: string | null; // null renders a "coming soon" badge
}

export interface App {
  slug: string;
  name: string;
  icon: ImageMetadata;
  /** One line for cards. */
  blurb: string;
  /** Longer intro for the app page. */
  intro: string;
  status: 'In the works' | 'Out now' | 'Tinkering';
  stores: StoreLink[];
  features: { title: string; body: string }[];
  /** Each app keeps its own branding on its page. */
  accent: string;
  accentTint: string;
  /** schema.org applicationCategory, plus search keywords. */
  category: 'HealthApplication' | 'LifestyleApplication' | 'UtilitiesApplication';
  keywords: string[];
  /** Short descriptor for page titles, e.g. "Strength Training Tracker". */
  descriptor: string;
}

export const apps: App[] = [
  {
    slug: 'lifty',
    name: 'Lifty',
    icon: liftyIcon,
    blurb: 'A strength tracker that logs a set with one tap, even from your wrist.',
    intro:
      'Lifty is a strength training tracker for people who would rather lift than fiddle with their phone. Log sets fast, follow a plan, and see your progress add up.',
    status: 'In the works',
    stores: [{ label: 'App Store', href: null }],
    features: [
      {
        title: 'One tap, from your wrist',
        body: 'The Apple Watch app shows your current set with weight and reps pre-filled. Tap Log set and the rest timer starts.',
      },
      {
        title: '870+ exercises',
        body: 'A big library with two-frame animations, steps and muscle groups. Add your own, with a YouTube video if you like.',
      },
      {
        title: 'A plan builder that helps',
        body: 'Ask the AI coach for a routine. If you are offline it falls back to a template, so you are never stuck.',
      },
      {
        title: 'Yours first, synced second',
        body: 'Everything lives on your phone and works offline. Sync and accounts are there when you want them.',
      },
      {
        title: 'Lifting with friends',
        body: 'Join challenges, compare on friendly leaderboards, and connect with a QR code in person.',
      },
    ],
    accent: '#7a4dff',
    accentTint: '#efe9ff',
    descriptor: 'Strength Training Tracker',
    category: 'HealthApplication',
    keywords: ['strength training tracker', 'workout log', 'Apple Watch workout app', 'gym tracker', '5/3/1'],
  },
  {
    slug: 'moving-day',
    name: 'Moving Day',
    icon: movingIcon,
    blurb: 'The ultimate moving app. Keeps your move easy and stress free.',
    intro:
      'Moving is a hundred small jobs happening at once. Moving Day keeps all of them in one place, so nothing gets lost between the old front door and the new one.',
    status: 'In the works',
    stores: [{ label: 'App Store', href: null }],
    features: [
      { title: 'One calm plan', body: 'A timeline that tells you what to do this week, and quietly handles the rest.' },
      { title: 'Know where everything is', body: 'Track boxes and rooms so unpacking is a lookup, not a treasure hunt.' },
      { title: 'Nothing forgotten', body: 'Address changes, utilities and the other tiny chores that pile up at the end.' },
    ],
    accent: '#e08a00',
    accentTint: '#fff0c2',
    descriptor: 'Moving Planner and Checklist',
    category: 'UtilitiesApplication',
    keywords: ['moving app', 'moving checklist', 'packing inventory', 'moving planner'],
  },
  {
    slug: 'migraine-diary',
    name: 'Migraine Diary',
    icon: migraineIcon,
    blurb: 'Log migraines and headaches, and find the triggers behind them.',
    intro:
      'A simple diary for migraines and other headaches. Jot down what happened in a few taps, and let the patterns show you what is setting them off.',
    status: 'In the works',
    stores: [{ label: 'App Store', href: null }],
    features: [
      { title: 'Quick to log', body: 'Built to be used mid-headache: big buttons, few questions, dark and gentle.' },
      { title: 'Spot your triggers', body: 'See what tends to come before a bad day, from sleep to food to weather.' },
      { title: 'Something to show your doctor', body: 'A clear history you can bring to an appointment.' },
    ],
    accent: '#7a4dff',
    accentTint: '#efe9ff',
    descriptor: 'Migraine and Headache Tracker',
    category: 'HealthApplication',
    keywords: ['migraine tracker', 'headache diary', 'migraine triggers', 'headache log'],
  },
];
