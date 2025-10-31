import { User } from "../entities/User";
import { IUserRepository, IUserReader, IUserWriter } from "../repositories/UserRepository";

export class UserService {
  constructor(private repo: IUserRepository) {}

  listUsers(): User[] {
    return this.repo.getAll();
  }

  createUser(name: string, email: string): void {
    const id = Date.now();
    const user = new User(id, name, email);
    this.repo.add(user);
  }
}

export class UserQueryService {
  constructor(private reader: IUserReader) {}

  listUsers(): User[] {
    return this.reader.getAll();
  }
}

export class UserCommandService {
  constructor(private writer: IUserWriter) {}

  createUser(name: string, email: string): void {
    const id = Date.now();
    const user = new User(id, name, email);
    this.writer.add(user);
  }
}
