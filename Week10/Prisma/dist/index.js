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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
//! Get Users
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findMany({
            select: {
                username: true
            }
        });
        console.log(res);
    });
}
//! Insert User
function insertUser(username, password, firstName, lastName) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                username, password, firstName, lastName
            }
        });
        console.log(res);
    });
}
function updateUser(username, { firstName, lastName }) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.update({
            where: { username: username },
            data: {
                firstName,
                lastName
            },
            select: {
                username: true,
                firstName: true,
                lastName: true
            }
        });
        console.log(res);
    });
}
//! Get User from username
function getuser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findUnique({
            where: { username },
            select: { username: true, firstName: true, lastName: true }
        });
        console.log(res);
    });
}
// getUsers()
getuser('user1');
// insertUser('user2', 'user2pass', 'user2first', 'user2last')
// updateUser('user2', {firstName: 'Usser2Firsttt',lastName:'Userr2Lasttt'})
