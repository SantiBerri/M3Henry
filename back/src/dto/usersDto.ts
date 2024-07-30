export class CreateUserDto {
    readonly username: string;
    readonly password: string;
    readonly email: string;
    readonly age: number;

  }
  
  export class UpdateUserDto {
    readonly username?: string;
    readonly password?: string;
    readonly email?: string;
    readonly age: number;

  }
  
  export class UserResponseDto {
    readonly id: number;
    readonly username: string;
    readonly email: string;
    readonly age: number;
    readonly password?: string;

  }

  export default class UserDto {
    readonly id: number;
    readonly username: string;
    readonly email: string;
    readonly age: number;
    readonly password?: string;

  }