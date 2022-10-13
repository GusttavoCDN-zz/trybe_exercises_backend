"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userRoutes_1 = __importDefault(require("./userRoutes"));
const authRoutes_1 = __importDefault(require("./authRoutes"));
const postRoutes_1 = __importDefault(require("./postRoutes"));
const productRoutes_1 = __importDefault(require("./productRoutes"));
require("express-async-errors");
exports.default = (app) => {
    app.use('/users', userRoutes_1.default);
    app.use('/posts', postRoutes_1.default);
    app.use('/products', productRoutes_1.default);
    app.use(authRoutes_1.default);
};
