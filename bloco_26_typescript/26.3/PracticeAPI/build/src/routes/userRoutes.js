"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controllers/UserController"));
const router = (0, express_1.Router)();
router.get('/', UserController_1.default.getAll);
router.get('/:id', UserController_1.default.getOne);
router.post('/', UserController_1.default.create);
router.put('/:id', UserController_1.default.update);
router.delete('/:id', UserController_1.default.delete);
exports.default = router;
