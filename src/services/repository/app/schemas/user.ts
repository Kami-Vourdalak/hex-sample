export type RepoUser = {
  id: string;
  name: string;
  email: string;
};

export interface User extends Omit<RepoUser, "id"> {
  password: string;
}
