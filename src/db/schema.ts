import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const plannings = sqliteTable("plannings", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  type: text().notNull(),
  musics: text().notNull(),
});

export const midia = sqliteTable("midia", {
  id: int().primaryKey({autoIncrement: true}),
  url: text().notNull(),
  name: text(),
})

export const member = sqliteTable("member", {
  id: int().primaryKey({autoIncrement: true}),
  name: text().notNull(),
  password_hash: text().notNull()
})