import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PrescriptionUpdateInput = {
  doctor?: UserWhereUniqueInput | null;
  patient?: UserWhereUniqueInput | null;
};
