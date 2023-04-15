import { IForManagingUser } from "@/services/repository/ports/driver";
import { Repository } from "@/services/repository/app/repository";
import { RepoUser, User } from "@/services/repository/app/schemas";

export class UserManagerProxy implements IForManagingUser {
  constructor(private readonly repository: Repository) {}

  getUser(email: string): Promise<RepoUser> {
    return this.repository.getUser(email);
  }

  async createUser(user: User): Promise<RepoUser> {
    return this.repository.createUser(user);
  }
}
