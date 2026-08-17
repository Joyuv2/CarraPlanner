import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';


const url = process.env.TURSO_DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;

if (!url) throw new Error('TURSO_DATABASE_URL não definida');
if (!authToken) throw new Error('TURSO_AUTH_TOKEN não definida');

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'turso',
  dbCredentials: {
    url: url,
    authToken: authToken,
  },
});
