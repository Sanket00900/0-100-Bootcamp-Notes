import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


//! Get Users

async function getUsers() {
    const res = await prisma.user.findMany({
        select: {
            username : true
        }
    })
    console.log(res)
}

//! Insert User

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
    const res = await prisma.user.create({
        data: {
            username, password, firstName, lastName
        }
    })

    console.log(res)
}

//!Update User

interface UpdateParams{
    firstName: string,
    lastName : string
}

async function updateUser(username: string, {firstName, lastName } : UpdateParams) {
    const res = await prisma.user.update({
        where: { username: username },
        data: {
            firstName,
            lastName 
        },
        select: {
            username : true,
            firstName : true,
            lastName : true
        }
    })
    console.log(res)
    
}

//! Get User from username

async function getuser(username: string) {
    const res = await prisma.user.findUnique({
        where: { username },
        select: { username: true, firstName: true, lastName: true }
    })
    console.log(res)
}

// getUsers()
getuser('user1')
// insertUser('user2', 'user2pass', 'user2first', 'user2last')
// updateUser('user2', {firstName: 'Usser2Firsttt',lastName:'Userr2Lasttt'})