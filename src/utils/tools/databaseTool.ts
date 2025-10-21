import { tool } from "ai";
import z from "zod";

export const databaseTool = tool({
  description:
    "Executes SQL queries on the connected database. Use this tool whenever you need to interact with the database, such as fetching, inserting, updating, or deleting records.",
  inputSchema: z.object({
    query: z.string().describe("The SQL query to be executed on the database."),
  }),
  execute: async ({ query }) => {
    console.log("🧠 Executing query:", query);
    return "✅ Query received successfully (mock result).";
  },
});
