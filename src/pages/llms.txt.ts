import type { APIRoute } from 'astro';
import { apps } from '../data/apps';
import { absolute, SITE_NAME, TAGLINE, SITE_DESCRIPTION } from '../lib/seo';

// llms.txt: a plain-markdown summary of the site for AI engines and agents.
export const GET: APIRoute = ({ site }) => {
  const lines = [
    `# ${SITE_NAME}`,
    '',
    `> ${TAGLINE} ${SITE_DESCRIPTION}`,
    '',
    `${SITE_NAME} is a personal portfolio by Zac, an independent developer. Each app is a small, focused iPhone app with its own page.`,
    '',
    '## Apps',
    '',
    ...apps.map((a) => `- [${a.name}](${absolute(`apps/${a.slug}/`, site)}): ${a.blurb} (${a.status.toLowerCase()})`),
    '',
    '## Pages',
    '',
    `- [Home](${absolute('', site)}): the studio, the app gallery and a note from Zac`,
    '',
    ...apps.flatMap((a) => [
      `## ${a.name}`,
      '',
      a.intro,
      '',
      ...a.features.map((f) => `- ${f.title}: ${f.body}`),
      '',
    ]),
  ].join('\n');
  return new Response(lines, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
