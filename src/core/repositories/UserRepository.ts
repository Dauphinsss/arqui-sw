import { User } from "../entities/User";

export interface IUserReader {
  getAll(): User[];
}

export interface IUserWriter {
  add(user: User): void;
}

export interface IUserRepository extends IUserReader, IUserWriter {}

export class InMemoryUserRepository implements IUserRepository {
  private users: User[] = [];

  getAll(): User[] {
    return this.users;
  }

  add(user: User): void {
    this.users.push(user);
  }
}
