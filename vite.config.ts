import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps: {
		exclude: ['bcrypt']
	},
	build: {
		rollupOptions: {
		  external: ['mock-aws-s3', 'aws-sdk', 'nock'],
		},
	  },

});
