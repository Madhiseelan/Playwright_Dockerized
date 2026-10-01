import * as dotenv from 'dotenv';
dotenv.config();

// All environment-specific values live here so the same image runs anywhere.
export const env = {
  baseUrl: process.env.BASE_URL ?? 'https://www.practiceqaautomation.com',
  headless: (process.env.HEADLESS ?? 'true') !== 'false',
  users: {
    standard: {
      username: process.env.STANDARD_USER ?? 'demo_user',
      password: process.env.USER_PASSWORD ?? 'Demo@123',
    },
  },
};
