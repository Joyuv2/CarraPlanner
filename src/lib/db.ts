import 'dotenv/config';
import { drizzle } from "drizzle-orm/libsql"
import { createClient } from '@libsql/client';
import { member, plannings } from '@/db/schema';
import { eq } from 'drizzle-orm';

const client = createClient({ 
    url: process.env.TURSO_DATABASE_URL!, 
    authToken: process.env.TURSO_AUTH_TOKEN!
});

export const db = drizzle({client})

export async function memberAdd(name:string, password:string) {
    try {
        await db.insert(member).values({name: name, password_hash: password})
    } catch (error) {
        return {message: "error while trying to insert", error: error}
    }
}

export async function memberCheck(name:string) {
    return await db.select({id: member.id, name: member.name, password_hash: member.password_hash}).from(member).where(eq(member.name, name))
}

export async function memeberUpdate(id: number, name: string) {
    try {
        await db.update(member).set({name: name}).where(eq(member.id, id))
    } catch (error) {
        return {message: "error while trying to alter data from database", error: error}
    }
}

export async function memerDelete(id: number) {
    try {
        await db.delete(member).where(eq(member.id, id))
    } catch (error) {
        return {message: "error while trying to erase data from database", error: error}
    }
}

export async function planningAdd(name:string, type:string, musics: string, date: string) {
    try {
        await db.insert(plannings).values({name: name, type: type, musics: musics, date: date})
    } catch (error) {
        return {message: "error while trying to insert", error: error}
    }
}

export async function planningCheck(id: number) {
    return await db.select({id: plannings.id, name: plannings.name, type: plannings.type, musics: plannings.musics, date: plannings.date}).from(plannings).where(eq(plannings.id, id))
}

export async function planningsGet() {
    return await db.select().from(plannings);
}