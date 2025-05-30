# Next.js Auth Kit

Next.js Auth Kit is a starter template designed to help developers integrate authentication in their Next.js applications. It provides a clean, maintainable, and scalable authentication solution, so you can get up and running quickly. Additionally, multiple branches with pre-configured database integrations are available to suit different use cases, making it even easier to integrate authentication with a variety of databases.

## Key Features

- **Authentication Setup**: Pre-configured authentication boilerplate to get you started with authentication in Next.js.
- **Multiple Database Implementations**: Branches with different database setups (e.g., MongoDB, SQLite) are available for seamless integration.
- **Folder Structure**: Well-organized project structure with separate directories for `app`, `components`, `lib` and `server`.
- **Multiple Package Manager Support**: Supports npm, yarn, pnpm, and bun as package managers.
- **Developer-Friendly**: Easy to set up, and the code is organized in a way that scales well as the project grows.

## Folder Structure

The project is organized in the following way:

```
/nextjs-auth-kit
│
├── /app                # Main application files (pages, API routes, etc.)
├── /components         # Reusable components
├── /hooks              # Custom hooks used for authentication logic
├── /lib                # Helper functions and utilities
├── /server             # Server-side logic and configuration
├── .env                # Environment variables
├── next.config.ts      # Next.js configuration file
└── package.json        # Project dependencies and scripts
```

## Getting Started

### Prerequisites

Before getting started, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v14.x or later)
- [npm](https://www.npmjs.com/) or your preferred package manager (yarn, pnpm, or bun)

### Installation

1. **Clone the Repository**

   First, clone the repository to your local machine:

   ```bash
   git clone https://github.com/edoardohb/nextjs-auth-kit.git
   cd nextjs-auth-kit
   ```

2. **Checkout the Appropriate Branch**

   Depending on which database setup you want to use, checkout the corresponding branch. For example:

   * **MongoDB**: `git checkout prisma-mongodb`
   * **SQLite**: `git checkout prisma-sqlite`

3. **Install Dependencies**

   Choose your preferred package manager and install the necessary dependencies.

   Using npm:

   ```bash
   npm install
   ```

   Using yarn:

   ```bash
   yarn install
   ```

   Using pnpm:

   ```bash
   pnpm install
   ```

   Using bun:

   ```bash
   bun install
   ```

4. **Set Up Environment Variables**

   Make sure to set up the environment variables for your project. You can create a `.env.local` file at the root of your project and add your environment-specific details like API keys or database credentials.

   Example `.env.local` file:

   ```
   AUTH_SECRET="" # Added by `npx auth`. Read more: https://cli.authjs.dev

   # Database connection settings
   DATABASE_URL="your-database-url"

   AUTH_GOOGLE_ID=""
   AUTH_GOOGLE_SECRET=""
   ```

   Example `.env` file for Database:
   ```
   DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
   ```

5. **Run the Development Server**

   To start the development server, use the following command based on the package manager you're using:

   Using npm:

   ```bash
   npm run dev
   ```

   Using yarn:

   ```bash
   yarn dev
   ```

   Using pnpm:

   ```bash
   pnpm dev
   ```

   Using bun:

   ```bash
   bun dev
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

## Customizing the Authentication

The `nextjs-auth-kit` comes with a basic authentication setup, but you can easily customize it to suit your project's needs.

* **Authentication Providers**: Modify the authentication logic in `/server/auth.ts` to integrate with various OAuth providers or your custom authentication mechanism.
* **Database Integration**: Each branch contains a pre-configured database setup (MongoDB, SQLite, etc.).

## Branches with Database Implementations

The following branches provide different database setups for seamless integration:

* **prisma-mongodb**: Integrates authentication with MongoDB.
* **prisma-sqlite**: Integrates authentication with SQLite.

To switch between branches, use the following command:

```bash
git checkout <branch-name>
```

For example, to switch to the MongoDB branch:

```bash
git checkout prisma-mongodb
```

## Contributions

Feel free to fork the repository and submit pull requests to improve the project. If you have any issues or suggestions, you can open an issue on the GitHub page.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
