"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const credentialUser_1 = require("../entities/credentialUser");
const entitiesUser_1 = require("../entities/entitiesUser");
const reserves_1 = require("../entities/reserves");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "150306san",
    database: "m3",
    synchronize: true,
    logging: true,
    entities: [reserves_1.Reservation, entitiesUser_1.User, credentialUser_1.Credentials],
    subscribers: [],
    migrations: [],
});
//# sourceMappingURL=data-Source.js.map