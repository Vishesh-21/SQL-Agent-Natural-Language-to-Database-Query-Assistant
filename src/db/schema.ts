import {
  pgTable,
  serial,
  text,
  integer,
  doublePrecision,
} from "drizzle-orm/pg-core";

export const productTable = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(),
  price: doublePrecision("price").notNull(),
  stock: integer("stock").notNull().default(0),
  createdAt: text("created_at").notNull().default(new Date().toISOString()),
});

export const salesTable = pgTable("sales", {
  id: serial("id").primaryKey(),
  productId: integer("product_id")
    .notNull()
    .references(() => productTable.id),
  quantity: integer("quantity").notNull(),
  total_amount: doublePrecision("total_amount").notNull(),
  sale_date: text("sale_date").default(new Date().toISOString()),
  customer_name: text("customer_name").notNull(),
  region: text("region").notNull(),
});
