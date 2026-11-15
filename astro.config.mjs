// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { sidebar } from './src/data/sidebar.mjs';

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
			sidebar,
		}),
	],
});
