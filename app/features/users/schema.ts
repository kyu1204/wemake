import {
  jsonb,
  pgEnum,
  pgSchema,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const roles = pgEnum("roles", [
  "developer",
  "designer",
  "marketer",
  "founder",
  "product-manager",
]);

const users = pgSchema("auth").table("users", {
  id: uuid().primaryKey(),
});

export const profiles = pgTable("profiles", {
  profile_id: uuid()
    .primaryKey()
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  name: text().notNull(),
  username: text().notNull(),
  avatar: text(),
  headline: text(),
  bio: text(),
  role: roles().default("developer").notNull(),
  stats: jsonb().$type<{
    followers: number;
    following: number;
  }>(),
  views: jsonb(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});

export const follows = pgTable("follows", {
  follower_id: uuid()
    .references(() => profiles.profile_id, {
      onDelete: "cascade",
    })
    .notNull(),
  following_id: uuid()
    .references(() => profiles.profile_id, {
      onDelete: "cascade",
    })
    .notNull(),
  created_at: timestamp().notNull().defaultNow(),
});
