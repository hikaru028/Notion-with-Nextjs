import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as dotenv from 'dotenv';
import * as schema from '../../../../migrations/schema';
dotenv.config({ path: '.env' });

if(!process.env.DATABASE_URL) {
    console.log('🚫 No database url');
}

const client = postgres(process.env.DATABASE_URL as string);