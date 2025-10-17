import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SQL Agent – Natural Language to Database Query Assistant",
  description:
    "An intelligent SQL Agent that allows non-technical users to interact with databases using natural language. It converts user queries into SQL commands, executes them safely, and returns human-friendly responses. The project bridges the gap between technical databases and everyday users.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
