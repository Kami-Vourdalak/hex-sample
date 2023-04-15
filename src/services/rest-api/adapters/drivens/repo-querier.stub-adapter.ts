import { IForRepoQuerying } from "@/services/rest-api/ports/drivens";
import { RepoUser } from "@/services/repository/app/schemas";

const userMock: RepoUser = {
  id: "id-stub",
  name: "CarlStub",
  email: "carl@stub.foo",
};

export class RepoQuerierStubAdapter implements IForRepoQuerying {
  getUser(): Promise<RepoUser> {
    return Promise.resolve(userMock);
  }

  createUser(): Promise<RepoUser> {
    return Promise.resolve(userMock);
  }
}
