import { IForMonitoring } from "@/services/repository/ports/drivens";

export class ForMonitorStubAdapter implements IForMonitoring {
  log(event: string, message: string): void {
    console.log(event, message);
  }
}
