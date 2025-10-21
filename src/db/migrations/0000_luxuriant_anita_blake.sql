CREATE TABLE "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"category" text NOT NULL,
	"price" double precision NOT NULL,
	"stock" integer DEFAULT 0 NOT NULL,
	"created_at" text DEFAULT '2025-10-21T06:55:54.100Z' NOT NULL
);
--> statement-breakpoint
CREATE TABLE "sales" (
	"id" serial PRIMARY KEY NOT NULL,
	"product_id" integer NOT NULL,
	"quantity" integer NOT NULL,
	"total_amount" double precision NOT NULL,
	"sale_date" text DEFAULT '2025-10-21T06:55:54.101Z',
	"customer_name" text NOT NULL,
	"region" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "sales" ADD CONSTRAINT "sales_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;