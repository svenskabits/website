import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				title_sv: z.string().optional(),
				level: z.string().optional(),
				type: z.enum(['P', 'V', 'G']).optional(),
				estimated_minutes: z.number().optional(),
				tags: z.array(z.union([z.string(), z.number()]).transform(String)).optional(),
			}),
		}),
	}),
};
