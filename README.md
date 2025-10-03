# Mini CMS with Remix, Prisma, Tailwind, Supabase

This project is a minimal content management system (CMS) built as a technical test. It demonstrates full-stack engineering using Remix, Prisma, Tailwind CSS, and Supabase (Postgres + optional Auth).

## Features

* **Article Management**

  * Create, read, update, delete articles
  * Rich text editing with React-Quill
  * Preview mode with sanitization (DOMPurify)
* **Tree View**

  * Articles organized into parent-child relationships
  * Sidebar navigation with collapsible categories
* **Responsive UI**

  * Tailwind CSS styled
  * Layout with sidebar, header, and main content
* **Database**

  * Prisma schema with self-referencing `Article` model
  * Postgres on Supabase
* **Deployment**

  * Optimized for Vercel deployment
  * Environment variables for Supabase and database connections

## Tech Stack

* [Remix](https://remix.run/) (React framework with server routes)
* [Prisma](https://www.prisma.io/) (database ORM)
* [Tailwind CSS](https://tailwindcss.com/)
* [Supabase](https://supabase.com/) (Postgres + Auth)
* [React-Quill](https://github.com/zenoamaro/react-quill) (rich text editor)

## Getting Started

### Prerequisites

* Node.js 18+
* Postgres (Supabase recommended)

### Setup

1. Clone the repository:

   ```bash
   git clone <repo-url>
   cd <repo-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   ```bash
   cp .env.example .env
   ```

   Fill in values for `DATABASE_URL`, `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, and `SESSION_SECRET`.

4. Run Prisma migrations:

   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
├─ components/        # shared UI (Header, Sidebar)
├─ lib/               # db and supabase clients
├─ routes/            # Remix routes (articles, auth, etc.)
│  └─ articles/       # index, new, $id pages
├─ styles/            # Tailwind CSS
prisma/
├─ schema.prisma      # database schema
```

## Deployment

1. Push code to GitHub.
2. Connect the repo to Vercel.
3. Set environment variables in Vercel dashboard.
4. Run database migrations:

   ```bash
   npx prisma migrate deploy
   ```

## Next Steps

* Add Supabase email/password auth to restrict article creation/editing.
* Improve the tree view with deeper nested levels.
* Extract reusable components (Header, Sidebar).
* Add delete functionality and confirmation UI.

## License

This project is provided as part of a technical test. You may reuse the structure for educational purposes.
