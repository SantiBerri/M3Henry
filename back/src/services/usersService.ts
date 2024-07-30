import { AppDataSource } from "../db/data-Source";
import { CreateUserDto } from "../dto/usersDto";
import { User } from "../entities/entitiesUser";
import { Credentials } from "../entities/credentialUser";
import { hashPassword } from "../utils/passwordUtils";

export class UserService {
  static async createUser(userDto: CreateUserDto): Promise<User> {
    const userRepository = AppDataSource.getRepository(User);
    const credentialRepository = AppDataSource.getRepository(Credentials);

    const hashedPassword = hashPassword(userDto.password);


    const credential = credentialRepository.create({
      username: userDto.username,
      password: hashedPassword,
    });

    await credentialRepository.save(credential);


    const newUser = userRepository.create({
      name: userDto.username,
      email: userDto.email,
      age: userDto.age, 
      password: userDto.password,
      credential: credential,
    });

    await userRepository.save(newUser);

    return newUser;
  }


  static async findOne(userId: number): Promise<User | null> {
    const userRepository = AppDataSource.getRepository(User);
    return userRepository.findOneBy({ id: userId });
  }

  static async update(userId: number, updateUserDto: any): Promise<User> {
    const userRepository = AppDataSource.getRepository(User);
    const userToUpdate = await userRepository.findOneBy({ id: userId });
    if (!userToUpdate) throw new Error('User not found');


    await userRepository.save(userToUpdate);
    return userToUpdate;
  }

  static async remove(userId: number): Promise<void> {
    const userRepository = AppDataSource.getRepository(User);
    await userRepository.delete(userId);
  }

  static async findByUsername(username: string): Promise<User | null> {
    const userRepository = AppDataSource.getRepository(User);
    return userRepository.findOneBy({ name: username });
  }
}
