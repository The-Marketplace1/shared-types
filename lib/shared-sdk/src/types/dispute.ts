import type { DisputeStatus } from "../enums/dispute-status.enum.js";

export type Dispute = {
  id: string;
  bookingId: string;
  raisedById: string;
  againstId: string;
  reason: string;
  status: DisputeStatus;
  resolution?: string;
  resolvedById?: string;
  resolvedAt?: string;
  createdAt: string;
  updatedAt: string;
};
