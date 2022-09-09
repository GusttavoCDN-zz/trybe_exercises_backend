"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PostController_1 = __importDefault(require("../controllers/PostController"));
const router = (0, express_1.Router)();
router.get('/', PostController_1.default.getAll);
router.get('/:id', PostController_1.default.getOne);
router.post('/', PostController_1.default.create);
router.put('/:id', PostController_1.default.update);
router.delete('/:id', PostController_1.default.delete);
exports.default = router;
