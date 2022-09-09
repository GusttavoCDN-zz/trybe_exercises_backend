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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const throwCustomError_1 = __importDefault(require("../../utils/throwCustomError"));
const http_status_codes_1 = require("http-status-codes");
const User_1 = __importDefault(require("../database/models/User"));
const bcryptjs_1 = require("bcryptjs");
class AuthService {
    constructor() {
        this.userModel = User_1.default;
        this.login = ({ email, password }) => __awaiter(this, void 0, void 0, function* () {
            if (!email || !password)
                return (0, throwCustomError_1.default)(http_status_codes_1.StatusCodes.BAD_REQUEST, 'Email and password are required');
            const user = yield this.userModel.findOne({ where: { email } });
            if (!user)
                return (0, throwCustomError_1.default)(http_status_codes_1.StatusCodes.UNAUTHORIZED, 'Invalid credentials');
            const isPasswordValid = yield (0, bcryptjs_1.compare)(password, user.password);
            if (!isPasswordValid)
                return (0, throwCustomError_1.default)(http_status_codes_1.StatusCodes.UNAUTHORIZED, 'Wrong Password');
            return this.makeToken(email, password);
        });
        this.makeToken = (email, password) => {
            const userCredentials = { email, password };
            const jwtConfig = {
                expiresIn: '1h',
                algorithm: 'HS256',
            };
            const secret = process.env.JWT_SECRET || 'secret';
            const token = jsonwebtoken_1.default.sign({ data: userCredentials }, secret, jwtConfig);
            return token;
        };
    }
}
exports.default = AuthService;
