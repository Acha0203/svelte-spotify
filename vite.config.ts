import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  define: {
    'process.env.VITE_SPOTIFY_APP_CLIENT_ID': JSON.stringify(
      process.env.VITE_SPOTIFY_APP_CLIENT_ID
    ),
    'process.env.VITE_SPOTIFY_APP_CLIENT_SECRET': JSON.stringify(
      process.env.VITE_SPOTIFY_APP_CLIENT_SECRET
    ),
    'process.env.VITE_SPOTIFY_BASE_URL': JSON.stringify(
      process.env.VITE_SPOTIFY_BASE_URL
    ),
    'process.env.VITE_BASE_URL': JSON.stringify(process.env.VITE_BASE_URL),
  },
});
