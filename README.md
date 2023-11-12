# Notion-with-Nextjs
Foobar is a Python library for dealing with word pluralization.

## How to create app
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
- create "drizzle.config.ts" file





## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
pip install foobar
```
