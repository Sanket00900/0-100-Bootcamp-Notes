require('dotenv').config()

import { Client } from 'pg'

const client = new Client({
connectionString : process.env.POSTGRES_URL
})

async function createUsersTable() {
    await client.connect()
    const createQuery = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(createQuery)
}

async function insertUser(username: string, email: string, password: string) {
    try {
        await client.connect(); 

        //! Use parameterized query to prevent SQL injection

        const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
        const values = [username, email, password];
        const res = await client.query(insertQuery, values);
        console.log('Insertion success:', res); 
      } catch (err) {
        console.error('Error during the insertion:', err);
      } finally {
        await client.end(); 
      }  
}


async function getUser(email: string) {
    try {
        await client.connect()
        const searchQuery = 'SELECT * FROM users WHERE email = $1'
        const values = [email]
        const res = await client.query(searchQuery, values)
        
        // console.log(res)

        res.rows.length > 0 ? console.log("User Found", res.rows[0]) : console.log('No user found with the given email.');
    } catch (error) {
        console.error("Error During Fetching User " , error)
    } finally {
        client.end()
    }
}

async function updatePassword(email: string, password : string) {
    try {
        await client.connect()
        const updateQuery = 'UPDATE users SET password = $2 WHERE email = $1'
        const values = [email, password]
        const res = await client.query(updateQuery, values)
        console.log('password updated.',res);
    } catch (error) {
        console.error("Error During Fetching User " , error)
    } finally {
        client.end()
    }
}

async function deleteUsersData() {
    await client.connect()

    const deleteQuery = 'TRUNCATE users';
    const res = await client.query(deleteQuery)
    console.log("Data deleted !", res)
    return
}

async function createAddressesTable(){
    await client.connect()

    const createQuery = await client.query(`
    CREATE TABLE addresses (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        city VARCHAR(100) NOT NULL,
        country VARCHAR(100) NOT NULL,
        street VARCHAR(255) NOT NULL,
        pincode INTEGER,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
    `)

    console.log(createQuery)
}

async function insertAddress(user_id : number, city : string, country : string, street : string, pincode : number ) {
    await client.connect()
    const values = [user_id, city, country, street, pincode]
    const insertQuery = "INSERT INTO  addresses (user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5)";
    const res = await client.query(insertQuery, values)

    console.log("Address Added ! " , res)
}

async function getUserDetailsWithAddress(userId: number) {
    try {
        await client.connect();
        const query = `
            SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
            FROM users u
            JOIN addresses a ON u.id = a.user_id
            WHERE u.id = $1
        `;
        const result = await client.query(query, [userId]);

        if (result.rows.length > 0) {
            console.log('User and address found:', result.rows[0]);
            return result.rows[0];
        } else {
            console.log('No user or address found with the given ID.');
            return null;
        }
    } catch (err) {
        console.error('Error during fetching user and address:', err);
        throw err;
    } finally {
        await client.end();
    }
}

// createUsersTable()
// insertUser('user1', 'user1@example.com', 'user1_password').catch(console.error);
// getUser('sanketsj00900@gmail.com').catch(console.error)
// updatePassword('sanketsj00900@gmail.com','S123').catch(console.error)
// deleteUsersData()
// createAddressesTable()
// insertAddress(5, 'New York', 'USA', '123 Broadway St', 10001);
getUserDetailsWithAddress(5);
