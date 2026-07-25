import type { User } from "../types/user.js";
import type { UserStatus } from "../enums/user-status.enum.js";

// --- Requests ---

export type UpdateUserRequest = {
  name?: string;
  phone?: string;
  avatarUrl?: string;
};

export type UpdateUserStatusRequest = {
  status: UserStatus;
  reason?: string;
};

export type ListUsersRequest = {
  page?: number;
  limit?: number;
  role?: string;
  status?: UserStatus;
  search?: string;
};

// --- Responses ---

export type UserResponse = User;

export type ListUsersResponse = {
  items: User[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
};
