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
const UserService_1 = __importDefault(require("../services/UserService"));
const http_status_codes_1 = require("http-status-codes");
class UserController {
    constructor() {
        this.userService = new UserService_1.default();
        this.getAll = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userService.getAll();
            res.status(http_status_codes_1.StatusCodes.OK).json(users);
        });
        this.getOne = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = yield this.userService.getOne(Number(id));
            res.status(http_status_codes_1.StatusCodes.OK).json(user);
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield this.userService.create(req.body);
            res.status(http_status_codes_1.StatusCodes.CREATED).json({ message: 'User created' });
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = yield this.userService.update(Number(id), req.body);
            res.status(http_status_codes_1.StatusCodes.OK).json(user);
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield this.userService.delete(Number(id));
            res.status(http_status_codes_1.StatusCodes.NO_CONTENT).json({ message: 'User deleted' });
        });
    }
}
exports.default = new UserController();
