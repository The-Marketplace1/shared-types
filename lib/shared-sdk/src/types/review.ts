export type Review = {
  id: string;
  bookingId: string;
  reviewerId: string;
  revieweeId: string;
  rating: number; // 1–5
  comment?: string;
  isPublic: boolean;
  createdAt: string;
  updatedAt: string;
};
