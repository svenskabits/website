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
							label: '1.1 Greetings and goodbyes',
							slug: 'chapter-1/greetings-and-goodbyes',
							badge: { text: 'V', variant: 'success' },
						},
						{
							label: '1.2 Polite phrases',
							slug: 'chapter-1/polite-phrases',
							badge: { text: 'V', variant: 'success' },
						},
						{
							label: '1.3 The Swedish alphabet',
							slug: 'chapter-1/the-swedish-alphabet',
							badge: { text: 'P', variant: 'success' },
						},
						{
							label: '1.4 Å, Ä, Ö',
							slug: 'chapter-1/a-a-o',
							badge: { text: 'P', variant: 'success' },
						},
						{
							label: '1.5 Spelling words aloud',
							slug: 'chapter-1/spelling-words-aloud',
							badge: { text: 'P', variant: 'success' },
						},
						{
							label: '1.6 Introducing yourself',
							slug: 'chapter-1/introducing-yourself',
							badge: { text: 'V', variant: 'success' },
						},
						{
							label: '1.7 Subject pronouns',
							slug: 'chapter-1/subject-pronouns',
							badge: { text: 'G', variant: 'success' },
						},
						{
							label: '1.8 Vara (present tense)',
							slug: 'chapter-1/vara-present-tense',
							badge: { text: 'G', variant: 'success' },
						},
						{
							label: '1.9 Countries and nationalities',
							slug: 'chapter-1/countries-and-nationalities',
							badge: { text: 'V', variant: 'success' },
						},
						{
							label: '1.10 Languages',
							slug: 'chapter-1/languages',
							badge: { text: 'V', variant: 'success' },
						},
						{
							label: '1.11 Basic sentence order (SVO)',
							slug: 'chapter-1/basic-sentence-order-svo',
							badge: { text: 'G', variant: 'success' },
						},
					],
				},
			],
		}),
	],
});
