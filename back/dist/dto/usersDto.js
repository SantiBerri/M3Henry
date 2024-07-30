"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResponseDto = exports.UpdateUserDto = exports.CreateUserDto = void 0;
class CreateUserDto {
    username;
    password;
    email;
    age;
}
exports.CreateUserDto = CreateUserDto;
class UpdateUserDto {
    username;
    password;
    email;
    age;
}
exports.UpdateUserDto = UpdateUserDto;
class UserResponseDto {
    id;
    username;
    email;
    age;
}
exports.UserResponseDto = UserResponseDto;
class UserDto {
    id;
    username;
    email;
    age;
}
exports.default = UserDto;
//# sourceMappingURL=usersDto.js.map