import { db } from "@/db/drizzle";
import { tool } from "ai";
import z from "zod";

export const databaseTool = tool({
  description:
    "Executes SQL queries on the connected database. Use this tool whenever you need to interact with the database, such as fetching, inserting, updating, or deleting records.",
  inputSchema: z.object({
    query: z.string().describe("The SQL query to be executed on the database."),
  }),
  execute: async ({ query }) => {
    const result = await db.execute(query);
    return JSON.stringify(result, null, 2);
  },
});
