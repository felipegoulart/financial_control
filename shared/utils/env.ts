import z from "zod";

const envSchema = z.object({
  SUPABASE_URL: z.url(),
  SUPABASE_KEY: z.string(),
  DATABASE_URL: z.url(),
});

export default envSchema.parse(process.env);
