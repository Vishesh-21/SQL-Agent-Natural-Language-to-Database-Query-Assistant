# SQL AGENT

This is a Next.js application that uses AI to interact with a database. The application provides a chat interface where users can ask questions in natural language, and the AI will query the database and return the results.

## Features

- **Next.js 15:** The latest version of the popular React framework.
- **React 19:** The latest version of the React library.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **Drizzle ORM:** A TypeScript ORM for SQL databases.
- **Neon:** A serverless PostgreSQL database.
- **Google AI SDK:** Integration with Google's AI models.

## Getting Started

### Prerequisites

- Node.js
- pnpm
- A Neon account and a database URL.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Vishesh-21/SQL-Agent-Natural-Language-to-Database-Query-Assistant
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root of the project and add your database URL:

   ```
   DATABASE_URL="your-database-url"
   ```

4. **Run the development server:**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Database Migrations

This project uses Drizzle ORM to manage the database schema. To create and apply migrations, you can use the following commands:

- **Generate a migration:**

  ```bash
  pnpm drizzle-kit generate
  ```

- **Apply migrations:**

  ```bash
  pnpm drizzle-kit migrate
  ```

## Scripts

- `pnpm dev`: Starts the development server.
- `pnpm build`: Creates a production build.
- `pnpm start`: Starts the production server.
- `pnpm lint`: Lints the code using ESLint.

## 🚀 Live Demo

[View Agent](https://sql-database-agent.vercel.app/)
