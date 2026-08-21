"use server"

import { planningsGet } from "@/lib/db"

export default async function getPlanningsList() {
    return await planningsGet()
}