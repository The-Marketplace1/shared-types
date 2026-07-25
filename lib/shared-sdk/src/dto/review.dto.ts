import type { Review } from "../types/review.js";

// --- Requests ---

export type CreateReviewRequest = {
  bookingId: string;
  revieweeId: string;
  rating: number;
  comment?: string;
  isPublic?: boolean;
};

export type ListReviewsRequest = {
  revieweeId?: string;
  reviewerId?: string;
  page?: number;
  limit?: number;
};

// --- Responses ---

export type ReviewResponse = Review;

export type ListReviewsResponse = {
  items: Review[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
  averageRating?: number;
};
