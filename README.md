## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
=======
# Notion-with-Nextjs
Foobar is a Python library for dealing with word pluralization.

## How to create a database using Supabase
- Create a repositry, clone it on your local environment
- Open VSCode and that folder
- in the Terminal, run:
```bash
npx create-next-app@latest
```
- select all "yes", apart from importing alias
- import 3 modulars:
```bash
yarn add drizzle-orm postgres dotenv
yarn add drizzle-kit -D
```
- crate ".env" file in your project
- add ".env" under the "# misc" section in the ".gitignore" file 
- add the following to the ".env" file:
```bash
DATABASE_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SERVICE_ROLE_KEY=
PW=
NEXT_PUBLIC_SITE_URL=

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```
- go to the website, [supabase](https://supabase.com/) and create your account if you haven't got it yet.
- create a new project on supabase
- assign values to "DATABASE_URL / NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY / SERVICE_ROLE_KEY / PW"
- create "/migrations/schema.ts" file and write the following code in it:
```bash
export {};
```
- create "/drizzle.config.ts" file
- create the following files: "/src/lib/supabase/db.ts" and "/src/lib/supabase/schema.ts"
- run (this is important):
```bash
npm run generate
```
- then run:
```bash
npm run dev
```
- go to your project in your supabase account and select "SQL editor > Quick starts > Stripe Subscriptions
- mofify a few thing and run the SQL
- In the another Terminal on VS Code, run:
```bash
npm run pull
```

## How to create an app
- create 3 folders: (main)(auth)(site) in the app directory
- go to the [shadcn/ui](https://ui.shadcn.com/) page, and select "components > Next.js"
- copy and run:
```bash
npx shadcn-ui@latest init
```
- select/enter (Typescript -> Default -> Slate -> src/app/globals.css -> yes -> tailwind.config.js -> Enter key -> Enterkey -> yes -> Y )
