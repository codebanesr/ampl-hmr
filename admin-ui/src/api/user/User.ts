import { Prescription } from "../prescription/Prescription";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  prescriptionDoctor?: Array<Prescription>;
  prescriptionPatient?: Array<Prescription>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
