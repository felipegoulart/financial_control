import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import env from "#shared/utils/env";

import * as schema from "../database/schema";

const connectionString = env.DATABASE_URL;
const client = postgres(connectionString, { prepare: false });

export function useDrizzle() {
  return drizzle(client, { schema });
}

export const tables = schema;

export type Profiles = typeof schema.profiles.$inferSelect;
export type Accounts = typeof schema.accounts.$inferSelect;
export type Transactions = typeof schema.transactions.$inferSelect;

export { sql, eq, and, or } from "drizzle-orm";
