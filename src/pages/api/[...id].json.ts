import { getCollection } from 'astro:content';

export async function getStaticPaths() {
	const posts = await getCollection('docs');

	return posts.map((post) => ({
		params: { id: post.id },
		props: {
			post: {
				id: post.id,
				url: post.id === 'index' ? '/' : `/${post.id}/`,
				...post.data,
				body: post.body,
			},
		},
	}));
}

export function GET({ props }) {
	return new Response(JSON.stringify(props.post, null, 2), {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
	});
}
