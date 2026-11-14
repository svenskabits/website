// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.svenskabits.com',
	base: '/',
	integrations: [
		starlight({
			title: 'Svenska Bits',
			logo: { src: './src/assets/logo.svg', alt: '' },
			customCss: ['./src/styles/sidebar-badges.css'],
			components: {
				PageTitle: './src/components/SearchResultMetadata.astro',
			},
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						type: 'image/png',
						href: '/favicon/favicon-96x96.png',
						sizes: '96x96',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						type: 'image/svg+xml',
						href: '/favicon/favicon.svg',
					},
				},
				{
					tag: 'link',
					attrs: { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
				},
				{
					tag: 'link',
					attrs: {
						rel: 'apple-touch-icon',
						sizes: '180x180',
						href: '/favicon/apple-touch-icon.png',
					},
				},
				{
					tag: 'meta',
					attrs: { name: 'apple-mobile-web-app-title', content: 'Svenska Bits' },
				},
				{
					tag: 'link',
					attrs: { rel: 'manifest', href: '/favicon/site.webmanifest' },
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:type',
						content: 'website',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:site_name',
						content: 'Svenska Bits',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:title',
						content: 'Svenska Bits — Swedish, one concept at a time',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:description',
						content: 'Learn Swedish through small, focused lessons that explain one concept at a time.',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:image',
						content: 'https://www.svenskabits.com/logo.png',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:image:type',
						content: 'image/png',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:image:alt',
						content: 'Svenska Bits logo',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:image:width',
						content: '1200',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:image:height',
						content: '1200',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:card',
						content: 'summary_large_image',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:title',
						content: 'Svenska Bits — Swedish, one concept at a time',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:description',
						content: 'Learn Swedish through small, focused lessons that explain one concept at a time.',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:image',
						content: 'https://www.svenskabits.com/logo.png',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:image:alt',
						content: 'Svenska Bits logo',
					},
				},
				{
					tag: 'script',
					attrs: {
						async: true,
						src: 'https://www.googletagmanager.com/gtm.js?id=GTM-5TCZ6NP7',
					},
				},
				{
					tag: 'script',
					content: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`,
				},
				{
					tag: 'script',
					content: `(() => {
	const formatSearchBadges = (searchRoot) => {
		searchRoot
			.querySelectorAll('.pagefind-ui__result-tag[data-pagefind-ui-meta]')
			.forEach((badge) => {
				if (badge.dataset.badgeValue) return;
				const label = badge.dataset.pagefindUiMeta === 'level' ? 'Level' : 'Type';
				const match = badge.textContent.match(/^(?:Level|Type):\\s*(.+)$/);
				if (!match) return;
				const value = match[1].trim();
				badge.dataset.badgeValue = value;
				badge.setAttribute('aria-label', label + ': ' + value);
				badge.textContent = value;
			});
	};

	let observedSearchRoot;
	let searchObserver;
	let searchRootFinder;
	const findSearchRoot = () => {
		const searchRoot = document.querySelector('#starlight__search');
		if (!searchRoot || searchRoot === observedSearchRoot) return;
		searchRootFinder?.disconnect();
		searchObserver?.disconnect();
		observedSearchRoot = searchRoot;
		searchObserver = new MutationObserver(() => formatSearchBadges(searchRoot));
		searchObserver.observe(searchRoot, { childList: true, characterData: true, subtree: true });
		formatSearchBadges(searchRoot);
	};

	searchRootFinder = new MutationObserver(findSearchRoot);
	searchRootFinder.observe(document.documentElement, { childList: true, subtree: true });
	findSearchRoot();
})();`,
				},
			],
			sidebar: [
				{
					label: 'Chapter 1: Hej allihopa!',
					badge: { text: 'A1', class: 'level-a1' },
					collapsed: true,
					items: [
						{
							label: '1.1 Greetings and goodbyes',
							slug: 'vocabulary/greetings-and-goodbyes',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '1.2 Polite phrases',
							slug: 'vocabulary/polite-phrases',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '1.3 The Swedish alphabet',
							slug: 'pronunciation/the-swedish-alphabet',
							badge: { text: 'P', variant: 'note' },
						},
						{
							label: '1.4 Å, Ä, Ö',
							slug: 'pronunciation/a-a-o',
							badge: { text: 'P', variant: 'note' },
						},
						{
							label: '1.5 Introducing yourself',
							slug: 'vocabulary/introducing-yourself',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '1.6 Subject pronouns',
							slug: 'grammar/subject-pronouns',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '1.7 Vara (present tense)',
							slug: 'grammar/vara-present-tense',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '1.8 Countries and nationalities',
							slug: 'vocabulary/countries-and-nationalities',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '1.9 Languages',
							slug: 'vocabulary/languages',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '1.10 Basic sentence order (SVO)',
							slug: 'grammar/basic-sentence-order-svo',
							badge: { text: 'G', variant: 'tip' },
						},
					],
				},
				{
					label: 'Chapter 2: Var bor du?',
					badge: { text: 'A1', class: 'level-a1' },
					collapsed: true,
					items: [
						{
							label: '2.1 Numbers 0–20',
							slug: 'vocabulary/numbers-0-20',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '2.2 Numbers 21–100',
							slug: 'vocabulary/numbers-21-100',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '2.3 Phone numbers',
							slug: 'vocabulary/phone-numbers',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '2.4 Age',
							slug: 'vocabulary/age',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '2.5 Places in town',
							slug: 'vocabulary/places-in-town',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '2.6 Long and short vowels',
							slug: 'pronunciation/long-and-short-vowels',
							badge: { text: 'P', variant: 'note' },
						},
						{
							label: '2.7 En- and ett-words',
							slug: 'grammar/en-and-ett-words',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '2.8 Indefinite article (en/ett)',
							slug: 'grammar/indefinite-article-en-ett',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '2.9 The infinitive',
							slug: 'grammar/the-infinitive',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '2.10 Present tense',
							slug: 'grammar/present-tense',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '2.11 Verb groups 1–4',
							slug: 'grammar/verb-groups-1-4',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '2.12 Place: i and på',
							slug: 'grammar/place-i-and-pa',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '2.13 Wh-questions overview',
							slug: 'grammar/wh-questions-overview',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '2.14 Var',
							slug: 'grammar/var',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '2.15 Vad',
							slug: 'grammar/vad',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '2.16 Vem',
							slug: 'grammar/vem',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '2.17 Hur',
							slug: 'grammar/hur',
							badge: { text: 'G', variant: 'tip' },
						},
					],
				},
				{
					label: 'Chapter 3: Kan du prata svenska?',
					badge: { text: 'A1', class: 'level-a1' },
					collapsed: true,
					items: [
						{
							label: '3.1 Classroom phrases',
							slug: 'vocabulary/classroom-phrases',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '3.2 Survival phrases (Jag förstår inte, Kan du upprepa?)',
							slug: 'vocabulary/survival-phrases-jag-forstar-inte-kan-du-upprepa',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '3.3 Learning Swedish',
							slug: 'vocabulary/learning-swedish',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '3.4 Everyday verbs',
							slug: 'vocabulary/everyday-verbs',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '3.5 Kan',
							slug: 'grammar/kan',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '3.6 Vill',
							slug: 'grammar/vill',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '3.7 Måste',
							slug: 'grammar/maste',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '3.8 Modal verbs and the infinitive without "att"',
							slug: 'grammar/modal-verbs-and-the-infinitive-without-att',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '3.9 Negation with inte',
							slug: 'grammar/negation-with-inte',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '3.10 Yes/No questions',
							slug: 'grammar/yes-no-questions',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '3.11 Answering with ja, nej, jo',
							slug: 'grammar/answering-with-ja-nej-jo',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '3.12 Soft and hard K and G',
							slug: 'pronunciation/soft-and-hard-k-and-g',
							badge: { text: 'P', variant: 'note' },
						},
					],
				},
				{
					label: 'Chapter 4: Vad gör du på fritiden?',
					badge: { text: 'A1', class: 'level-a1' },
					collapsed: true,
					items: [
						{
							label: '4.1 Sports',
							slug: 'vocabulary/sports',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '4.2 Music',
							slug: 'vocabulary/music',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '4.3 Movies and TV',
							slug: 'vocabulary/movies-and-tv',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '4.4 Outdoor activities',
							slug: 'vocabulary/outdoor-activities',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '4.5 Göra',
							slug: 'grammar/gora',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '4.6 Gilla and tycka om',
							slug: 'grammar/gilla-and-tycka-om',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '4.7 Days of the week',
							slug: 'vocabulary/days-of-the-week',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '4.8 The clock',
							slug: 'vocabulary/the-clock',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '4.9 När',
							slug: 'grammar/nar',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '4.10 Frequency expressions',
							slug: 'vocabulary/frequency-expressions',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '4.11 Frequency adverbs',
							slug: 'grammar/frequency-adverbs',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '4.12 Inversion (V2 rule)',
							slug: 'grammar/inversion-v2-rule',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '4.13 Word stress',
							slug: 'pronunciation/word-stress',
							badge: { text: 'P', variant: 'note' },
						},
						{
							label: '4.14 The R sound',
							slug: 'pronunciation/the-r-sound',
							badge: { text: 'P', variant: 'note' },
						},
					],
				},
				{
					label: 'Chapter 5: Min familj är stor, men mitt hem är litet',
					badge: { text: 'A1', class: 'level-a1' },
					collapsed: true,
					items: [
						{
							label: '5.1 Immediate family',
							slug: 'vocabulary/immediate-family',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '5.2 Extended family',
							slug: 'vocabulary/extended-family',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '5.3 Ha (to have)',
							slug: 'grammar/ha-to-have',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '5.4 Possessives: min, mitt, mina',
							slug: 'grammar/possessives-min-mitt-mina',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '5.5 Vems',
							slug: 'grammar/vems',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '5.6 The genitive -s',
							slug: 'grammar/the-genitive-s',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '5.7 Describing people',
							slug: 'vocabulary/describing-people',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '5.8 Adjective agreement',
							slug: 'grammar/adjective-agreement',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '5.9 Adverbs from adjectives',
							slug: 'grammar/adverbs-from-adjectives',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '5.10 Useful adjectives',
							slug: 'vocabulary/useful-adjectives',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '5.11 Colors',
							slug: 'vocabulary/colors',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '5.12 Rooms',
							slug: 'vocabulary/rooms',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '5.13 Furniture',
							slug: 'vocabulary/furniture',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '5.14 Plural: -or, -ar, -er, -n and no ending',
							slug: 'grammar/plural-or-ar-er-n-and-no-ending',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '5.15 Irregular plurals',
							slug: 'grammar/irregular-plurals',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '5.16 Det finns',
							slug: 'grammar/det-finns',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '5.17 Vowel sounds Y and U',
							slug: 'pronunciation/vowel-sounds-y-and-u',
							badge: { text: 'P', variant: 'note' },
						},
					],
				},
				{
					label: 'Chapter 6: Hur mycket kostar den här kanelbullen?',
					badge: { text: 'A1', class: 'level-a1' },
					collapsed: true,
					items: [
						{
							label: '6.1 Fruit',
							slug: 'vocabulary/fruit',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '6.2 Vegetables',
							slug: 'vocabulary/vegetables',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '6.3 Meat and fish',
							slug: 'vocabulary/meat-and-fish',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '6.4 Drinks',
							slug: 'vocabulary/drinks',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '6.5 Fika',
							slug: 'vocabulary/fika',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '6.6 Definite singular (-en, -et, -n, -t)',
							slug: 'grammar/definite-singular-en-et-n-t',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '6.7 Definite plural',
							slug: 'grammar/definite-plural',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '6.8 Quantifiers: många, mycket, lite',
							slug: 'grammar/quantifiers-manga-mycket-lite',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '6.9 Hur mycket / hur många',
							slug: 'grammar/hur-mycket-hur-manga',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '6.10 Types of shops',
							slug: 'vocabulary/types-of-shops',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '6.11 Clothes',
							slug: 'vocabulary/clothes',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '6.12 Sizes',
							slug: 'vocabulary/sizes',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '6.13 Money and prices',
							slug: 'vocabulary/money-and-prices',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '6.14 Demonstratives: den här, den där',
							slug: 'grammar/demonstratives-den-har-den-dar',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '6.15 Vilken, vilket, vilka',
							slug: 'grammar/vilken-vilket-vilka',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '6.16 Polite requests: skulle vilja',
							slug: 'grammar/polite-requests-skulle-vilja',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '6.17 The sj-sound',
							slug: 'pronunciation/the-sj-sound',
							badge: { text: 'P', variant: 'note' },
						},
						{
							label: '6.18 The tj-sound',
							slug: 'pronunciation/the-tj-sound',
							badge: { text: 'P', variant: 'note' },
						},
					],
				},
				{
					label: 'Chapter 7: Vad gjorde du igår?',
					badge: { text: 'A2', class: 'level-a2' },
					collapsed: true,
					items: [
						{
							label: '7.1 Months',
							slug: 'vocabulary/months',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '7.2 Dates',
							slug: 'vocabulary/dates',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '7.3 Parts of the day',
							slug: 'vocabulary/parts-of-the-day',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '7.4 Time expressions (igår, förra veckan)',
							slug: 'vocabulary/time-expressions-igar-forra-veckan',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '7.5 Time: i, på, om, för… sedan',
							slug: 'grammar/time-i-pa-om-for-sedan',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '7.6 Morning routine',
							slug: 'vocabulary/morning-routine',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '7.7 Evening routine',
							slug: 'vocabulary/evening-routine',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '7.8 Verbs of daily activities',
							slug: 'vocabulary/verbs-of-daily-activities',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '7.9 Past tense (preteritum)',
							slug: 'grammar/past-tense-preteritum',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '7.10 Strong and irregular verbs',
							slug: 'grammar/strong-and-irregular-verbs',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '7.11 Vara, ha, göra in the past',
							slug: 'grammar/vara-ha-gora-in-the-past',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '7.12 Time before place',
							slug: 'grammar/time-before-place',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '7.13 Double consonants and spelling',
							slug: 'pronunciation/double-consonants-and-spelling',
							badge: { text: 'P', variant: 'note' },
						},
					],
				},
				{
					label: 'Chapter 8: Hur kommer jag dit? Gå rakt fram!',
					badge: { text: 'A2', class: 'level-a2' },
					collapsed: true,
					items: [
						{
							label: '8.1 Places and buildings',
							slug: 'vocabulary/places-and-buildings',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '8.2 Ordinal numbers',
							slug: 'vocabulary/ordinal-numbers',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '8.3 Asking for directions',
							slug: 'vocabulary/asking-for-directions',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '8.4 Imperative',
							slug: 'grammar/imperative',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '8.5 Giving directions',
							slug: 'vocabulary/giving-directions',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '8.6 Direction: till, från, åt',
							slug: 'grammar/direction-till-fran-at',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '8.7 Position: under, över, framför, bakom, bredvid',
							slug: 'grammar/position-under-over-framfor-bakom-bredvid',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '8.8 Hit and dit',
							slug: 'grammar/hit-and-dit',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '8.9 At home and away: hemma, hem, borta, bort',
							slug: 'grammar/hemma-hem-borta-bort',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '8.10 Vart',
							slug: 'grammar/vart',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '8.11 Varifrån',
							slug: 'grammar/varifran',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '8.12 Signs and notices',
							slug: 'vocabulary/signs-and-notices',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '8.13 Public transport',
							slug: 'vocabulary/public-transport',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '8.14 Tickets',
							slug: 'vocabulary/tickets',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '8.15 Train',
							slug: 'vocabulary/train',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '8.16 Bus and metro',
							slug: 'vocabulary/bus-and-metro',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '8.17 Compound words',
							slug: 'grammar/compound-words',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '8.18 Stress in compound words',
							slug: 'pronunciation/stress-in-compound-words',
							badge: { text: 'P', variant: 'note' },
						},
					],
				},
				{
					label: 'Chapter 9: Du borde vila dig – du har ingen energi!',
					badge: { text: 'A2', class: 'level-a2' },
					collapsed: true,
					items: [
						{
							label: '9.1 Body parts',
							slug: 'vocabulary/body-parts',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '9.2 The face',
							slug: 'vocabulary/the-face',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '9.3 Symptoms and illnesses',
							slug: 'vocabulary/symptoms-and-illnesses',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '9.4 Reflexive pronouns: mig, dig, sig',
							slug: 'grammar/reflexive-pronouns-mig-dig-sig',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '9.5 Reflexive verbs',
							slug: 'grammar/reflexive-verbs',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '9.6 Object pronouns',
							slug: 'grammar/object-pronouns',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '9.7 At the doctor',
							slug: 'vocabulary/at-the-doctor',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '9.8 Bör and borde',
							slug: 'grammar/bor-and-borde',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '9.9 Får',
							slug: 'grammar/far',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '9.10 At the pharmacy',
							slug: 'vocabulary/at-the-pharmacy',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '9.11 Healthy habits',
							slug: 'vocabulary/healthy-habits',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '9.12 Någon, något, några',
							slug: 'grammar/nagon-nagot-nagra',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '9.13 Ingen, inget, inga',
							slug: 'grammar/ingen-inget-inga',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '9.14 Varför',
							slug: 'grammar/varfor',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '9.15 Retroflex sounds (rt, rd, rl, rn, rs)',
							slug: 'pronunciation/retroflex-sounds-rt-rd-rl-rn-rs',
							badge: { text: 'P', variant: 'note' },
						},
					],
				},
				{
					label: 'Chapter 10: Vad ska du göra i helgen?',
					badge: { text: 'A2', class: 'level-a2' },
					collapsed: true,
					items: [
						{
							label: '10.1 Making plans',
							slug: 'vocabulary/making-plans',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '10.2 Invitations',
							slug: 'vocabulary/invitations',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '10.3 Ska',
							slug: 'grammar/ska',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '10.4 Future: kommer att and the present tense',
							slug: 'grammar/future-kommer-att-and-present-tense',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '10.5 Och, men, eller',
							slug: 'grammar/och-men-eller',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '10.6 Så and för',
							slug: 'grammar/sa-and-for',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '10.7 Small talk',
							slug: 'vocabulary/small-talk',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '10.8 Att-clauses',
							slug: 'grammar/att-clauses',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '10.9 Om (if / whether)',
							slug: 'grammar/om-if-whether',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '10.10 Parties',
							slug: 'vocabulary/parties',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '10.11 Swedish holidays',
							slug: 'vocabulary/swedish-holidays',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '10.12 Infinitive phrases: för att',
							slug: 'grammar/infinitive-phrases-for-att',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '10.13 Sentence intonation',
							slug: 'pronunciation/sentence-intonation',
							badge: { text: 'P', variant: 'note' },
						},
					],
				},
				{
					label: 'Chapter 11: Det har varit varmare i år än förra året!',
					badge: { text: 'A2', class: 'level-a2' },
					collapsed: true,
					items: [
						{
							label: '11.1 Weather',
							slug: 'vocabulary/weather',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '11.2 Temperature',
							slug: 'vocabulary/temperature',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '11.3 Seasons',
							slug: 'vocabulary/seasons',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '11.4 Weather and "det" (det regnar)',
							slug: 'grammar/weather-and-det-det-regnar',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '11.5 Booking a trip',
							slug: 'vocabulary/booking-a-trip',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '11.6 Hotel',
							slug: 'vocabulary/hotel',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '11.7 Luggage',
							slug: 'vocabulary/luggage',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '11.8 Perfect tense (har + supinum)',
							slug: 'grammar/perfect-tense-har-supinum',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '11.9 Preteritum vs. perfect',
							slug: 'grammar/preteritum-vs-perfect',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '11.10 Sightseeing',
							slug: 'vocabulary/sightseeing',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '11.11 Travel problems',
							slug: 'vocabulary/travel-problems',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '11.12 Comparative and superlative',
							slug: 'grammar/comparative-and-superlative',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '11.13 Irregular comparison (bra, bättre, bäst)',
							slug: 'grammar/irregular-comparison-bra-battre-bast',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '11.14 NG and NK',
							slug: 'pronunciation/ng-and-nk',
							badge: { text: 'P', variant: 'note' },
						},
						{
							label: '11.15 Silent letters (hj, lj, gj, dj)',
							slug: 'pronunciation/silent-letters-hj-lj-gj-dj',
							badge: { text: 'P', variant: 'note' },
						},
					],
				},
				{
					label: 'Chapter 12: Jag letar efter ett jobb som jag trivs med',
					badge: { text: 'B1', class: 'level-b1' },
					collapsed: true,
					items: [
						{
							label: '12.1 Professions',
							slug: 'vocabulary/professions',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '12.2 Workplace',
							slug: 'vocabulary/workplace',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '12.3 Colleagues',
							slug: 'vocabulary/colleagues',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '12.4 Double definiteness (den stora bilen)',
							slug: 'grammar/double-definiteness-den-stora-bilen',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '12.5 Job search',
							slug: 'vocabulary/job-search',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '12.6 Job interview',
							slug: 'vocabulary/job-interview',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '12.7 Verb + preposition',
							slug: 'grammar/verb-preposition',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '12.8 Main clause vs. subordinate clause',
							slug: 'grammar/main-clause-vs-subordinate-clause',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '12.9 Subordinate clause with "inte"',
							slug: 'grammar/subordinate-clause-with-inte',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '12.10 Relative clauses with "som"',
							slug: 'grammar/relative-clauses-with-som',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '12.11 Contracts and salary',
							slug: 'vocabulary/contracts-and-salary',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '12.12 Meetings',
							slug: 'vocabulary/meetings',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '12.13 Work emails',
							slug: 'vocabulary/work-emails',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '12.14 Sentence stress and rhythm',
							slug: 'pronunciation/sentence-stress-and-rhythm',
							badge: { text: 'P', variant: 'note' },
						},
					],
				},
				{
					label: 'Chapter 13: Vet du hur ett BankID beställs?',
					badge: { text: 'B1', class: 'level-b1' },
					collapsed: true,
					items: [
						{
							label: '13.1 Personnummer and BankID',
							slug: 'vocabulary/personnummer-and-bankid',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '13.2 Authorities (Skatteverket, Migrationsverket)',
							slug: 'vocabulary/authorities-skatteverket-migrationsverket',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '13.3 Banking',
							slug: 'vocabulary/banking',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '13.4 Insurance',
							slug: 'vocabulary/insurance',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '13.5 Formal and informal language',
							slug: 'grammar/formal-and-informal-language',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '13.6 Post and parcels',
							slug: 'vocabulary/post-and-parcels',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '13.7 Healthcare: vårdcentral and 1177',
							slug: 'vocabulary/healthcare-vardcentral-and-1177',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '13.8 Passive voice with -s',
							slug: 'grammar/passive-voice-with-s',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '13.9 Passive voice with bli',
							slug: 'grammar/passive-voice-with-bli',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '13.10 S-verbs',
							slug: 'grammar/s-verbs',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '13.11 Indirect questions',
							slug: 'grammar/indirect-questions',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '13.12 Recycling and everyday rules',
							slug: 'vocabulary/recycling-and-everyday-rules',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '13.13 Pitch accent (tonaccent)',
							slug: 'pronunciation/pitch-accent-tonaccent',
							badge: { text: 'P', variant: 'note' },
						},
						{
							label: '13.14 Accent 1 and accent 2 in practice',
							slug: 'pronunciation/accent-1-and-accent-2-in-practice',
							badge: { text: 'P', variant: 'note' },
						},
					],
				},
				{
					label: 'Chapter 14: Vad skulle du göra om du hade mer tid?',
					badge: { text: 'B1', class: 'level-b1' },
					collapsed: true,
					items: [
						{
							label: '14.1 Basic emotions',
							slug: 'vocabulary/basic-emotions',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '14.2 Giving opinions',
							slug: 'vocabulary/giving-opinions',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '14.3 Tycka, tro, tänka',
							slug: 'grammar/tycka-tro-tanka',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '14.4 Agreeing and disagreeing',
							slug: 'vocabulary/agreeing-and-disagreeing',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '14.5 Comparisons: lika… som, mer än',
							slug: 'grammar/comparisons-lika-som-mer-an',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '14.6 Eftersom, för att, därför att',
							slug: 'grammar/eftersom-for-att-darfor-att',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '14.7 Fast, trots att, även om',
							slug: 'grammar/fast-trots-att-aven-om',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '14.8 Complaining',
							slug: 'vocabulary/complaining',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '14.9 Apologizing and forgiving',
							slug: 'vocabulary/apologizing-and-forgiving',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '14.10 Compliments',
							slug: 'vocabulary/compliments',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '14.11 Conditional: skulle',
							slug: 'grammar/conditional-skulle',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '14.12 Conditional sentences',
							slug: 'grammar/conditional-sentences',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '14.13 Common reductions (jag → ja, det → de)',
							slug: 'pronunciation/common-reductions-jag-ja-det-de',
							badge: { text: 'P', variant: 'note' },
						},
					],
				},
				{
					label: 'Chapter 15: Innan jag flyttade hit hade jag aldrig sett snö',
					badge: { text: 'B1', class: 'level-b1' },
					collapsed: true,
					items: [
						{
							label: '15.1 Life stages',
							slug: 'vocabulary/life-stages',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '15.2 Childhood and memories',
							slug: 'vocabulary/childhood-and-memories',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '15.3 Pluperfect (hade + supinum)',
							slug: 'grammar/pluperfect-hade-supinum',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '15.4 Word order with perfect tense',
							slug: 'grammar/word-order-with-perfect-tense',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '15.5 Brukar and brukade',
							slug: 'grammar/brukar-and-brukade',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '15.6 Narrative expressions',
							slug: 'vocabulary/narrative-expressions',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '15.7 Innan and efter att',
							slug: 'grammar/innan-and-efter-att',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '15.8 Medan and tills',
							slug: 'grammar/medan-and-tills',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '15.9 Pseudo-coordination (sitter och läser)',
							slug: 'grammar/pseudo-coordination-sitter-och-laser',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '15.10 Swedish history basics',
							slug: 'vocabulary/swedish-history-basics',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '15.11 Connected speech',
							slug: 'pronunciation/connected-speech',
							badge: { text: 'P', variant: 'note' },
						},
					],
				},
				{
					label: 'Chapter 16: Hon sa att nyheten var chockerande, eller hur?',
					badge: { text: 'B1', class: 'level-b1' },
					collapsed: true,
					items: [
						{
							label: '16.1 Phones',
							slug: 'vocabulary/phones',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '16.2 Computers',
							slug: 'vocabulary/computers',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '16.3 The internet',
							slug: 'vocabulary/the-internet',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '16.4 Social media',
							slug: 'vocabulary/social-media',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '16.5 Apps',
							slug: 'vocabulary/apps',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '16.6 Texting and abbreviations',
							slug: 'vocabulary/texting-and-abbreviations',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '16.7 Media and news',
							slug: 'vocabulary/media-and-news',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '16.8 Reported speech',
							slug: 'grammar/reported-speech',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '16.9 Present participles',
							slug: 'grammar/present-participles',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '16.10 Past participles',
							slug: 'grammar/past-participles',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '16.11 Participles as adjectives',
							slug: 'grammar/participles-as-adjectives',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '16.12 Tag questions (eller hur?, inte sant?)',
							slug: 'grammar/tag-questions-eller-hur-inte-sant',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '16.13 Fast speech and contractions',
							slug: 'pronunciation/fast-speech-and-contractions',
							badge: { text: 'P', variant: 'note' },
						},
					],
				},
				{
					label: 'Chapter 17: Både de rika och de fattiga har rätt till vård',
					badge: { text: 'B2', class: 'level-b2' },
					collapsed: true,
					items: [
						{
							label: '17.1 Swedish traditions',
							slug: 'vocabulary/swedish-traditions',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '17.2 Geography of Sweden',
							slug: 'vocabulary/geography-of-sweden',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '17.3 Politics',
							slug: 'vocabulary/politics',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '17.4 Economy',
							slug: 'vocabulary/economy',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '17.5 Adjectives used as nouns',
							slug: 'grammar/adjectives-used-as-nouns',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '17.6 Religion',
							slug: 'vocabulary/religion',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '17.7 Immigration and integration',
							slug: 'vocabulary/immigration-and-integration',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '17.8 Relative pronoun: vars',
							slug: 'grammar/relative-pronoun-vars',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '17.9 Både… och / antingen… eller',
							slug: 'grammar/bade-och-antingen-eller',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '17.10 Varken… eller',
							slug: 'grammar/varken-eller',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '17.11 Arts and literature',
							slug: 'vocabulary/arts-and-literature',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '17.12 Fixed subjunctive expressions',
							slug: 'grammar/fixed-subjunctive-expressions',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '17.13 Regional accents',
							slug: 'pronunciation/regional-accents',
							badge: { text: 'P', variant: 'note' },
						},
					],
				},
				{
					label: 'Chapter 18: Skogen måste skyddas så att djuren kan överleva',
					badge: { text: 'B2', class: 'level-b2' },
					collapsed: true,
					items: [
						{
							label: '18.1 Landscape',
							slug: 'vocabulary/landscape',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '18.2 Animals',
							slug: 'vocabulary/animals',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '18.3 Plants and trees',
							slug: 'vocabulary/plants-and-trees',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '18.4 Environment',
							slug: 'vocabulary/environment',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '18.5 Climate and sustainability',
							slug: 'vocabulary/climate-and-sustainability',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '18.6 Intensifiers',
							slug: 'vocabulary/intensifiers',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '18.7 Cause and consequence',
							slug: 'grammar/cause-and-consequence',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '18.8 Så att',
							slug: 'grammar/sa-att',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '18.9 Utan att and istället för att',
							slug: 'grammar/utan-att-and-istallet-for-att',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '18.10 Passive voice: advanced uses',
							slug: 'grammar/passive-voice-advanced-uses',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '18.11 Minimal pairs: vowels',
							slug: 'pronunciation/minimal-pairs-vowels',
							badge: { text: 'P', variant: 'note' },
						},
						{
							label: '18.12 Minimal pairs: consonants',
							slug: 'pronunciation/minimal-pairs-consonants',
							badge: { text: 'P', variant: 'note' },
						},
					],
				},
				{
					label: 'Chapter 19: Det är ju fikan som är bäst, faktiskt!',
					badge: { text: 'B2', class: 'level-b2' },
					collapsed: true,
					items: [
						{
							label: '19.1 Spoken Swedish vs. written Swedish',
							slug: 'vocabulary/spoken-swedish-vs-written-swedish',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '19.2 Fillers and discourse markers',
							slug: 'vocabulary/fillers-and-discourse-markers',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '19.3 Modal particles: ju, väl, då, alltså',
							slug: 'grammar/modal-particles-ju-val-da-alltsa',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '19.4 Sentence adverbs: nog, kanske, faktiskt',
							slug: 'grammar/sentence-adverbs-nog-kanske-faktiskt',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '19.5 Common idioms',
							slug: 'vocabulary/common-idioms',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '19.6 Proverbs',
							slug: 'vocabulary/proverbs',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '19.7 Slang',
							slug: 'vocabulary/slang',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '19.8 Fronting for emphasis',
							slug: 'grammar/fronting-for-emphasis',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '19.9 Cleft sentences (det är… som)',
							slug: 'grammar/cleft-sentences-det-ar-som',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '19.10 Natural rhythm and intonation',
							slug: 'pronunciation/natural-rhythm-and-intonation',
							badge: { text: 'P', variant: 'note' },
						},
					],
				},
				{
					label: 'Chapter 20: Jag håller på att bli flytande i svenska!',
					badge: { text: 'B2', class: 'level-b2' },
					collapsed: true,
					items: [
						{
							label: '20.1 Collocations',
							slug: 'vocabulary/collocations',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '20.2 Word families',
							slug: 'vocabulary/word-families',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '20.3 Prefixes and suffixes',
							slug: 'vocabulary/prefixes-and-suffixes',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '20.4 Synonyms',
							slug: 'vocabulary/synonyms',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '20.5 False friends',
							slug: 'vocabulary/false-friends',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '20.6 Linking words',
							slug: 'vocabulary/linking-words',
							badge: { text: 'V', variant: 'caution' },
						},
						{
							label: '20.7 Hålla på att',
							slug: 'grammar/halla-pa-att',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '20.8 Review: nouns, articles and adjectives',
							slug: 'grammar/review-nouns-articles-and-adjectives',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '20.9 Review: verb tenses',
							slug: 'grammar/review-verb-tenses',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '20.10 Review: word order',
							slug: 'grammar/review-word-order',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '20.11 Review: clauses and conjunctions',
							slug: 'grammar/review-clauses-and-conjunctions',
							badge: { text: 'G', variant: 'tip' },
						},
						{
							label: '20.12 Tongue twisters',
							slug: 'pronunciation/tongue-twisters',
							badge: { text: 'P', variant: 'note' },
						},
					],
				},
			],
		}),
	],
});
