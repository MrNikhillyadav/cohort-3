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
const pg_1 = require("pg");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const pgClient = new pg_1.Client("postgresql://neondb_owner:xaGAHgN4r7kv@ep-long-salad-a5qeycnx.us-east-2.aws.neon.tech/neondb?sslmode=require");
pgClient.connect();
app.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    try {
        const insertQuery = `INSERT INTO users (username,email,password) VALUES ($1,$2,$3);`;
        const response = yield pgClient.query(insertQuery, [username, email, password]);
    }
    catch (e) {
        res.json({
            error: e
        });
    }
    res.json({
        message: 'You are signed up successfully',
    });
}));
app.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield pgClient.query('SELECT * FROM users');
    res.json({
        users: response.rows
    });
}));
app.listen(3000, () => {
    console.log('Port listening at Port 3000');
});
