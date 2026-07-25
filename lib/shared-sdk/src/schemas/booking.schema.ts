import { z } from "zod";
import { BookingStatus } from "../enums/booking-status.enum.js";

export const CreateBookingSchema = z.object({
  professionalId: z.string().uuid(),
  serviceId: z.string().uuid(),
  scheduledTime: z.string().datetime({ message: "Invalid ISO datetime" }),
  estimatedDurationMinutes: z.number().int().positive().optional(),
  address: z.string().min(1).optional(),
  notes: z.string().max(1000).optional(),
});

export const UpdateBookingSchema = z.object({
  scheduledTime: z.string().datetime().optional(),
  estimatedDurationMinutes: z.number().int().positive().optional(),
  address: z.string().min(1).optional(),
  notes: z.string().max(1000).optional(),
});

export const UpdateBookingStatusSchema = z.object({
  status: z.nativeEnum(BookingStatus),
  reason: z.string().max(500).optional(),
});

export const ListBookingsSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  status: z.nativeEnum(BookingStatus).optional(),
  fromDate: z.string().datetime().optional(),
  toDate: z.string().datetime().optional(),
});

export type CreateBookingInput = z.infer<typeof CreateBookingSchema>;
export type UpdateBookingInput = z.infer<typeof UpdateBookingSchema>;
export type UpdateBookingStatusInput = z.infer<typeof UpdateBookingStatusSchema>;
export type ListBookingsInput = z.infer<typeof ListBookingsSchema>;
