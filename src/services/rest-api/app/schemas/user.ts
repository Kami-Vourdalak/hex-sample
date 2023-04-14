import { Permissions } from "./";

export type AuthenticatedUser = {
  id: string;
  email: string;
  name: string;
  token: string;
  refreshToken: string;
  permissions: Permissions;
};

export type User = Pick<AuthenticatedUser, "email" | "name">;
