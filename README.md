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
