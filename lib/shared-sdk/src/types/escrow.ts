import type { EscrowStatus } from "../enums/escrow-status.enum.js";

export type Escrow = {
  id: string;
  paymentId: string;
  bookingId: string;
  amount: number;
  currency: string;
  status: EscrowStatus;
  heldAt: string;
  releasedAt?: string;
  refundedAt?: string;
  createdAt: string;
  updatedAt: string;
};
