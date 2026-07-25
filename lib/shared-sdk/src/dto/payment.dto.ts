import type { Payment } from "../types/payment.js";
import type { Escrow } from "../types/escrow.js";

// --- Requests ---

export type CreatePaymentIntentRequest = {
  bookingId: string;
  amount: number;
  currency: string;
  gateway?: string;
};

export type ConfirmPaymentRequest = {
  paymentId: string;
  gatewayTransactionId: string;
};

export type RefundPaymentRequest = {
  paymentId: string;
  amount?: number; // partial refund if provided
  reason?: string;
};

export type ReleaseEscrowRequest = {
  escrowId: string;
};

// --- Responses ---

export type PaymentResponse = Payment;

export type PaymentIntentResponse = {
  paymentId: string;
  clientSecret: string;
  amount: number;
  currency: string;
};

export type EscrowResponse = Escrow;
