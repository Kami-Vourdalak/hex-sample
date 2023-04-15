import { IForManagingUser } from "@/services/repository/ports/driver";
import { IForMonitoring } from "@/services/repository/ports/drivens";
import { RepoUser, User } from "@/services/repository/app/schemas";

export class Repository implements IForManagingUser {
  private userList: RepoUser[] = [];
  constructor(private readonly logger: IForMonitoring) {}
  async getUser(email: string): Promise<RepoUser> {
    const userFound = this.userList.find((user) => user.email === email);
    if (!userFound) {
      this.logger.log("GetUser", "User not found");
      throw new Error("User not found");
    }

    return { id: userFound.id, email: userFound.email, name: userFound.name };
  }

  async createUser(user: User): Promise<RepoUser> {
    const userExist = this.userList.find(
      (repoUser) => repoUser.email === user.email
    );
    if (userExist) {
      this.logger.log("CreateUser", "User already exists");
      throw new Error("User already exists");
    }

    const newUser = { ...user, id: String(this.userList.length + 1) };

    this.userList.push(newUser);

    return { id: newUser.id, email: newUser.email, name: newUser.name };
  }
}
