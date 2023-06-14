import type { RequestHandler } from '@sveltejs/kit';

const WORKFLOW_NAME = 'Build and Deploy Docker Image';

export const POST = (async ({ request }: { request: Request }) => {
	const content = (await request.json()) as WorkflowPost;

	if (content.workflow_run.name !== WORKFLOW_NAME) {
		console.debug('Ignoring workflow run', content.workflow_run.name);
		return new Response(null, {
			status: 200
		});
	}

	if (content.action !== 'completed') {
		console.debug('Ignoring workflow run', content.action);

		return new Response(null, {
			status: 200
		});
	}

	console.debug('Deploying new version... somehow');
	// TODO: Figure out how to deploy new version
	//   Since we're running in a Docker container
	//   we gotta somehow let the host system know?

	return new Response(null, {
		status: 200
	});
}) satisfies RequestHandler;

interface WorkflowPost {
	action: string;
	workflow_run: {
		name: string;
		status: string;
	};
}
