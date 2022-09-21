import { PrescriptionCreateNestedManyWithoutUsersInput } from "./PrescriptionCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  prescriptionDoctor?: PrescriptionCreateNestedManyWithoutUsersInput;
  prescriptionPatient?: PrescriptionCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
