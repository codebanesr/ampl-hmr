import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PrescriptionListRelationFilter } from "../prescription/PrescriptionListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  prescriptionDoctor?: PrescriptionListRelationFilter;
  prescriptionPatient?: PrescriptionListRelationFilter;
  username?: StringFilter;
};
