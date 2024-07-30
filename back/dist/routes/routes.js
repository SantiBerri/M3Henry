"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoutes_1 = __importDefault(require("./userRoutes"));
const reservesRoutes_1 = __importDefault(require("./reservesRoutes"));
const authController_1 = require("../controllers/authController");
const router = (0, express_1.Router)();
router.use('/users', userRoutes_1.default);
router.use('/reserves', reservesRoutes_1.default);
router.post('/login', authController_1.login);
exports.default = router;
//# sourceMappingURL=routes.js.map