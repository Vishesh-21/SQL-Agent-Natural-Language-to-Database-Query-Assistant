import { db } from "./drizzle";
import { productTable, salesTable } from "./schema";

export async function seed() {
  console.log("🍀Seeding database...");

  // --- Product Data ---
  const products = [
    {
      name: "Apple iPhone 15",
      category: "Electronics",
      price: 999.99,
      stock: 15,
    },
    {
      name: "Samsung Galaxy S24",
      category: "Electronics",
      price: 899.99,
      stock: 25,
    },
    {
      name: "Sony WH-1000XM5 Headphones",
      category: "Electronics",
      price: 349.99,
      stock: 40,
    },
    {
      name: "Nike Air Max 270",
      category: "Footwear",
      price: 159.99,
      stock: 50,
    },
    {
      name: "Adidas Ultraboost 23",
      category: "Footwear",
      price: 179.99,
      stock: 35,
    },
    {
      name: "Dell XPS 13 Laptop",
      category: "Computers",
      price: 1299.99,
      stock: 10,
    },
    { name: "MacBook Air M3", category: "Computers", price: 1399.99, stock: 8 },
    {
      name: "Logitech MX Master 3S Mouse",
      category: "Accessories",
      price: 99.99,
      stock: 60,
    },
    {
      name: "HP Envy Printer 6055e",
      category: "Office Supplies",
      price: 199.99,
      stock: 22,
    },
    {
      name: "Apple Watch Series 10",
      category: "Wearables",
      price: 499.99,
      stock: 18,
    },
  ];

  await db.insert(productTable).values(products);
  console.log("✅ Products inserted!");

  // --- Sales Data ---
  const sales = [
    {
      productId: 1,
      quantity: 2,
      total_amount: 1999.98,
      customer_name: "Rohan Mehta",
      region: "Mumbai",
    },
    {
      productId: 2,
      quantity: 1,
      total_amount: 899.99,
      customer_name: "Sneha Kapoor",
      region: "Delhi",
    },
    {
      productId: 3,
      quantity: 3,
      total_amount: 1049.97,
      customer_name: "Amit Sharma",
      region: "Pune",
    },
    {
      productId: 4,
      quantity: 2,
      total_amount: 319.98,
      customer_name: "Kavita Nair",
      region: "Bangalore",
    },
    {
      productId: 5,
      quantity: 1,
      total_amount: 179.99,
      customer_name: "Rahul Verma",
      region: "Hyderabad",
    },
    {
      productId: 6,
      quantity: 1,
      total_amount: 1299.99,
      customer_name: "Priya Singh",
      region: "Chennai",
    },
    {
      productId: 7,
      quantity: 1,
      total_amount: 1399.99,
      customer_name: "Ankit Desai",
      region: "Kolkata",
    },
    {
      productId: 8,
      quantity: 4,
      total_amount: 399.96,
      customer_name: "Tanya Bhat",
      region: "Ahmedabad",
    },
    {
      productId: 9,
      quantity: 2,
      total_amount: 399.98,
      customer_name: "Suresh Iyer",
      region: "Jaipur",
    },
    {
      productId: 10,
      quantity: 1,
      total_amount: 499.99,
      customer_name: "Neha Patel",
      region: "Lucknow",
    },
  ];

  await db.insert(salesTable).values(sales);
  console.log("✅ Sales inserted!");
}

seed()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
