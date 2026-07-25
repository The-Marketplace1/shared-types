import type { PaymentStatus } from "../enums/payment-status.enum.js";

export type Payment = {
  id: string;
  bookingId: string;
  customerId: string;
  professionalId: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  gateway: string;
  gatewayTransactionId?: string;
  metadata?: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
};
