// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Svenska Bits',
			sidebar: [
				{
					label: 'Chapter 1: Hej allihopa!',
					badge: { text: 'A1', variant: 'note' },
					items: [
						{
							label: 'Greetings and goodbyes',
							slug: 'chapter-1/greetings-and-goodbyes',
							badge: { text: 'V', variant: 'success' },
						},
						{
							label: 'Polite phrases',
							slug: 'chapter-1/polite-phrases',
							badge: { text: 'V', variant: 'success' },
						},
					],
				},
			],
		}),
	],
});
