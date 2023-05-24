import { Admin } from "./Admin";

export type AdminState = {
  authChecked: boolean;
  admin: Admin | undefined
};
