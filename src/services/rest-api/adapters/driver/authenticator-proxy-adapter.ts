import { IForAuthenticating } from "@/services/rest-api/ports/driver";
import RestApi from "@/services/rest-api/app/rest-api";
import { AuthenticatedUser, User } from "@/services/rest-api/app/schemas";

export class AuthenticatorProxyAdapter implements IForAuthenticating {
  constructor(private readonly restApi: RestApi) {}
  login(email: string, password: string): Promise<AuthenticatedUser> {
    return this.restApi.login(email, password);
  }

  register(user: User, password: string): Promise<AuthenticatedUser> {
    return this.restApi.register(user, password);
  }
}
