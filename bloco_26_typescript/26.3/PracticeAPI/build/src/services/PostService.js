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
const throwCustomError_1 = __importDefault(require("../../utils/throwCustomError"));
const Post_1 = __importDefault(require("../database/models/Post"));
const joi_1 = __importDefault(require("joi"));
class PostService {
    constructor() {
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            const posts = yield Post_1.default.findAll({ raw: true });
            return posts;
        });
        this.getOne = (id) => __awaiter(this, void 0, void 0, function* () {
            const post = yield Post_1.default.findByPk(id, { raw: true });
            if (!post)
                return (0, throwCustomError_1.default)(http_status_codes_1.StatusCodes.NOT_FOUND, 'Post not found');
            return post;
        });
        this.create = (post) => __awaiter(this, void 0, void 0, function* () {
            const { error } = this.validatePost(post);
            if (error)
                return (0, throwCustomError_1.default)(http_status_codes_1.StatusCodes.BAD_REQUEST, error.message);
            const createdPost = yield Post_1.default.create(post, { raw: true });
            return createdPost;
        });
        this.update = (id, post) => __awaiter(this, void 0, void 0, function* () {
            if (Object.keys(post).length === 0)
                return (0, throwCustomError_1.default)(http_status_codes_1.StatusCodes.BAD_REQUEST, 'No data to update');
            if (yield !this.exists({ id }))
                return (0, throwCustomError_1.default)(http_status_codes_1.StatusCodes.NOT_FOUND, 'Post not found');
            yield Post_1.default.update(post, { where: { id } });
            const updatedPost = (yield Post_1.default.findByPk(id, { raw: true }));
            return updatedPost;
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            if (yield !this.exists({ id }))
                return (0, throwCustomError_1.default)(http_status_codes_1.StatusCodes.NOT_FOUND, 'Post not found');
            yield Post_1.default.destroy({ where: { id } });
        });
        this.validatePost = (post) => {
            const schema = joi_1.default.object({
                title: joi_1.default.string().min(3).max(30).required(),
                author: joi_1.default.string().min(3).max(30).required(),
                category: joi_1.default.string().min(3).max(30).required(),
                publicationDate: joi_1.default.date().required(),
            });
            return schema.validate(post);
        };
        this.exists = (options = {}) => __awaiter(this, void 0, void 0, function* () {
            const post = yield Post_1.default.findOne({ where: options });
            return !!post;
        });
    }
}
exports.default = PostService;
