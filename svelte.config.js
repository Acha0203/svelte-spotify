import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: preprocess({
    scss: {
      prependData: '@use "src/styles/functions"; @use "@unsass/breakpoint";',
    },
  }),

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
    paths: {
      base: dev ? '' : '/svelte-spotify',
    },
    alias: {
      $components: 'src/lib/components',
      $assets: 'src/assets',
      $actions: 'src/lib/actions',
      $helpers: 'src/lib/helpers',
      $stores: 'src/lib/stores',
    },
    prerender: {
      pages: [
        '/',
        '/album',
        '/artist',
        '/playlist',
        'playlists',
        '/profile',
        '/search',
      ], // ここにプリレンダリングするルートを列挙します
    },
  },
};

export default config;
