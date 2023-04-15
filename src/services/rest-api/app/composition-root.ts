import RestApi from "@/services/rest-api/app/rest-api";
import {
  ControlAuthenticatorStubAdapter,
  RepoQuerierStubAdapter,
} from "@/services/rest-api/adapters/drivens";
import { AuthenticatorProxyAdapter } from "@/services/rest-api/adapters/driver";

const compositionMock = () => {
  const controlAuthenticatorStub = new ControlAuthenticatorStubAdapter();
  const repoQuerierStub = new RepoQuerierStubAdapter();

  const restApiMock = new RestApi(controlAuthenticatorStub, repoQuerierStub);

  const authenticatorProxyAdapter = new AuthenticatorProxyAdapter(restApiMock);

  return { authenticatorProxyAdapter };
};

export const { authenticatorProxyAdapter } = compositionMock();

authenticatorProxyAdapter.login("john@aaa.com", "1234");
authenticatorProxyAdapter.register({
  name: "john",
  email: "john2@aaa.com",
  password: "123456",
});
