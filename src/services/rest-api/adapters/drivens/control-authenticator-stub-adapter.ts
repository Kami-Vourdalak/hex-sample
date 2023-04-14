import { IForControlAuthenticating } from "@/services/rest-api/ports/drivens";
import { AuthDetails, Permissions } from "@/services/rest-api/app/schemas";

const authDetailsMock: AuthDetails = {
  token: "token123",
  refreshToken: "refresh-token123",
};

const permissionsMock: Permissions = {
  admin: true,
  user: true,
};

export class ControlAuthenticatorStubAdapter
  implements IForControlAuthenticating
{
  getAuthDetails(): Promise<AuthDetails> {
    return Promise.resolve(authDetailsMock);
  }

  getPermissions(): Promise<Permissions> {
    return Promise.resolve(permissionsMock);
  }
}
