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
const http_status_codes_1 = require("http-status-codes");
const PostService_1 = __importDefault(require("../services/PostService"));
class PostController {
    constructor() {
        this.postService = new PostService_1.default();
        this.getAll = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            const posts = yield this.postService.getAll();
            res.status(http_status_codes_1.StatusCodes.OK).json(posts);
        });
        this.getOne = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const post = yield this.postService.getOne(Number(req.params.id));
            res.status(http_status_codes_1.StatusCodes.OK).json(post);
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield this.postService.create(req.body);
            res.status(http_status_codes_1.StatusCodes.CREATED).json({ message: 'Post created' });
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const updatedPost = yield this.postService.update(Number(id), req.body);
            res.status(http_status_codes_1.StatusCodes.OK).json(updatedPost);
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield this.postService.delete(Number(req.params.id));
            res.status(http_status_codes_1.StatusCodes.OK).json({ message: 'Post deleted' });
        });
    }
}
exports.default = new PostController();
