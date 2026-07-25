import type { UserRole } from "../enums/user-role.enum.js";
import type { UserStatus } from "../enums/user-status.enum.js";

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  status: UserStatus;
  avatarUrl?: string;
  createdAt: string;
  updatedAt: string;
};
