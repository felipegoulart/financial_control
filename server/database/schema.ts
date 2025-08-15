import {
  pgTable,
  uuid,
  pgSchema,
  varchar,
  timestamp,
  text,
  boolean,
} from "drizzle-orm/pg-core";

const authSchema = pgSchema("auth");

const users = authSchema.table("users", {
  id: uuid().primaryKey(),
});

export const profiles = pgTable("profiles", {
  id: uuid().defaultRandom().primaryKey(),
  userId: uuid().references(() => users.id, { onDelete: "cascade" }),
  name: varchar("name", { length: 256 }),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const accounts = pgTable("accounts", {
  id: uuid().defaultRandom().primaryKey(),
  userId: uuid().references(() => profiles.id, { onDelete: "cascade" }),
  name: varchar("name", { length: 256 }),
  balance: varchar("balance", { length: 256 }),
  type: text({
    enum: ["CHECKING", "SAVINGS", "CREDIT", "OTHER"],
  }),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const transactions = pgTable("transactions", {
  id: uuid().defaultRandom().primaryKey(),
  userId: uuid().references(() => profiles.id, { onDelete: "cascade" }),
  accountId: uuid().references(() => accounts.id),
  amount: varchar("amount", { length: 256 }),
  date: timestamp("date"),
  type: text({
    enum: ["INCOMING", "EXPENSE", "OTHER"],
  }),
  isRecurring: boolean("is_recurring"),
  recurringFrequency: text({
    enum: ["DAILY", "WEEKLY", "MONTHLY", "YEARLY"],
  }),
  category: text(),
  description: varchar("description", { length: 256 }),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
