export type TransactionType =
  | "payment"
  | "refund"
  | "escrow_hold"
  | "escrow_release"
  | "commission"
  | "payout";

export type Transaction = {
  id: string;
  type: TransactionType;
  referenceId: string; // bookingId, paymentId, etc.
  fromAccountId?: string;
  toAccountId?: string;
  amount: number;
  currency: string;
  description?: string;
  metadata?: Record<string, unknown>;
  createdAt: string;
};
