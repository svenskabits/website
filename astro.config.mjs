// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Svenska Bits',
			customCss: ['./src/styles/sidebar-badges.css'],
			sidebar: [
				{
					label: 'Chapter 1: Hej allihopa!',
					badge: { text: 'A1', class: 'level-a1' },
					items: [
						{
							label: '1.1 Greetings and goodbyes',
							slug: 'chapter-1/greetings-and-goodbyes',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '1.2 Polite phrases',
							slug: 'chapter-1/polite-phrases',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '1.3 The Swedish alphabet',
							slug: 'chapter-1/the-swedish-alphabet',
							badge: { text: 'P', variant: 'note' },
						},
						{
							label: '1.4 Å, Ä, Ö',
							slug: 'chapter-1/a-a-o',
							badge: { text: 'P', variant: 'note' },
						},
						{
							label: '1.5 Spelling words aloud',
							slug: 'chapter-1/spelling-words-aloud',
							badge: { text: 'P', variant: 'note' },
						},
						{
							label: '1.6 Introducing yourself',
							slug: 'chapter-1/introducing-yourself',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '1.7 Subject pronouns',
							slug: 'chapter-1/subject-pronouns',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '1.8 Vara (present tense)',
							slug: 'chapter-1/vara-present-tense',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '1.9 Countries and nationalities',
							slug: 'chapter-1/countries-and-nationalities',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '1.10 Languages',
							slug: 'chapter-1/languages',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '1.11 Basic sentence order (SVO)',
							slug: 'chapter-1/basic-sentence-order-svo',
							badge: { text: 'G', variant: 'tip' },
						},
					],
				},
				{
					label: 'Chapter 2: Var bor du?',
					badge: { text: 'A1', class: 'level-a1' },
					items: [
						{
							label: '2.1 Numbers 0–20',
							slug: 'chapter-2/numbers-0-20',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '2.2 Numbers 21–100',
							slug: 'chapter-2/numbers-21-100',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '2.3 Phone numbers',
							slug: 'chapter-2/phone-numbers',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '2.4 Age',
							slug: 'chapter-2/age',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '2.5 Places in town',
							slug: 'chapter-2/places-in-town',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '2.6 Long and short vowels',
							slug: 'chapter-2/long-and-short-vowels',
							badge: { text: 'P', variant: 'note' },
						},
						{
							label: '2.7 En- and ett-words',
							slug: 'chapter-2/en-and-ett-words',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '2.8 Indefinite article (en/ett)',
							slug: 'chapter-2/indefinite-article-en-ett',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '2.9 The infinitive',
							slug: 'chapter-2/the-infinitive',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '2.10 Present tense',
							slug: 'chapter-2/present-tense',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '2.11 Verb groups 1–4',
							slug: 'chapter-2/verb-groups-1-4',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '2.12 Place: i and på',
							slug: 'chapter-2/place-i-and-pa',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '2.13 Wh-questions overview',
							slug: 'chapter-2/wh-questions-overview',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '2.14 Var',
							slug: 'chapter-2/var',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '2.15 Vad',
							slug: 'chapter-2/vad',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '2.16 Vem',
							slug: 'chapter-2/vem',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '2.17 Hur',
							slug: 'chapter-2/hur',
							badge: { text: 'G', variant: 'tip' },
						},
					],
				},
				{
					label: 'Chapter 3: Kan du prata svenska?',
					badge: { text: 'A1', class: 'level-a1' },
					items: [
						{
							label: '3.1 Classroom phrases',
							slug: 'chapter-3/classroom-phrases',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '3.2 Survival phrases (Jag förstår inte, Kan du upprepa?)',
							slug: 'chapter-3/survival-phrases-jag-forstar-inte-kan-du-upprepa',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '3.3 Learning Swedish',
							slug: 'chapter-3/learning-swedish',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '3.4 Everyday verbs',
							slug: 'chapter-3/everyday-verbs',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '3.5 Kan',
							slug: 'chapter-3/kan',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '3.6 Vill',
							slug: 'chapter-3/vill',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '3.7 Måste',
							slug: 'chapter-3/maste',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '3.8 Modal verbs and the infinitive without "att"',
							slug: 'chapter-3/modal-verbs-and-the-infinitive-without-att',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '3.9 Negation with inte',
							slug: 'chapter-3/negation-with-inte',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '3.10 Yes/No questions',
							slug: 'chapter-3/yes-no-questions',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '3.11 Answering with ja, nej, jo',
							slug: 'chapter-3/answering-with-ja-nej-jo',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '3.12 Soft and hard K and G',
							slug: 'chapter-3/soft-and-hard-k-and-g',
							badge: { text: 'P', variant: 'note' },
						},
					],
				},
				{
					label: 'Chapter 4: Vad gör du på fritiden?',
					badge: { text: 'A1', class: 'level-a1' },
					items: [
						{
							label: '4.1 Sports',
							slug: 'chapter-4/sports',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '4.2 Music',
							slug: 'chapter-4/music',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '4.3 Movies and TV',
							slug: 'chapter-4/movies-and-tv',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '4.4 Outdoor activities',
							slug: 'chapter-4/outdoor-activities',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '4.5 Göra',
							slug: 'chapter-4/gora',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '4.6 Gilla and tycka om',
							slug: 'chapter-4/gilla-and-tycka-om',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '4.7 Days of the week',
							slug: 'chapter-4/days-of-the-week',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '4.8 The clock',
							slug: 'chapter-4/the-clock',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '4.9 När',
							slug: 'chapter-4/nar',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '4.10 Frequency expressions',
							slug: 'chapter-4/frequency-expressions',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '4.11 Frequency adverbs',
							slug: 'chapter-4/frequency-adverbs',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '4.12 Inversion (V2 rule)',
							slug: 'chapter-4/inversion-v2-rule',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '4.13 Word stress',
							slug: 'chapter-4/word-stress',
							badge: { text: 'P', variant: 'note' },
						},
						{
							label: '4.14 The R sound',
							slug: 'chapter-4/the-r-sound',
							badge: { text: 'P', variant: 'note' },
						},
					],
				},
				{
					label: 'Chapter 5: Min familj är stor, men mitt hem är litet',
					badge: { text: 'A1', class: 'level-a1' },
					items: [
						{
							label: '5.1 Immediate family',
							slug: 'chapter-5/immediate-family',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '5.2 Extended family',
							slug: 'chapter-5/extended-family',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '5.3 Ha (to have)',
							slug: 'chapter-5/ha-to-have',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '5.4 Possessives: min, mitt, mina',
							slug: 'chapter-5/possessives-min-mitt-mina',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '5.5 Vems',
							slug: 'chapter-5/vems',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '5.6 The genitive -s',
							slug: 'chapter-5/the-genitive-s',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '5.7 Describing people',
							slug: 'chapter-5/describing-people',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '5.8 Adjective agreement',
							slug: 'chapter-5/adjective-agreement',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '5.9 Colors',
							slug: 'chapter-5/colors',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '5.10 Rooms',
							slug: 'chapter-5/rooms',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '5.11 Furniture',
							slug: 'chapter-5/furniture',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '5.12 Plural: -or, -ar, -er, -n and no ending',
							slug: 'chapter-5/plural-or-ar-er-n-and-no-ending',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '5.13 Irregular plurals',
							slug: 'chapter-5/irregular-plurals',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '5.14 Det finns',
							slug: 'chapter-5/det-finns',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '5.15 Vowel sounds Y and U',
							slug: 'chapter-5/vowel-sounds-y-and-u',
							badge: { text: 'P', variant: 'note' },
						},
					],
				},
				{
					label: 'Chapter 6: Hur mycket kostar den här kanelbullen?',
					badge: { text: 'A1', class: 'level-a1' },
					items: [
						{
							label: '6.1 Fruit',
							slug: 'chapter-6/fruit',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '6.2 Vegetables',
							slug: 'chapter-6/vegetables',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '6.3 Meat and fish',
							slug: 'chapter-6/meat-and-fish',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '6.4 Drinks',
							slug: 'chapter-6/drinks',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '6.5 Fika',
							slug: 'chapter-6/fika',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '6.6 Definite singular (-en, -et, -n, -t)',
							slug: 'chapter-6/definite-singular-en-et-n-t',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '6.7 Definite plural',
							slug: 'chapter-6/definite-plural',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '6.8 Quantifiers: många, mycket, lite',
							slug: 'chapter-6/quantifiers-manga-mycket-lite',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '6.9 Hur mycket / hur många',
							slug: 'chapter-6/hur-mycket-hur-manga',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '6.10 Types of shops',
							slug: 'chapter-6/types-of-shops',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '6.11 Clothes',
							slug: 'chapter-6/clothes',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '6.12 Sizes',
							slug: 'chapter-6/sizes',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '6.13 Money and prices',
							slug: 'chapter-6/money-and-prices',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '6.14 Demonstratives: den här, den där',
							slug: 'chapter-6/demonstratives-den-har-den-dar',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '6.15 Vilken, vilket, vilka',
							slug: 'chapter-6/vilken-vilket-vilka',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '6.16 Polite requests: skulle vilja',
							slug: 'chapter-6/polite-requests-skulle-vilja',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '6.17 The sj-sound',
							slug: 'chapter-6/the-sj-sound',
							badge: { text: 'P', variant: 'note' },
						},
						{
							label: '6.18 The tj-sound',
							slug: 'chapter-6/the-tj-sound',
							badge: { text: 'P', variant: 'note' },
						},
					],
				},
				{
					label: 'Chapter 7: Vad gjorde du igår?',
					badge: { text: 'A2', class: 'level-a2' },
					items: [
						{
							label: '7.1 Months',
							slug: 'chapter-7/months',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '7.2 Dates',
							slug: 'chapter-7/dates',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '7.3 Parts of the day',
							slug: 'chapter-7/parts-of-the-day',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '7.4 Time expressions (igår, förra veckan)',
							slug: 'chapter-7/time-expressions-igar-forra-veckan',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '7.5 Time: i, på, om, för… sedan',
							slug: 'chapter-7/time-i-pa-om-for-sedan',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '7.6 Morning routine',
							slug: 'chapter-7/morning-routine',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '7.7 Evening routine',
							slug: 'chapter-7/evening-routine',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '7.8 Verbs of daily activities',
							slug: 'chapter-7/verbs-of-daily-activities',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '7.9 Past tense (preteritum)',
							slug: 'chapter-7/past-tense-preteritum',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '7.10 Strong and irregular verbs',
							slug: 'chapter-7/strong-and-irregular-verbs',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '7.11 Vara, ha, göra in the past',
							slug: 'chapter-7/vara-ha-gora-in-the-past',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '7.12 Time before place',
							slug: 'chapter-7/time-before-place',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '7.13 Double consonants and spelling',
							slug: 'chapter-7/double-consonants-and-spelling',
							badge: { text: 'P', variant: 'note' },
						},
					],
				},
				{
					label: 'Chapter 8: Hur kommer jag dit? Gå rakt fram!',
					badge: { text: 'A2', class: 'level-a2' },
					items: [
						{
							label: '8.1 Places and buildings',
							slug: 'chapter-8/places-and-buildings',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '8.2 Ordinal numbers',
							slug: 'chapter-8/ordinal-numbers',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '8.3 Asking for directions',
							slug: 'chapter-8/asking-for-directions',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '8.4 Imperative',
							slug: 'chapter-8/imperative',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '8.5 Giving directions',
							slug: 'chapter-8/giving-directions',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '8.6 Direction: till, från, åt',
							slug: 'chapter-8/direction-till-fran-at',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '8.7 Position: under, över, framför, bakom, bredvid',
							slug: 'chapter-8/position-under-over-framfor-bakom-bredvid',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '8.8 Hit and dit',
							slug: 'chapter-8/hit-and-dit',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '8.9 At home and away: hemma, hem, borta, bort',
							slug: 'chapter-8/hemma-hem-borta-bort',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '8.10 Vart',
							slug: 'chapter-8/vart',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '8.11 Varifrån',
							slug: 'chapter-8/varifran',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '8.12 Signs and notices',
							slug: 'chapter-8/signs-and-notices',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '8.13 Public transport',
							slug: 'chapter-8/public-transport',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '8.14 Tickets',
							slug: 'chapter-8/tickets',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '8.15 Train',
							slug: 'chapter-8/train',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '8.16 Bus and metro',
							slug: 'chapter-8/bus-and-metro',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '8.17 Compound words',
							slug: 'chapter-8/compound-words',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '8.18 Stress in compound words',
							slug: 'chapter-8/stress-in-compound-words',
							badge: { text: 'P', variant: 'note' },
						},
					],
				},
				{
					label: 'Chapter 9: Du borde vila dig – du har ingen energi!',
					badge: { text: 'A2', class: 'level-a2' },
					items: [
						{
							label: '9.1 Body parts',
							slug: 'chapter-9/body-parts',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '9.2 The face',
							slug: 'chapter-9/the-face',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '9.3 Symptoms and illnesses',
							slug: 'chapter-9/symptoms-and-illnesses',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '9.4 Reflexive pronouns: mig, dig, sig',
							slug: 'chapter-9/reflexive-pronouns-mig-dig-sig',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '9.5 Reflexive verbs',
							slug: 'chapter-9/reflexive-verbs',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '9.6 Object pronouns',
							slug: 'chapter-9/object-pronouns',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '9.7 At the doctor',
							slug: 'chapter-9/at-the-doctor',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '9.8 Bör and borde',
							slug: 'chapter-9/bor-and-borde',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '9.9 Får',
							slug: 'chapter-9/far',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '9.10 At the pharmacy',
							slug: 'chapter-9/at-the-pharmacy',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '9.11 Healthy habits',
							slug: 'chapter-9/healthy-habits',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '9.12 Någon, något, några',
							slug: 'chapter-9/nagon-nagot-nagra',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '9.13 Ingen, inget, inga',
							slug: 'chapter-9/ingen-inget-inga',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '9.14 Varför',
							slug: 'chapter-9/varfor',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '9.15 Retroflex sounds (rt, rd, rl, rn, rs)',
							slug: 'chapter-9/retroflex-sounds-rt-rd-rl-rn-rs',
							badge: { text: 'P', variant: 'note' },
						},
					],
				},
				{
					label: 'Chapter 10: Vad ska du göra i helgen?',
					badge: { text: 'A2', class: 'level-a2' },
					items: [
						{
							label: '10.1 Making plans',
							slug: 'chapter-10/making-plans',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '10.2 Invitations',
							slug: 'chapter-10/invitations',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '10.3 Ska',
							slug: 'chapter-10/ska',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '10.4 Future: kommer att and the present tense',
							slug: 'chapter-10/future-kommer-att-and-present-tense',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '10.5 Och, men, eller',
							slug: 'chapter-10/och-men-eller',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '10.6 Så and för',
							slug: 'chapter-10/sa-and-for',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '10.7 Small talk',
							slug: 'chapter-10/small-talk',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '10.8 Att-clauses',
							slug: 'chapter-10/att-clauses',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '10.9 Om (if / whether)',
							slug: 'chapter-10/om-if-whether',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '10.10 Parties',
							slug: 'chapter-10/parties',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '10.11 Swedish holidays',
							slug: 'chapter-10/swedish-holidays',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '10.12 Infinitive phrases: för att',
							slug: 'chapter-10/infinitive-phrases-for-att',
							badge: { text: 'G', variant: 'tip' },
						},
					],
				},
			],
		}),
	],
});
