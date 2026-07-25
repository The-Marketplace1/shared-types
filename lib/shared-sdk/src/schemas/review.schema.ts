import { z } from "zod";

export const CreateReviewSchema = z.object({
  bookingId: z.string().uuid(),
  revieweeId: z.string().uuid(),
  rating: z.number().int().min(1).max(5, "Rating must be between 1 and 5"),
  comment: z.string().max(2000).optional(),
  isPublic: z.boolean().default(true),
});

export const ListReviewsSchema = z.object({
  revieweeId: z.string().uuid().optional(),
  reviewerId: z.string().uuid().optional(),
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
});

export type CreateReviewInput = z.infer<typeof CreateReviewSchema>;
export type ListReviewsInput = z.infer<typeof ListReviewsSchema>;
