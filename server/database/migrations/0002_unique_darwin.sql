ALTER TABLE "accounts" DROP CONSTRAINT "accounts_userId_profiles_id_fk";
--> statement-breakpoint
ALTER TABLE "profiles" DROP CONSTRAINT "profiles_userId_users_id_fk";
--> statement-breakpoint
ALTER TABLE "transactions" DROP CONSTRAINT "transactions_userId_profiles_id_fk";
--> statement-breakpoint
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_userId_profiles_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_userId_profiles_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;