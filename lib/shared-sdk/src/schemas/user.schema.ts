import { z } from "zod";
import { UserStatus } from "../enums/user-status.enum.js";
import { UserRole } from "../enums/user-role.enum.js";

export const UpdateUserSchema = z.object({
  name: z.string().min(2).optional(),
  phone: z.string().min(7).optional(),
  avatarUrl: z.string().url().optional(),
});

export const UpdateUserStatusSchema = z.object({
  status: z.nativeEnum(UserStatus),
  reason: z.string().max(500).optional(),
});

export const ListUsersSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  role: z.nativeEnum(UserRole).optional(),
  status: z.nativeEnum(UserStatus).optional(),
  search: z.string().optional(),
});

export type UpdateUserInput = z.infer<typeof UpdateUserSchema>;
export type UpdateUserStatusInput = z.infer<typeof UpdateUserStatusSchema>;
export type ListUsersInput = z.infer<typeof ListUsersSchema>;
