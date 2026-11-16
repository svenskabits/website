import { getCollection } from 'astro:content';
import { sidebar } from '../../data/sidebar.mjs';

export async function GET() {
	const pages = await getCollection('docs');
	const estimatedMinutesBySlug = new Map(
		pages.map(({ id, data }) => [id, data.estimated_minutes]),
	);
	const sidebarWithEstimatedMinutes = sidebar.map((chapter) => ({
		...chapter,
		items: chapter.items.map((item) => ({
			...item,
			estimatedMinutes: estimatedMinutesBySlug.get(item.slug),
		})),
	}));

	return new Response(JSON.stringify(sidebarWithEstimatedMinutes, null, 2), {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
	});
}
