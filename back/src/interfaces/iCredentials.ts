import { iUser } from "./iUser";

export interface ICredential {
    id: number;
    username: string;
    password: string;
    user: iUser;
  }