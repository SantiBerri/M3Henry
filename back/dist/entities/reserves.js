"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reservation = void 0;
const typeorm_1 = require("typeorm");
const entitiesUser_1 = require("./entitiesUser");
let Reservation = class Reservation {
    id;
    fecha;
    hora; // Asumiendo que la hora se guarda como string, por ejemplo "14:00"
    motivo;
    cantidadPersonas;
    solicitud;
    user;
};
exports.Reservation = Reservation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Reservation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Reservation.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Reservation.prototype, "hora", void 0);
__decorate([
    (0, typeorm_1.Column)("text"),
    __metadata("design:type", String)
], Reservation.prototype, "motivo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Reservation.prototype, "cantidadPersonas", void 0);
__decorate([
    (0, typeorm_1.Column)("text"),
    __metadata("design:type", String)
], Reservation.prototype, "solicitud", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entitiesUser_1.User, user => user.reservations),
    __metadata("design:type", entitiesUser_1.User)
], Reservation.prototype, "user", void 0);
exports.Reservation = Reservation = __decorate([
    (0, typeorm_1.Entity)({
        name: "reservations"
    })
], Reservation);
//# sourceMappingURL=reserves.js.map