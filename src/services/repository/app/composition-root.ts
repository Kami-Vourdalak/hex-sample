import { Repository } from "@/services/repository/app/repository";
import { ForMonitorStubAdapter } from "@/services/repository/adapters/drivens";
import { UserManagerProxy } from "@/services/repository/adapters/driver";

export const compositionMock = () => {
  const monitorStub = new ForMonitorStubAdapter();
  const repositoryMock = new Repository(monitorStub);

  const userManagerProxy = new UserManagerProxy(repositoryMock);

  return { userManagerProxy };
};

export const { userManagerProxy } = compositionMock();
