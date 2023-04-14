import { describe, it, expect } from "vitest";
import {
  ControlAuthenticatorStubAdapter,
  RepoQuerierStubAdapter,
} from "@/services/rest-api/adapters/drivens";
import RestApi from "@/services/rest-api/app/rest-api";
import { User } from "@/services/rest-api/app/schemas";

describe("rest-api", function () {
  const controlAuthenticatorStub = new ControlAuthenticatorStubAdapter();
  const repoQuerierStub = new RepoQuerierStubAdapter();

  const restApiMock = new RestApi(controlAuthenticatorStub, repoQuerierStub);
  it.concurrent("should return authenticated user on login", async function () {
    // Arrange.
    const emailMock = "foo@bar.com";
    const passMock = "123456";

    // Act.
    const result = await restApiMock.login(emailMock, passMock);

    // Assert.
    expect(result).toMatchInlineSnapshot(`
      {
        "email": "carl@gmail.foo.com",
        "id": "id-2kl21j3k123-3213-asd",
        "name": "Carl",
        "permissions": {
          "admin": true,
          "user": true,
        },
        "refreshToken": "refresh-token123",
        "token": "token123",
      }
    `);
  });

  it.concurrent(
    "should return authenticated user on register",
    async function () {
      // Arrange.
      const userMock: User = { name: "foo", email: "bar" };
      const passMock = "123456";

      // Act.
      const result = await restApiMock.register(userMock, passMock);

      // Assert.
      expect(result).toMatchInlineSnapshot(`
        {
          "email": "carl@gmail.foo.com",
          "id": "id-2kl21j3k123-3213-asd",
          "name": "Carl",
          "permissions": {
            "admin": true,
            "user": true,
          },
          "refreshToken": "refresh-token123",
          "token": "token123",
        }
      `);
    }
  );
});
