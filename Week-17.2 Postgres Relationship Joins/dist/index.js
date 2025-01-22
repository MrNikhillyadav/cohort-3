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
    const { city, country, street, pincode } = req.body;
    try {
        const insertUserQuery = `INSERT INTO users (username,email,password)  VALUES ($1,$2,$3) RETURNING id;`;
        yield pgClient.query("BEGIN;");
        const response = yield pgClient.query(insertUserQuery, [username, email, password]);
        const userId = response.rows[0].id;
        const addressQuery = `INSERT INTO addresses (user_id,city,country,street,pincode) VALUES ($1,$2,$3,$4,$5)`;
        const addressQueryResponse = yield pgClient.query(addressQuery, [userId, city, country, street, pincode]);
        yield pgClient.query("COMMIT;");
        res.json({
            message: 'You are signed up successfully',
        });
    }
    catch (e) {
        res.json({
            error: e
        });
    }
}));
app.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield pgClient.query('SELECT * FROM users');
    res.json({
        users: users.rows
    });
}));
app.get('/metadata', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    console.log('id: ', id);
    try {
        const query1 = `SELECT username,email,id FROM users WHERE id=$1`;
        const response1 = yield pgClient.query(query1, [id]);
        const query2 = `SELECT * FROM addresses WHERE user_id=$1`;
        const response2 = yield pgClient.query(query2, [id]);
        res.json({
            user: response1.rows[0],
            address: response2.rows
        });
    }
    catch (e) {
        res.json({
            error: e
        });
    }
}));
app.get('/better-metadata', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    const query = `SELECT users.username,users.email,users.id,addresses.city,addresses.country,addresses.pincode,addresses.street 
        FROM users JOIN addresses ON users.id = addresses.user_id WHERE users.id = $1`;
    const response = yield pgClient.query(query, [id]);
    res.json({
        response: response.rows,
    });
}));
app.listen(3000, () => {
    console.log('Port listening at Port 3000');
});
