import type { PageServerLoad } from './$types';
import { VITE_SPOTIFY_BASE_URL } from '$env/static/private';

export const load: PageServerLoad = async ({ fetch, cookies }) => {
  const accessToken = cookies.get('access_token');

  const res = await fetch(`${VITE_SPOTIFY_BASE_URL}/browse/new-releases`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  // console.log(await res.json());
};
