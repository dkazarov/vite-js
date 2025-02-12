import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';

export default defineConfig({
	css: {
		postcss: {
			plugins: [autoprefixer],
		},
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: undefined,
			},
		},
	},
});
