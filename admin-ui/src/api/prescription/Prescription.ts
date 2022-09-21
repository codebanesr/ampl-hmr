import { User } from "../user/User";

export type Prescription = {
  createdAt: Date;
  doctor?: User | null;
  id: string;
  patient?: User | null;
  updatedAt: Date;
};
