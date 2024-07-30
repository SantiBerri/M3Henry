"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credentialModel = exports.reserveModel = exports.userModel = void 0;
const credentialUser_1 = require("../entities/credentialUser");
const reserves_1 = require("../entities/reserves");
const entitiesUser_1 = require("../entities/entitiesUser");
const data_Source_1 = require("../db/data-Source");
/* ↓ Modelos para los repositorios ↓ */
exports.userModel = data_Source_1.AppDataSource.getRepository(entitiesUser_1.User);
exports.reserveModel = data_Source_1.AppDataSource.getRepository(reserves_1.Reservation);
exports.credentialModel = data_Source_1.AppDataSource.getRepository(credentialUser_1.Credentials);
//# sourceMappingURL=repository.js.map