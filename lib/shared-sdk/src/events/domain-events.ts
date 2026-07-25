import type { BaseEvent } from "./base-event.js";
import type { User } from "../types/user.js";
import type { Booking } from "../types/booking.js";
import type { Payment } from "../types/payment.js";
import type { Escrow } from "../types/escrow.js";
import type { Dispute } from "../types/dispute.js";
import type { Review } from "../types/review.js";

// User events
export type UserRegisteredEvent = BaseEvent<{ user: User }>;
export type UserUpdatedEvent = BaseEvent<{ userId: string; changes: Partial<User> }>;
export type UserSuspendedEvent = BaseEvent<{ userId: string; reason?: string }>;
export type UserVerifiedEvent = BaseEvent<{ userId: string }>;
export type UserLoginEvent = BaseEvent<{ userId: string; ipAddress?: string }>;

// Booking events
export type BookingCreatedEvent = BaseEvent<{ booking: Booking }>;
export type BookingAcceptedEvent = BaseEvent<{ bookingId: string; professionalId: string }>;
export type BookingCancelledEvent = BaseEvent<{ bookingId: string; cancelledById: string; reason?: string }>;
export type BookingCompletedEvent = BaseEvent<{ bookingId: string }>;
export type BookingDisputedEvent = BaseEvent<{ bookingId: string; disputeId: string }>;

// Payment events
export type PaymentInitiatedEvent = BaseEvent<{ payment: Payment }>;
export type PaymentSucceededEvent = BaseEvent<{ payment: Payment }>;
export type PaymentFailedEvent = BaseEvent<{ paymentId: string; reason?: string }>;
export type PaymentRefundedEvent = BaseEvent<{ paymentId: string; amount: number; currency: string }>;

// Escrow events
export type EscrowHeldEvent = BaseEvent<{ escrow: Escrow }>;
export type EscrowReleasedEvent = BaseEvent<{ escrowId: string; releasedTo: string }>;
export type EscrowRefundedEvent = BaseEvent<{ escrowId: string }>;

// Dispute events
export type DisputeOpenedEvent = BaseEvent<{ dispute: Dispute }>;
export type DisputeResolvedEvent = BaseEvent<{ disputeId: string; resolution: string }>;
export type DisputeEscalatedEvent = BaseEvent<{ disputeId: string }>;

// Review events
export type ReviewSubmittedEvent = BaseEvent<{ review: Review }>;
