import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PrescriptionCreateInput = {
  doctor?: UserWhereUniqueInput | null;
  patient?: UserWhereUniqueInput | null;
};
