import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const env = createEnv({
  server: {
    // POSTGRES_URL: z.string().url(),
    // ADMIN_EMAIL: z.string().email(),
    // GOOGLE_CLIENT_ID: z.string(),
    // GOOGLE_CLIENT_SECRET: z.string(),
     GITHUB_CLIENT_ID: z.string(),
     GITHUB_CLIENT_SECRET: z.string(),
    // SPOTIFY_CLIENT_ID: z.string(),
    // SPOTIFY_CLIENT_SECRET: z.string(),
    // SPOTIFY_REFRESH_TOKEN: z.string(),
     GITHUB_API_TOKEN: z.string(),
  },
  client: {
    NEXT_PUBLIC_WEBSITE_URL: z
      .string()
      .default('http://localhost:3000')
      .transform((url) => {
        if (url === 'http://localhost:3000') {
          return url;
        }

        return 'https://' + url;
      }),
  },
  runtimeEnv: {
    NEXT_PUBLIC_WEBSITE_URL: process.env.NEXT_PUBLIC_WEBSITE_URL,
    // ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    // GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    // GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
     GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
     GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    // SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    // SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    // SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN,
     GITHUB_API_TOKEN: process.env.GITHUB_API_TOKEN,
     
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});

export default env;
