CREATE TABLE "accounts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"userId" uuid,
	"name" varchar(256),
	"balance" varchar(256),
	"type" text
);
--> statement-breakpoint
CREATE TABLE "profiles" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"userId" uuid,
	"name" varchar(256),
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "transactions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"userId" uuid,
	"accountId" uuid,
	"amount" varchar(256),
	"date" timestamp,
	"type" text,
	"is_recurring" boolean,
	"recurringFrequency" text,
	"category" text,
	"description" varchar(256)
);
--> statement-breakpoint
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_userId_profiles_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."profiles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "auth"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_userId_profiles_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."profiles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_accountId_accounts_id_fk" FOREIGN KEY ("accountId") REFERENCES "public"."accounts"("id") ON DELETE no action ON UPDATE no action;