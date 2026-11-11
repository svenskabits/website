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
					label: 'Grammar',
					items: [
						{ label: 'Overview', slug: 'grammar' },
						{ autogenerate: { directory: 'grammar' } },
					],
				},
				{
					label: 'Vocabulary',
					items: [
						{
							label: 'Numbers',
							items: [{ autogenerate: { directory: 'vocabulary/numbers' } }],
						},
					],
				},
				{
					label: 'Pronunciation',
					items: [{ autogenerate: { directory: 'pronunciation' } }],
				},
			],
			components: {
				Sidebar: './src/components/Sidebar.astro',
			},
		}),
	],
});
