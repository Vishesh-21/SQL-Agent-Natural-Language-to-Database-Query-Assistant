import { tool } from "ai";
import z from "zod";

export const schemaTool = tool({
  description:
    "Returns the current database schema structure — including table names, columns, and data types. Use this when you need to understand the database layout before writing queries.",
  inputSchema: z.object({}),
  execute: async ({}) => {
    const schema = `
CREATE TABLE "products" (
  "id" serial PRIMARY KEY NOT NULL,
  "name" text NOT NULL,
  "category" text NOT NULL,
  "price" double precision NOT NULL,
  "stock" integer DEFAULT 0 NOT NULL,
  "created_at" text DEFAULT (now()::text) NOT NULL
);

CREATE TABLE "sales" (
  "id" serial PRIMARY KEY NOT NULL,
  "product_id" integer NOT NULL REFERENCES products(id),
  "quantity" integer NOT NULL,
  "total_amount" double precision NOT NULL,
  "sale_date" text DEFAULT (now()::text),
  "customer_name" text NOT NULL,
  "region" text NOT NULL
);
`;
    return schema.trim();
  },
});
