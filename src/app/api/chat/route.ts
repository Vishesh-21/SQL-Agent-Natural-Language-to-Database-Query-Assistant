import { SYSTEM_PROMPT } from "@/utils/agentPrompt";
import { google } from "@ai-sdk/google";
import { streamText, UIMessage, convertToModelMessages, tool } from "ai";
import z from "zod";

//allow streaming response up to 30 second
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

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

