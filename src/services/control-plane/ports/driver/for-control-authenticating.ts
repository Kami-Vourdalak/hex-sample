import { AuthDetails, Permissions } from "@/services/rest-api/app/schemas";

export interface IForControlAuthenticating {
  getAuthDetails(email: string, password: string): Promise<AuthDetails>;
  getPermissions(email: string, password: string): Promise<Permissions>;
}
