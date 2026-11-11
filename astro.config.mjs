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
						{
							label: 'Nouns',
							items: [
								{ label: 'En- and Ett-Words', slug: 'grammar/nouns/en-and-ett-words' },
								{ label: 'Plural', slug: 'grammar/nouns/plural' },
								{ label: 'Irregular Plurals', slug: 'grammar/nouns/irregular-plurals' },
								{ label: 'Definite Singular', slug: 'grammar/nouns/definite-singular' },
								{ label: 'Definite Plural', slug: 'grammar/nouns/definite-plural' },
								{ label: 'Compound Words', slug: 'grammar/nouns/compound-words' },
								{ label: 'The Genitive -s', slug: 'grammar/nouns/genitive-s' },
							],
						},
						{
							label: 'Questions',
							items: [
								{ label: 'Where', slug: 'grammar/questions/where' },
								{ label: 'When', slug: 'grammar/questions/when' },
							],
						},
					],
				},
				{
					label: 'Vocabulary',
					items: [
						{
							label: 'Numbers',
							items: [{ label: 'One to Hundred', slug: 'vocabulary/numbers/one-to-hundred' }],
						},
					],
				},
				{
					label: 'Pronunciation',
					items: [{ label: 'Overview', slug: 'pronunciation' }],
				},
			],
			components: {
				Sidebar: './src/components/Sidebar.astro',
			},
		}),
	],
});
