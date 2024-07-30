"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = exports.ErrorHandler = void 0;
// utils/errorUtils.ts
class ErrorHandler extends Error {
    statusCode;
    message;
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}
exports.ErrorHandler = ErrorHandler;
const handleError = (error, response) => {
    const { statusCode, message } = error;
    response.status(statusCode).json({
        status: "error",
        statusCode,
        message
    });
};
exports.handleError = handleError;
//# sourceMappingURL=errorUtils.js.map