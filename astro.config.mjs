// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
	starlight({
		title: 'Hello World Docs',
		sidebar: [
			{
				label: 'Getting started',
				items: [{ label: 'Hello World', slug: 'guides/hello-world' }],
			},
			{
				label: 'Grammar',
				items: [
					{ label: 'Where', slug: 'grammar/where' },
					{ label: 'When', slug: 'grammar/when' },
				],
			},
		],
		}),
	],
});
