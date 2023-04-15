import { RepoUser, User } from "@/services/repository/app/schemas";

export interface IForManagingUser {
  getUser(email: string): Promise<RepoUser>;
  createUser(user: User): Promise<RepoUser>;
}
