import { beforeEach, describe, expect, it } from "vitest";
import { ForMonitorStubAdapter } from "@/services/repository/adapters/drivens";
import { Repository } from "@/services/repository/app/repository";
import { User } from "@/services/repository/app/schemas";

describe("repository", function () {
  const monitorMock = new ForMonitorStubAdapter();
  let repository: Repository;

  beforeEach(() => {
    repository = new Repository(monitorMock);
  });
  it("should throw user not found", async function () {
    // Arrange.
    const emailMock = "foo@bar.com";

    // Act.
    const getUser = () => repository.getUser(emailMock);

    // Assert.
    expect(getUser).rejects.toThrowErrorMatchingInlineSnapshot(
      '"User not found"'
    );
  });

  // TODO: Improve
  it("should get an user", async function () {
    // Arrange.
    const userMock: User = {
      name: "foo",
      email: "foo@bar.com",
      password: "12345",
    };
    const emailMock = "foo@bar.com";

    // Act.
    await repository.createUser(userMock);
    const result = await repository.getUser(emailMock);

    // Assert.
    expect(result).toMatchInlineSnapshot(`
      {
        "email": "foo@bar.com",
        "id": "1",
        "name": "foo",
      }
    `);
  });

  it("should create new user", async function () {
    // Arrange.
    const userMock: User = {
      name: "foo",
      email: "foo@bar.com",
      password: "12345",
    };

    // Act.
    const result = await repository.createUser(userMock);

    // Assert.
    expect(result).toMatchInlineSnapshot(`
      {
        "email": "foo@bar.com",
        "id": "1",
        "name": "foo",
      }
    `);
  });

  it("should throw user exist", async function () {
    // Arrange.
    const userMock: User = {
      name: "foo",
      email: "foo@bar.com",
      password: "12345",
    };

    // Act.
    await repository.createUser(userMock);
    const createUserFn = () => repository.createUser(userMock);

    // Assert.
    expect(createUserFn).rejects.toThrowErrorMatchingInlineSnapshot(
      '"User already exists"'
    );
  });
});
