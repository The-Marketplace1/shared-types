export enum NotificationType {
  BOOKING_REQUEST = "booking_request",
  BOOKING_ACCEPTED = "booking_accepted",
  BOOKING_CANCELLED = "booking_cancelled",
  BOOKING_COMPLETED = "booking_completed",
  PAYMENT_RECEIVED = "payment_received",
  PAYMENT_FAILED = "payment_failed",
  PAYMENT_REFUNDED = "payment_refunded",
  ESCROW_RELEASED = "escrow_released",
  DISPUTE_OPENED = "dispute_opened",
  DISPUTE_RESOLVED = "dispute_resolved",
  REVIEW_RECEIVED = "review_received",
  SYSTEM_ALERT = "system_alert",
}

export enum NotificationChannel {
  IN_APP = "in_app",
  EMAIL = "email",
  SMS = "sms",
  PUSH = "push",
}
