require('dotenv').config()

import { Client } from 'pg'

const client = new Client({
connectionString : "postgresql://sanketsj00900:mBjZH95LOfGa@ep-holy-forest-a51n3thp.us-east-2.aws.neon.tech/neondb?sslmode=require"
})

client.connect()

async function createUsersTable() {
    await client.connect()
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result)
}

// createUsersTable()