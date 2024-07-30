import { AppDataSource } from '../db/data-Source';
import { CreateCredentialsDto } from '../dto/credentialsDto';
import { Credentials } from '../entities/credentialUser';
import { hashPassword, comparePassword } from '../utils/passwordUtils';

export class CredentialService {
  async createCredential(createCredentialsDto: CreateCredentialsDto): Promise<Credentials> {
    const { username, password, age } = createCredentialsDto;

    const credentialRepository = AppDataSource.getRepository(Credentials);
    const hashedPassword = hashPassword(password);

    const newCredential = credentialRepository.create({
      username,
      password: hashedPassword,
    });
    await credentialRepository.save(newCredential);
    return newCredential;
  }

  async login(username: string, password: string): Promise<boolean> {
    const credentialRepository = AppDataSource.getRepository(Credentials);

    // Buscar las credenciales por nombre de usuario
    const credential = await credentialRepository.findOneBy({ username });

    // Verificar si se encontraron las credenciales
    if (!credential) {
      return false; // Las credenciales no existen
    }

    // Comparar la contraseña proporcionada con la contraseña almacenada
    const passwordMatch = comparePassword(password, credential.password || '');

    return passwordMatch;
  }

  async getCredentialById(id: number): Promise<Credentials | undefined> {
    const credentialRepository = AppDataSource.getRepository(Credentials);
    const credential = await credentialRepository.findOneBy({ id });
    return credential ?? undefined; // Si credential es null, devuelve undefined
  }

  async updateCredential(id: number, username: string, password: string): Promise<Credentials> {
    const credentialRepository = AppDataSource.getRepository(Credentials);
    let credential = await credentialRepository.findOneBy({ id });

    if (!credential) {
      throw new Error("Credential not found");
    }

    credential.username = username;
    credential.password = hashPassword(password);
    await credentialRepository.save(credential);

    return credential;
  }

  async deleteCredential(id: number): Promise<void> {
    const credentialRepository = AppDataSource.getRepository(Credentials);
    const credential = await credentialRepository.findOneBy({ id });

    if (!credential) {
      throw new Error("Credential not found");
    }

    await credentialRepository.remove(credential);
  }

  async validateCredential(username: string, password: string): Promise<boolean> {
    const credentialRepository = AppDataSource.getRepository(Credentials);
    const credential = await credentialRepository.findOneBy({ username });

    if (!credential) {
      return false;
    }

    return comparePassword(password, credential.password || '');
  }
}
