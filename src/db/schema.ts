import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const plannings = sqliteTable("plannings", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  type: text().notNull(),
  musics: text(),
});

export const midia = sqliteTable("midia", {
  id: int().primaryKey({autoIncrement: true}),
  url: text().notNull(),
  name: text(),
})