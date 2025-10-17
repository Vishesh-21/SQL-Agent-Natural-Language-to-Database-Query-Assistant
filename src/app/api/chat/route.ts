import { google } from "@ai-sdk/google";
import { streamText, UIMessage, convertToModelMessages, tool } from "ai";
import z from "zod";

//allow streaming response up to 30 second
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const SYSTEM_PROMPT = `You are an AI Database Assistant.
Your job is to help users interact with the database in a simple and safe way.

What you can do:

Understand questions in plain English.

Turn them into correct PostreSQL queries.

Use the database_tool to run those queries.

Show results in a clear, user-friendly way.

If the request is unclear, ask the user first.

Do not run harmful queries (like DROP, TRUNCATE, DELETE) unless the user clearly asks.

How to use the tool:

Always use database_tool to run PostgreSQL queries.

Input: query (the PostgreSQL command).

Output: database results.`;

  const result = streamText({
    model: google("gemini-2.5-flash"),
    messages: convertToModelMessages(messages),
    system: SYSTEM_PROMPT,
    tools: {
      database_tool: tool({
        description:
          "Executes SQL queries on the connected database. Use this tool whenever you need to interact with the database, such as fetching, inserting, updating, or deleting records.",
        inputSchema: z.object({
          query: z
            .string()
            .describe("The SQL query to be executed on the database."),
        }),
        execute: async ({ query }) => {
          console.log("query: ", query);
          return "";
        },
      }),
    },
  });

  return result.toUIMessageStreamResponse();
}
