import { getCollection } from 'astro:content';
import { extractMdxSearchKeywords, tokenizeSearchText } from '../../lib/mdx-ast';

export async function GET() {
	const pages = (await getCollection('docs')).sort((left, right) =>
		left.id.localeCompare(right.id),
	);
	const termDocuments = new Map<string, number[]>();
	const documents = pages.map(({ id, data, body }, documentId) => {
		const metadata = [
			data.title,
			data.title_sv,
			data.description,
			...(data.tags ?? []),
		];
		const terms = new Set([
			...metadata.flatMap((value) => (value ? tokenizeSearchText(value) : [])),
			...extractMdxSearchKeywords(body ?? ''),
		]);

		for (const term of terms) {
			const documentIds = termDocuments.get(term) ?? [];
			documentIds.push(documentId);
			termDocuments.set(term, documentIds);
		}

		return {
			id,
			url: id === 'index' ? '/' : `/${id}/`,
			title: data.title,
			...(data.title_sv ? { title_sv: data.title_sv } : {}),
			...(data.description ? { description: data.description } : {}),
			...(data.type ? { type: data.type } : {}),
			...(data.level ? { level: data.level } : {}),
			...(data.estimated_minutes !== undefined
				? { estimated_minutes: data.estimated_minutes }
				: {}),
			tags: data.tags ?? [],
		};
	});

	const searchIndex = {
		version: 1,
		documents,
		index: Object.fromEntries(
			[...termDocuments.entries()].sort(([left], [right]) => left.localeCompare(right)),
		),
	};

	return new Response(JSON.stringify(searchIndex), {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Cache-Control': 'public, max-age=0, s-maxage=3600',
		},
	});
}
