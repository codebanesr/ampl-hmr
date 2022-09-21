import { SortOrder } from "../../util/SortOrder";

export type PrescriptionOrderByInput = {
  createdAt?: SortOrder;
  doctorId?: SortOrder;
  id?: SortOrder;
  patientId?: SortOrder;
  updatedAt?: SortOrder;
};
