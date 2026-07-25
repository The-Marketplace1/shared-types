export const EventName = {
  // User events
  USER_REGISTERED: "user.registered",
  USER_UPDATED: "user.updated",
  USER_SUSPENDED: "user.suspended",
  USER_VERIFIED: "user.verified",
  USER_LOGIN: "user.login",
  USER_LOGOUT: "user.logout",

  // Booking events
  BOOKING_CREATED: "booking.created",
  BOOKING_ACCEPTED: "booking.accepted",
  BOOKING_CANCELLED: "booking.cancelled",
  BOOKING_COMPLETED: "booking.completed",
  BOOKING_DISPUTED: "booking.disputed",

  // Payment events
  PAYMENT_INITIATED: "payment.initiated",
  PAYMENT_SUCCEEDED: "payment.succeeded",
  PAYMENT_FAILED: "payment.failed",
  PAYMENT_REFUNDED: "payment.refunded",

  // Escrow events
  ESCROW_HELD: "escrow.held",
  ESCROW_RELEASED: "escrow.released",
  ESCROW_REFUNDED: "escrow.refunded",

  // Dispute events
  DISPUTE_OPENED: "dispute.opened",
  DISPUTE_RESOLVED: "dispute.resolved",
  DISPUTE_ESCALATED: "dispute.escalated",

  // Review events
  REVIEW_SUBMITTED: "review.submitted",

  // Notification events
  NOTIFICATION_SENT: "notification.sent",

  // Realtime events
  REALTIME_CONNECT: "realtime.connect",
  REALTIME_DISCONNECT: "realtime.disconnect",
  REALTIME_BOOKING_UPDATE: "realtime.booking_update",
  REALTIME_LOCATION_UPDATE: "realtime.location_update",
  REALTIME_MESSAGE: "realtime.message",
} as const;

export type EventName = (typeof EventName)[keyof typeof EventName];
