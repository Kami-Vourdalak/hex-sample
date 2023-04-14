import { IForRepoQuerying } from "@/services/rest-api/ports/drivens";
import { User } from "@/services/repository/app/schemas";

const userMock: User = {
  id: "id-2kl21j3k123-3213-asd",
  name: "Carl",
  email: "carl@gmail.foo.com",
};

export class RepoQuerierStubAdapter implements IForRepoQuerying {
  getUser(): Promise<User> {
    return Promise.resolve(userMock);
  }

  createUser(): Promise<User> {
    return Promise.resolve(userMock);
  }
}
