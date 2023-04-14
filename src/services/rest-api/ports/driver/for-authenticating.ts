import { AuthenticatedUser, User } from "@/services/rest-api/app/schemas";

export interface IForAuthenticating {
  login(email: string, password: string): Promise<AuthenticatedUser>;
  register(user: User, password: string): Promise<AuthenticatedUser>;
}
