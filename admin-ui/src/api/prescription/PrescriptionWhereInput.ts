import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type PrescriptionWhereInput = {
  doctor?: UserWhereUniqueInput;
  id?: StringFilter;
  patient?: UserWhereUniqueInput;
};
