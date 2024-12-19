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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const client = new client_1.PrismaClient();
// create a user
function createUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield client.user.create({
            data: {
                username: "KL Rahul",
                password: "12345",
                age: 26,
                city: "Pune"
            }
        });
    });
}
// update a user
function updateUserWithId() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield client.user.update({
            where: {
                id: 1
            },
            data: {
                age: 20
            }
        });
    });
}
// using include , getting todos using relationships
function getuser() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield client.user.findFirst({
            where: {
                id: 2
            },
            include: {
                todos: true
            }
        });
        console.log(user);
    });
}
// use select to choose what properties you want
function getUser2() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield client.user.findFirst({
            where: {
                id: 1
            },
            select: {
                username: true
            }
        });
        console.log(user === null || user === void 0 ? void 0 : user.username);
    });
}
app.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield client.user.findMany({});
    res.json({
        users
    });
}));
app.get('/user/todos/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.userId; // "2" id is string, convert into int as defined in schema
    const userWithAllTodos = yield client.user.findFirst({
        where: {
            id: Number(id)
        },
        select: {
            todos: true,
            username: true,
            password: true
        }
    });
    res.json({
        userWithAllTodos
    });
}));
app.listen(3000);
