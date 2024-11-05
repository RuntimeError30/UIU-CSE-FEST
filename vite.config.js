import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	assetsInclude: ['**/*.lottie'],
	test: {
		include: ['src/**/*.{test, spec}.{js,ts}']
	},
	ssr: {
		noExternal: ['three']
	}
});
