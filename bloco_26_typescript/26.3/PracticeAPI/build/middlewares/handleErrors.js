"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const handleErrors = (error, _req, res, _next) => {
    if (error.code && error.message) {
        res.status(error.code).json({ message: error.message });
    }
    res
        .status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal server error' });
};
exports.default = handleErrors;
