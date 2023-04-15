import { IForAuthenticating } from "@/services/rest-api/ports/driver";
import {
  IForControlAuthenticating,
  IForRepoQuerying,
} from "@/services/rest-api/ports/drivens";
import { AuthenticatedUser, User } from "@/services/rest-api/app/schemas";

export default class RestApi implements IForAuthenticating {
  constructor(
    private readonly controlAuthenticator: IForControlAuthenticating,
    private readonly repoQuerier: IForRepoQuerying
  ) {}
  async login(email: string, password: string): Promise<AuthenticatedUser> {
    const user = await this.repoQuerier.getUser(email);

    const authDetails = await this.controlAuthenticator.getAuthDetails(
      email,
      password
    );

    const permissions = await this.controlAuthenticator.getPermissions(
      email,
      password
    );

    return { ...user, ...authDetails, permissions };
  }

  async register(user: User): Promise<AuthenticatedUser> {
    const repoUser = await this.repoQuerier.createUser(user);

    const authDetails = await this.controlAuthenticator.getAuthDetails(
      user.email,
      user.password
    );

    const permissions = await this.controlAuthenticator.getPermissions(
      user.email,
      user.password
    );

    return { ...repoUser, ...authDetails, permissions };
  }
}
