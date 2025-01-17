import { useRouter } from 'next/router';
import { SpotifyTokenResponse } from '../interface/spotify';

export default function useUrlParams(): SpotifyTokenResponse | null {
  const router = useRouter();
  try {
    return JSON.parse(decodeURIComponent(router.asPath.substring(2)));
  } catch (e) {
    return null;
  }
}
