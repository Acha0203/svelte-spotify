import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';
import { VITE_BASE_URL } from '$env/static/private';

export const prerender = true;

export const load: LayoutLoad = ({ data, url }) => {
  const { user, userAllPlaylists } = data || {};
  if (user && url.pathname === '/login') {
    throw redirect(307, '/');
  }
  if (!user && url.pathname !== '/login') {
    throw redirect(307, `${VITE_BASE_URL}/login`);
  }

  return {
    user,
    userAllPlaylists,
  };
};
