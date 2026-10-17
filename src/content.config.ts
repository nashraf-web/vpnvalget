import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Norwegian review articles (Markdown). Rendered by /no/anmeldelser/[slug].
 * GEO: every file needs directAnswer (quotable summary), entityDef, keyFacts.
 */
const noReviews = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/no-reviews' }),
  schema: z.object({
    title: z.string(),
    description: z.string().min(110).max(165),
    vpn: z.string(),
    datePublished: z.string(),
    dateModified: z.string(),
    /** 40-60 word quotable summary for AI engines + DirectAnswer box */
    directAnswer: z.string(),
    /** Entity definition: "X er ..." — one crisp sentence */
    entityDef: z.string(),
    /** Quotable stats with sources, e.g. [{stat, source}] */
    keyFacts: z.array(z.object({ stat: z.string(), source: z.string() })),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })).min(4),
    related: z.array(z.string()).default([]),
  }),
});

const noVs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/no-vs' }),
  schema: z.object({
    title: z.string(),
    description: z.string().min(110).max(165),
    vpnA: z.string(),
    vpnB: z.string(),
    datePublished: z.string(),
    dateModified: z.string(),
    directAnswer: z.string(),
    entityDef: z.string(),
    keyFacts: z.array(z.object({ stat: z.string(), source: z.string() })),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })).min(4),
    related: z.array(z.string()).default([]),
  }),
});

export const collections = { 'no-reviews': noReviews, 'no-vs': noVs };
