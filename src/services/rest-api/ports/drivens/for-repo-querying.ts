import { RepoUser, User } from "@/services/repository/app/schemas";

export interface IForRepoQuerying {
  getUser(email: string): Promise<RepoUser>;
  createUser(user: User): Promise<RepoUser>;
}
