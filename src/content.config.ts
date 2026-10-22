import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every text field exists twice: `_en` and `_fr`. The CMS shows them side by side.
const str = z.string().default('');
const yml = (dir: string) => glob({ base: `./src/content/${dir}`, pattern: '**/*.yml' });

// Singleton pages (home, lessons, ...). Each has its own shape, so only the
// shared keys are validated here; the page views read the rest.
const pages = defineCollection({
  loader: yml('pages'),
  schema: z.looseObject({ title_en: z.string(), title_fr: z.string() }),
});

const units = defineCollection({
  loader: yml('units'),
  schema: z.object({
    title_en: z.string(),
    title_fr: z.string(),
    order: z.number().default(0),
    published: z.boolean().default(true),
    level: str,
    age_band_en: str,
    age_band_fr: str,
    summary_en: str,
    summary_fr: str,
    body_en: str,
    body_fr: str,
    image: str,
  }),
});

const resources = defineCollection({
  loader: yml('resources'),
  schema: z.object({
    title_en: z.string(),
    title_fr: z.string(),
    description_en: str,
    description_fr: str,
    level: str,
    kind: z.enum(['free', 'paid']).default('free'),
    price: str,
    cover: str,
    file: str,
    buy_url: str,
    order: z.number().default(0),
    published: z.boolean().default(true),
  }),
});

const testimonials = defineCollection({
  loader: yml('testimonials'),
  schema: z.object({
    quote_en: z.string(),
    quote_fr: z.string(),
    name: z.string(),
    context_en: str,
    context_fr: str,
    order: z.number().default(0),
  }),
});

export const collections = { pages, units, resources, testimonials };
