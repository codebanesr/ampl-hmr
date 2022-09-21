import { PrescriptionUpdateManyWithoutUsersInput } from "./PrescriptionUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  prescriptionDoctor?: PrescriptionUpdateManyWithoutUsersInput;
  prescriptionPatient?: PrescriptionUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
