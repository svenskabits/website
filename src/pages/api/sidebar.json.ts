import { sidebar } from '../../data/sidebar.mjs';

export function GET() {
	return new Response(JSON.stringify(sidebar, null, 2), {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
	});
}
