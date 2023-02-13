import {useQuery} from '@tanstack/react-query';
import getConfig from 'next/config';

const {publicRuntimeConfig} = getConfig();

const domain = publicRuntimeConfig.domain || 'localhost:3000';
const protocol = publicRuntimeConfig.protocol || 'http';
const landingUrl = `${protocol}://${domain}`;
const authUrl = `${landingUrl}/auth`;
const userUrl = `${authUrl}/user`;

interface UserInfo {
  userName: string;
  userEmail: string;
}

export function useUser() {
  const query = useQuery(
    ['user'],
    async () => {
      try {
        const res = await fetch(userUrl, {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          cache: 'no-cache',
          credentials: 'include',
        });
        return await res.json();
      } catch (err) {
        return undefined;
      }
    },
    {
      cacheTime: Infinity,
      staleTime: 30000,
    }
  );
  return query.data as UserInfo;
}
