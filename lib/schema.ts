import {
    pgTable,
    serial,
    text,
    uniqueIndex,
    integer,
    boolean
  } from "drizzle-orm/pg-core";
  
  export const users = pgTable(
    "users",
    {
      id: serial("id").primaryKey(),
      username: text("username").notNull(),
      email: text("email").notNull(),
      image: text("image").notNull(),
      games: integer("games"),
      wins: integer("wins"),
      losses: integer("losses"),
      admin: boolean("admin"),
    },
    (users) => {
      return {
        uniqueIdx: uniqueIndex("unique_idx").on(users.id),
      };
    }
  );