import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const base = z.object({
  title: z.string(),
  description: z.string().max(160, 'Keep descriptions to one short sentence.'),
  summary: z.string().optional(), // a few sentences shown when the entry is expanded
  date: z.coerce.date(),
  endDate: z.coerce.date().optional(),
  current: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
  links: z.array(z.object({ label: z.string(), url: z.string().url(), external: z.boolean().optional().default(false) })).default([]),
  featured: z.boolean().default(false),
  cover: z.string().optional(), // path under /public, e.g. /images/cover.jpg
  coverAlt: z.string().default(''),
});

const make = (dir: string, schema: z.ZodTypeAny = base) =>
  defineCollection({ loader: glob({ pattern: '**/*.md', base: `./src/content/${dir}` }), schema });

export const collections = {
  projects: make('projects'),
  experience: make('experience', base.extend({ company: z.string().optional(), role: z.string().optional() })),
  writing: make('writing'),
  reading: make('reading', base.extend({ author: z.string().optional() })),
};
