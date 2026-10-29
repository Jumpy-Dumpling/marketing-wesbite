import { url } from './url';

export const SITE_NAME = 'Jumpy Dumpling';
export const TAGLINE = 'Small apps. Big dreams.';
export const SITE_DESCRIPTION =
  'Jumpy Dumpling is a one-person studio making small, useful apps: Lifty, a strength tracker, Moving Day, a stress-free moving planner, and Migraine Diary, a headache and trigger log.';

/** Absolute URL for a site path, honouring the configured site and base. */
export function absolute(path: string, site: URL | undefined): string {
  return new URL(url(path), site ?? 'http://localhost:4321').href;
}
