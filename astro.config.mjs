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
				{
					label: 'Chapter 2: Var bor du?',
					badge: { text: 'A1', variant: 'note' },
					items: [
						{
							label: '2.1 Numbers 0–20',
							slug: 'chapter-2/numbers-0-20',
							badge: { text: 'V', variant: 'success' },
						},
						{
							label: '2.2 Numbers 21–100',
							slug: 'chapter-2/numbers-21-100',
							badge: { text: 'V', variant: 'success' },
						},
						{
							label: '2.3 Phone numbers',
							slug: 'chapter-2/phone-numbers',
							badge: { text: 'V', variant: 'success' },
						},
						{
							label: '2.4 Age',
							slug: 'chapter-2/age',
							badge: { text: 'V', variant: 'success' },
						},
						{
							label: '2.5 Places in town',
							slug: 'chapter-2/places-in-town',
							badge: { text: 'V', variant: 'success' },
						},
						{
							label: '2.6 Long and short vowels',
							slug: 'chapter-2/long-and-short-vowels',
							badge: { text: 'P', variant: 'success' },
						},
						{
							label: '2.7 En- and ett-words',
							slug: 'chapter-2/en-and-ett-words',
							badge: { text: 'G', variant: 'success' },
						},
						{
							label: '2.8 Indefinite article (en/ett)',
							slug: 'chapter-2/indefinite-article-en-ett',
							badge: { text: 'G', variant: 'success' },
						},
						{
							label: '2.9 The infinitive',
							slug: 'chapter-2/the-infinitive',
							badge: { text: 'G', variant: 'success' },
						},
						{
							label: '2.10 Present tense',
							slug: 'chapter-2/present-tense',
							badge: { text: 'G', variant: 'success' },
						},
						{
							label: '2.11 Verb groups 1–4',
							slug: 'chapter-2/verb-groups-1-4',
							badge: { text: 'G', variant: 'success' },
						},
						{
							label: '2.12 Place: i and på',
							slug: 'chapter-2/place-i-and-pa',
							badge: { text: 'G', variant: 'success' },
						},
						{
							label: '2.13 Wh-questions overview',
							slug: 'chapter-2/wh-questions-overview',
							badge: { text: 'G', variant: 'success' },
						},
						{
							label: '2.14 Var',
							slug: 'chapter-2/var',
							badge: { text: 'G', variant: 'success' },
						},
						{
							label: '2.15 Vad',
							slug: 'chapter-2/vad',
							badge: { text: 'G', variant: 'success' },
						},
						{
							label: '2.16 Vem',
							slug: 'chapter-2/vem',
							badge: { text: 'G', variant: 'success' },
						},
						{
							label: '2.17 Hur',
							slug: 'chapter-2/hur',
							badge: { text: 'G', variant: 'success' },
						},
					],
				},
				{
					label: 'Chapter 3: Kan du prata svenska?',
					badge: { text: 'A1', variant: 'note' },
					items: [
						{
							label: '3.1 Classroom phrases',
							slug: 'chapter-3/classroom-phrases',
							badge: { text: 'V', variant: 'success' },
						},
						{
							label: '3.2 Survival phrases (Jag förstår inte, Kan du upprepa?)',
							slug: 'chapter-3/survival-phrases-jag-forstar-inte-kan-du-upprepa',
							badge: { text: 'V', variant: 'success' },
						},
						{
							label: '3.3 Learning Swedish',
							slug: 'chapter-3/learning-swedish',
							badge: { text: 'V', variant: 'success' },
						},
						{
							label: '3.4 Everyday verbs',
							slug: 'chapter-3/everyday-verbs',
							badge: { text: 'V', variant: 'success' },
						},
						{
							label: '3.5 Kan',
							slug: 'chapter-3/kan',
							badge: { text: 'G', variant: 'success' },
						},
						{
							label: '3.6 Vill',
							slug: 'chapter-3/vill',
							badge: { text: 'G', variant: 'success' },
						},
						{
							label: '3.7 Måste',
							slug: 'chapter-3/maste',
							badge: { text: 'G', variant: 'success' },
						},
						{
							label: '3.8 Modal verbs and the infinitive without "att"',
							slug: 'chapter-3/modal-verbs-and-the-infinitive-without-att',
							badge: { text: 'G', variant: 'success' },
						},
						{
							label: '3.9 Negation with inte',
							slug: 'chapter-3/negation-with-inte',
							badge: { text: 'G', variant: 'success' },
						},
						{
							label: '3.10 Yes/No questions',
							slug: 'chapter-3/yes-no-questions',
							badge: { text: 'G', variant: 'success' },
						},
						{
							label: '3.11 Answering with ja, nej, jo',
							slug: 'chapter-3/answering-with-ja-nej-jo',
							badge: { text: 'G', variant: 'success' },
						},
						{
							label: '3.12 Soft and hard K and G',
							slug: 'chapter-3/soft-and-hard-k-and-g',
							badge: { text: 'P', variant: 'success' },
						},
					],
				},
				{
					label: 'Chapter 4: Vad gör du på fritiden?',
					badge: { text: 'A1', variant: 'note' },
					items: [
						{
							label: '4.1 Sports',
							slug: 'chapter-4/sports',
							badge: { text: 'V', variant: 'success' },
						},
						{
							label: '4.2 Music',
							slug: 'chapter-4/music',
							badge: { text: 'V', variant: 'success' },
						},
						{
							label: '4.3 Movies and TV',
							slug: 'chapter-4/movies-and-tv',
							badge: { text: 'V', variant: 'success' },
						},
						{
							label: '4.4 Outdoor activities',
							slug: 'chapter-4/outdoor-activities',
							badge: { text: 'V', variant: 'success' },
						},
						{
							label: '4.5 Göra',
							slug: 'chapter-4/gora',
							badge: { text: 'G', variant: 'success' },
						},
						{
							label: '4.6 Gilla and tycka om',
							slug: 'chapter-4/gilla-and-tycka-om',
							badge: { text: 'G', variant: 'success' },
						},
						{
							label: '4.7 Days of the week',
							slug: 'chapter-4/days-of-the-week',
							badge: { text: 'V', variant: 'success' },
						},
						{
							label: '4.8 The clock',
							slug: 'chapter-4/the-clock',
							badge: { text: 'V', variant: 'success' },
						},
						{
							label: '4.9 När',
							slug: 'chapter-4/nar',
							badge: { text: 'G', variant: 'success' },
						},
						{
							label: '4.10 Frequency expressions',
							slug: 'chapter-4/frequency-expressions',
							badge: { text: 'V', variant: 'success' },
						},
						{
							label: '4.11 Frequency adverbs',
							slug: 'chapter-4/frequency-adverbs',
							badge: { text: 'G', variant: 'success' },
						},
						{
							label: '4.12 Inversion (V2 rule)',
							slug: 'chapter-4/inversion-v2-rule',
							badge: { text: 'G', variant: 'success' },
						},
						{
							label: '4.13 Word stress',
							slug: 'chapter-4/word-stress',
							badge: { text: 'P', variant: 'success' },
						},
						{
							label: '4.14 The R sound',
							slug: 'chapter-4/the-r-sound',
							badge: { text: 'P', variant: 'success' },
						},
					],
				},
				{
					label: 'Chapter 5: Min familj är stor, men mitt hem är litet',
					badge: { text: 'A1', variant: 'note' },
					items: [
						{
							label: '5.1 Immediate family',
							slug: 'chapter-5/immediate-family',
							badge: { text: 'V', variant: 'success' },
						},
						{
							label: '5.2 Extended family',
							slug: 'chapter-5/extended-family',
							badge: { text: 'V', variant: 'success' },
						},
						{
							label: '5.3 Ha (to have)',
							slug: 'chapter-5/ha-to-have',
							badge: { text: 'G', variant: 'success' },
						},
						{
							label: '5.4 Possessives: min, mitt, mina',
							slug: 'chapter-5/possessives-min-mitt-mina',
							badge: { text: 'G', variant: 'success' },
						},
						{
							label: '5.5 Vems',
							slug: 'chapter-5/vems',
							badge: { text: 'G', variant: 'success' },
						},
						{
							label: '5.6 The genitive -s',
							slug: 'chapter-5/the-genitive-s',
							badge: { text: 'G', variant: 'success' },
						},
						{
							label: '5.7 Describing people',
							slug: 'chapter-5/describing-people',
							badge: { text: 'V', variant: 'success' },
						},
						{
							label: '5.8 Adjective agreement',
							slug: 'chapter-5/adjective-agreement',
							badge: { text: 'G', variant: 'success' },
						},
						{
							label: '5.9 Colors',
							slug: 'chapter-5/colors',
							badge: { text: 'V', variant: 'success' },
						},
						{
							label: '5.10 Rooms',
							slug: 'chapter-5/rooms',
							badge: { text: 'V', variant: 'success' },
						},
						{
							label: '5.11 Furniture',
							slug: 'chapter-5/furniture',
							badge: { text: 'V', variant: 'success' },
						},
						{
							label: '5.12 Plural: -or, -ar, -er, -n and no ending',
							slug: 'chapter-5/plural-or-ar-er-n-and-no-ending',
							badge: { text: 'G', variant: 'success' },
						},
						{
							label: '5.13 Irregular plurals',
							slug: 'chapter-5/irregular-plurals',
							badge: { text: 'G', variant: 'success' },
						},
						{
							label: '5.14 Det finns',
							slug: 'chapter-5/det-finns',
							badge: { text: 'G', variant: 'success' },
						},
					],
				},
			],
		}),
	],
});
