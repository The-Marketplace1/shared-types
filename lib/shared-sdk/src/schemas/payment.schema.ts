import { z } from "zod";

export const CreatePaymentIntentSchema = z.object({
  bookingId: z.string().uuid(),
  amount: z.number().positive("Amount must be positive"),
  currency: z.string().length(3, "Currency must be a 3-letter ISO code").toUpperCase(),
  gateway: z.string().optional(),
});

export const ConfirmPaymentSchema = z.object({
  paymentId: z.string().uuid(),
  gatewayTransactionId: z.string().min(1),
});

export const RefundPaymentSchema = z.object({
  paymentId: z.string().uuid(),
  amount: z.number().positive().optional(),
  reason: z.string().max(500).optional(),
});

export const ReleaseEscrowSchema = z.object({
  escrowId: z.string().uuid(),
});

export type CreatePaymentIntentInput = z.infer<typeof CreatePaymentIntentSchema>;
export type ConfirmPaymentInput = z.infer<typeof ConfirmPaymentSchema>;
export type RefundPaymentInput = z.infer<typeof RefundPaymentSchema>;
export type ReleaseEscrowInput = z.infer<typeof ReleaseEscrowSchema>;
