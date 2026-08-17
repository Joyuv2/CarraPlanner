import 'dotenv/config';
import { drizzle } from "drizzle-orm/libsql"
import { createClient } from '@libsql/client';
import { member } from '@/db/schema';

const client = createClient({ 
    url: process.env.TURSO_DATABASE_URL!, 
    authToken: process.env.TURSO_AUTH_TOKEN!
});

export const db = drizzle({ client })

export async function memberAdd(name:string, password:string) {
    try {
        await db.insert(member).values({name: name, password_hash: password})
    } catch (error) {
        return {message: "error while trying to insert", error: error}
    }
}