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
							label: 'Articles & Determiners',
							items: [
								{ label: 'Indefinite Article', slug: 'grammar/articles-and-determiners/indefinite-article' },
								{ label: 'No Article', slug: 'grammar/articles-and-determiners/no-article' },
								{ label: 'Definite Article', slug: 'grammar/articles-and-determiners/definite-article' },
								{ label: 'Double Definiteness', slug: 'grammar/articles-and-determiners/double-definiteness' },
								{ label: 'Quantifiers', slug: 'grammar/articles-and-determiners/quantifiers' },
								{ label: 'All and Every', slug: 'grammar/articles-and-determiners/alla-varje-all-hela' },
							],
						},
						{
							label: 'Pronouns',
							items: [
								{ label: 'Subject Pronouns', slug: 'grammar/pronouns/subject-pronouns' },
								{ label: 'Object Pronouns', slug: 'grammar/pronouns/object-pronouns' },
								{ label: 'Possessives', slug: 'grammar/pronouns/possessives' },
								{ label: 'Reflexive Pronouns', slug: 'grammar/pronouns/reflexive-pronouns' },
								{ label: 'Reflexive Possessives', slug: 'grammar/pronouns/reflexive-possessives' },
								{ label: 'Demonstratives', slug: 'grammar/pronouns/demonstratives' },
								{ label: 'Impersonal Pronoun', slug: 'grammar/pronouns/impersonal-pronoun' },
								{ label: 'Some and Someone', slug: 'grammar/pronouns/some-and-someone' },
								{ label: 'No One and None', slug: 'grammar/pronouns/no-one-and-none' },
								{ label: 'Dummy It', slug: 'grammar/pronouns/dummy-it' },
								{ label: 'Relative Pronouns', slug: 'grammar/pronouns/relative-pronouns' },
							],
						},
						{
							label: 'Adjectives',
							items: [
								{ label: 'Adjective Agreement', slug: 'grammar/adjectives/adjective-agreement' },
								{ label: 'Definite Adjectives', slug: 'grammar/adjectives/definite-adjectives' },
								{ label: 'Irregular Adjectives', slug: 'grammar/adjectives/irregular-adjectives' },
								{ label: 'Comparative and Superlative', slug: 'grammar/adjectives/comparatives-and-superlatives' },
								{ label: 'Irregular Comparison', slug: 'grammar/adjectives/irregular-comparisons' },
								{ label: 'Participles as Adjectives', slug: 'grammar/adjectives/participles-as-adjectives' },
								{ label: 'Adjectives as Nouns', slug: 'grammar/adjectives/adjectives-as-nouns' },
							],
						},
						{
							label: 'Verbs: Present & Past',
							items: [
								{ label: 'Infinitive and Att', slug: 'grammar/verbs-present-and-past/infinitive-and-att' },
								{ label: 'Present Tense', slug: 'grammar/verbs-present-and-past/present-tense' },
								{ label: 'Verb Groups', slug: 'grammar/verbs-present-and-past/verb-groups' },
								{ label: 'Imperative', slug: 'grammar/verbs-present-and-past/imperative' },
								{ label: 'Past Tense', slug: 'grammar/verbs-present-and-past/past-tense' },
								{ label: 'Strong and Irregular Verbs', slug: 'grammar/verbs-present-and-past/strong-and-irregular-verbs' },
								{ label: 'Common Verbs', slug: 'grammar/verbs-present-and-past/common-verbs' },
								{ label: 'Reflexive Verbs', slug: 'grammar/verbs-present-and-past/reflexive-verbs' },
								{ label: 'Particle Verbs', slug: 'grammar/verbs-present-and-past/particle-verbs' },
							],
						},
						{
							label: 'Verbs: Perfect & Beyond',
							items: [
								{ label: 'Perfect Tense', slug: 'grammar/verbs-perfect-and-beyond/perfect-tense' },
								{ label: 'Past vs. Perfect', slug: 'grammar/verbs-perfect-and-beyond/past-vs-perfect' },
								{ label: 'Pluperfect', slug: 'grammar/verbs-perfect-and-beyond/pluperfect' },
								{ label: 'Future', slug: 'grammar/verbs-perfect-and-beyond/future' },
								{ label: 'Conditional', slug: 'grammar/verbs-perfect-and-beyond/conditional' },
								{ label: 'S-Verbs', slug: 'grammar/verbs-perfect-and-beyond/s-verbs' },
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
