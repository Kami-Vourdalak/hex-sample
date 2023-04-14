import { User as RepoUser } from "@/services/repository/app/schemas/user";
import { User } from "@/services/rest-api/app/schemas";

export interface IForRepoQuerying {
  getUser(email: string): Promise<RepoUser>;
  createUser(user: User, password: string): Promise<RepoUser>;
}
