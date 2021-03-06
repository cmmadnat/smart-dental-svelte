import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';
import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter({
			// default options are shown
			out: 'build',
			precompress: false,
			env: {
				host: 'HOST',
				port: 'PORT'
			}
		}),
		vite: {
			plugins: [esbuildCommonjs(['typeorm'])],
			optimizeDeps: {
				include: ['tui-image-editor']
			}
		}
	}
};

export default config;
