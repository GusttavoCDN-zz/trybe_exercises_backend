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
const User_1 = __importDefault(require("../database/models/User"));
const http_status_codes_1 = require("http-status-codes");
const throwCustomError_1 = __importDefault(require("../../utils/throwCustomError"));
const joi_1 = __importDefault(require("joi"));
const bcryptjs_1 = require("bcryptjs");
class UserService {
    constructor() {
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            const users = yield User_1.default.findAll({ raw: true });
            return users;
        });
        this.getOne = (id) => __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.default.findByPk(id, { raw: true });
            if (!user)
                return (0, throwCustomError_1.default)(http_status_codes_1.StatusCodes.NOT_FOUND, 'User not found');
            return user;
        });
        this.create = (user) => __awaiter(this, void 0, void 0, function* () {
            const { error } = yield this.validateUser(user);
            if (error)
                return (0, throwCustomError_1.default)(http_status_codes_1.StatusCodes.BAD_REQUEST, error.message);
            if (yield !!this.exists({ email: user.email }))
                return (0, throwCustomError_1.default)(http_status_codes_1.StatusCodes.CONFLICT, 'User already exists');
            const hashedPassword = yield (0, bcryptjs_1.hash)(user.password, 10);
            const newUser = Object.assign(Object.assign({}, user), { password: hashedPassword });
            yield User_1.default.create(newUser);
        });
        this.update = (id, user) => __awaiter(this, void 0, void 0, function* () {
            if (Object.keys(user).length === 0)
                return (0, throwCustomError_1.default)(http_status_codes_1.StatusCodes.BAD_REQUEST, 'No data to update');
            if (yield !this.exists({ id }))
                return (0, throwCustomError_1.default)(http_status_codes_1.StatusCodes.NOT_FOUND, 'User not found');
            yield User_1.default.update(user, { where: { id } });
            const updatedUser = (yield User_1.default.findByPk(id, { raw: true }));
            return updatedUser;
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            if (yield !this.exists({ id }))
                return (0, throwCustomError_1.default)(http_status_codes_1.StatusCodes.NOT_FOUND, 'User not found');
            yield User_1.default.destroy({ where: { id } });
        });
        this.exists = (options = {}) => __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.default.findOne({ where: options });
            return !!user;
        });
        this.validateUser = (user) => __awaiter(this, void 0, void 0, function* () {
            const schema = joi_1.default.object({
                name: joi_1.default.string().required(),
                email: joi_1.default.string().email().required(),
                password: joi_1.default.string().required(),
            });
            return schema.validate(user);
        });
    }
}
exports.default = UserService;
