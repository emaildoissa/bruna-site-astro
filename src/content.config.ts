import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.string(),
    location: z.string(),
    year: z.number(),
    excerpt: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    coverGradient: z.string(),
    coverImage: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    accentColor: z.string().optional(),
    concept: z.string().optional(),
    elements: z.string().optional(),
  }),
});

export const collections = { projects };
