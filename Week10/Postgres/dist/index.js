"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: process.env.POSTGRES_URL
});
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const createQuery = yield client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
        console.log(createQuery);
    });
}
function insertUser(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            //! Use parameterized query to prevent SQL injection
            const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
            const values = [username, email, password];
            const res = yield client.query(insertQuery, values);
            console.log('Insertion success:', res);
        }
        catch (err) {
            console.error('Error during the insertion:', err);
        }
        finally {
            yield client.end();
        }
    });
}
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const searchQuery = 'SELECT * FROM users WHERE email = $1';
            const values = [email];
            const res = yield client.query(searchQuery, values);
            // console.log(res)
            res.rows.length > 0 ? console.log("User Found", res.rows[0]) : console.log('No user found with the given email.');
        }
        catch (error) {
            console.error("Error During Fetching User ", error);
        }
        finally {
            client.end();
        }
    });
}
function updatePassword(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const updateQuery = 'UPDATE users SET password = $2 WHERE email = $1';
            const values = [email, password];
            const res = yield client.query(updateQuery, values);
            console.log('password updated.', res);
        }
        catch (error) {
            console.error("Error During Fetching User ", error);
        }
        finally {
            client.end();
        }
    });
}
function deleteUsersData() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const deleteQuery = 'TRUNCATE users';
        const res = yield client.query(deleteQuery);
        console.log("Data deleted !", res);
        return;
    });
}
function createAddressesTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const createQuery = yield client.query(`
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
    `);
        console.log(createQuery);
    });
}
function insertAddress(user_id, city, country, street, pincode) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const values = [user_id, city, country, street, pincode];
        const insertQuery = "INSERT INTO  addresses (user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5)";
        const res = yield client.query(insertQuery, values);
        console.log("Address Added ! ", res);
    });
}
function getUserDetailsWithAddress(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const query = `
            SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
            FROM users u
            JOIN addresses a ON u.id = a.user_id
            WHERE u.id = $1
        `;
            const result = yield client.query(query, [userId]);
            if (result.rows.length > 0) {
                console.log('User and address found:', result.rows[0]);
                return result.rows[0];
            }
            else {
                console.log('No user or address found with the given ID.');
                return null;
            }
        }
        catch (err) {
            console.error('Error during fetching user and address:', err);
            throw err;
        }
        finally {
            yield client.end();
        }
    });
}
// createUsersTable()
// insertUser('user1', 'user1@example.com', 'user1_password').catch(console.error);
// getUser('sanketsj00900@gmail.com').catch(console.error)
// updatePassword('sanketsj00900@gmail.com','S123').catch(console.error)
// deleteUsersData()
// createAddressesTable()
// insertAddress(5, 'New York', 'USA', '123 Broadway St', 10001);
getUserDetailsWithAddress(5);
