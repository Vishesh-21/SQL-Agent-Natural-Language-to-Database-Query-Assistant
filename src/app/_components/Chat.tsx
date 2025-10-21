"use client";

import { useChat } from "@ai-sdk/react";
import { useState } from "react";
import Logo from "./Logo";

export default function Chat() {
  const [input, setInput] = useState("");
  const { messages, sendMessage } = useChat();

  return (
    <div className="flex flex-col w-full max-w-1/2 py-10 mx-auto stretch">
      {messages.length === 0 ? (
        <Logo />
      ) : (
        <div className="flex-1 overflow-y-auto px-4 space-y-4 mb-24">
          {messages.map((message, messageIndex) => (
            <div key={message.id} className="mb-4 flex items-start space-x-3">
              {/* Avatar */}
              <div className="text-3xl mt-1">
                {message.role === "user" ? "🧒" : "🤖"}
              </div>

              {/* Message content */}
              <div className="flex flex-col w-full space-y-2 text-medium">
                {message.parts.map((part, i) => {
                  switch (part.type) {
                    case "text":
                      return (
                        <div
                          key={`${message.id}-${i}`}
                          className={`p-2 rounded-lg ${
                            message.role === "user"
                              ? "bg-blue-100 text-blue-900 "
                              : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 "
                          }`}
                        >
                          <pre>{part.text}</pre>
                        </div>
                      );

                    case "tool-database_tool":
                      return (
                        <div
                          key={`${message.id}-${i}`}
                          className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800 w-full"
                        >
                          <div className="font-semibold text-blue-700 dark:text-blue-300 mb-1">
                            🔍 Database Query
                          </div>
                          {part.input?.query && (
                            <pre className="text-xs bg-white dark:bg-zinc-900 p-2 rounded mb-2 overflow-x-auto">
                              {part.input.query}
                            </pre>
                          )}
                          {part.state === "output-available" && part.output && (
                            <div className="text-sm text-green-700 dark:text-green-300">
                              ✅ Returned {part.output.rows?.length || 0} rows
                            </div>
                          )}
                        </div>
                      );

                    case "tool-schema_tool":
                      return (
                        <div
                          key={`${message.id}-${i}`}
                          className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded border border-purple-200 dark:border-purple-800 w-full"
                        >
                          <div className="font-semibold text-purple-700 dark:text-purple-300 mb-1">
                            📄 Schema Tool
                          </div>
                          {part.state === "output-available" && (
                            <div className="text-sm text-green-700 dark:text-green-300 py-2">
                              ✅ Schema Loaded Successfully
                            </div>
                          )}
                        </div>
                      );

                    case "step-start":
                      if (messageIndex === messages.length - 1) {
                        return (
                          <div
                            key={`${message.id}-${i}`}
                            className="text-sm text-gray-500 dark:text-gray-400 my-2"
                          >
                            🔁 Processing...
                          </div>
                        );
                      }
                      return null;

                    default:
                      return null;
                  }
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage({ text: input });
          setInput("");
        }}
      >
        <input
          className="fixed dark:bg-zinc-900 bottom-0 w-full max-w-1/2 p-2 mb-8 border border-zinc-300 dark:border-zinc-800 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={(e) => setInput(e.currentTarget.value)}
        />
      </form>
    </div>
  );
}
