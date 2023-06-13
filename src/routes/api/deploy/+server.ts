import type { RequestHandler } from '@sveltejs/kit';

export const POST = (async ({ request }) => {
	const content = await request.json();

	console.debug('POST /api/deploy', content);

	return new Response(null, {
		status: 200
	});
}) satisfies RequestHandler;
