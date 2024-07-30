import { AppDataSource } from "../db/data-Source";
import { Credentials } from "../entities/credentialUser";
import { comparePassword } from "../utils/passwordUtils";

export class AuthService {
  static async login(username: string, password: string): Promise<boolean> {
    const credentialRepository = AppDataSource.getRepository(Credentials);
    const credential = await credentialRepository.findOneBy({ username });

    if (!credential) {

      return false;
    }


    return comparePassword(password, credential.password);
  }
}