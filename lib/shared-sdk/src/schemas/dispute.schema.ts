import { z } from "zod";
import { DisputeStatus } from "../enums/dispute-status.enum.js";

export const CreateDisputeSchema = z.object({
  bookingId: z.string().uuid(),
  againstId: z.string().uuid(),
  reason: z.string().min(20, "Please provide a detailed reason").max(2000),
});

export const UpdateDisputeStatusSchema = z.object({
  status: z.nativeEnum(DisputeStatus),
  resolution: z.string().max(2000).optional(),
});

export const ListDisputesSchema = z.object({
  status: z.nativeEnum(DisputeStatus).optional(),
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
});

export type CreateDisputeInput = z.infer<typeof CreateDisputeSchema>;
export type UpdateDisputeStatusInput = z.infer<typeof UpdateDisputeStatusSchema>;
export type ListDisputesInput = z.infer<typeof ListDisputesSchema>;
