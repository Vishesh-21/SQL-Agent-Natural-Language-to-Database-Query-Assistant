import { SYSTEM_PROMPT } from "@/utils/agentPrompt";
import { TOOLS } from "@/app/api/chat/tools";
import { google } from "@ai-sdk/google";
import { streamText, UIMessage, convertToModelMessages, stepCountIs } from "ai";

//allow streaming response up to 30 second
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: google("gemini-2.5-flash"),
    messages: convertToModelMessages(messages),
    stopWhen: stepCountIs(5),
    system: SYSTEM_PROMPT,
    tools: TOOLS,
  });

  return result.toUIMessageStreamResponse();
}
