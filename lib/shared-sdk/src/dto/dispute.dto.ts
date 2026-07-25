import type { Dispute } from "../types/dispute.js";
import type { DisputeStatus } from "../enums/dispute-status.enum.js";

// --- Requests ---

export type CreateDisputeRequest = {
  bookingId: string;
  againstId: string;
  reason: string;
};

export type UpdateDisputeStatusRequest = {
  status: DisputeStatus;
  resolution?: string;
};

export type ListDisputesRequest = {
  status?: DisputeStatus;
  page?: number;
  limit?: number;
};

// --- Responses ---

export type DisputeResponse = Dispute;

export type ListDisputesResponse = {
  items: Dispute[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
};
