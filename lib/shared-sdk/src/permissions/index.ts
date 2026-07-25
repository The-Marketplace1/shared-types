 import { UserRole } from "../enums/user-role.enum.js";

/**
 * Platform permissions.
 * Format: resource:action
 */
export const Permission = {
  // User management
  USER_READ: "user:read",
  USER_UPDATE: "user:update",
  USER_SUSPEND: "user:suspend",
  USER_DELETE: "user:delete",

  // Booking
  BOOKING_CREATE: "booking:create",
  BOOKING_READ: "booking:read",
  BOOKING_UPDATE: "booking:update",
  BOOKING_CANCEL: "booking:cancel",
  BOOKING_COMPLETE: "booking:complete",

  // Payment
  PAYMENT_CREATE: "payment:create",
  PAYMENT_REFUND: "payment:refund",
  PAYMENT_VIEW: "payment:view",

  // Escrow
  ESCROW_HOLD: "escrow:hold",
  ESCROW_RELEASE: "escrow:release",
  ESCROW_VIEW: "escrow:view",

  // Review
  REVIEW_CREATE: "review:create",
  REVIEW_READ: "review:read",
  REVIEW_DELETE: "review:delete",

  // Dispute
  DISPUTE_CREATE: "dispute:create",
  DISPUTE_RESOLVE: "dispute:resolve",
  DISPUTE_ESCALATE: "dispute:escalate",

  // Admin
  ADMIN_FULL_ACCESS: "admin:full_access",
  ADMIN_USER_MANAGEMENT: "admin:user_management",
  ADMIN_AUDIT_LOGS: "admin:audit_logs",
} as const;

export type Permission = (typeof Permission)[keyof typeof Permission];

/**
 * Default permission sets per role.
 */
export const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  [UserRole.CUSTOMER]: [
    Permission.USER_READ,
    Permission.USER_UPDATE,
    Permission.BOOKING_CREATE,
    Permission.BOOKING_READ,
    Permission.BOOKING_CANCEL,
    Permission.PAYMENT_CREATE,
    Permission.PAYMENT_VIEW,
    Permission.REVIEW_CREATE,
    Permission.REVIEW_READ,
    Permission.DISPUTE_CREATE,
  ],
  [UserRole.PROFESSIONAL]: [
    Permission.USER_READ,
    Permission.USER_UPDATE,
    Permission.BOOKING_READ,
    Permission.BOOKING_UPDATE,
    Permission.BOOKING_COMPLETE,
    Permission.PAYMENT_VIEW,
    Permission.ESCROW_VIEW,
    Permission.REVIEW_READ,
    Permission.DISPUTE_CREATE,
  ],
  [UserRole.ADMIN]: Object.values(Permission) as Permission[],
};

/**
 * Check if a role has a given permission.
 */
export function hasPermission(role: UserRole, permission: Permission): boolean {
  return ROLE_PERMISSIONS[role]?.includes(permission) ?? false;
}

/**
 * Check if a role has all of the given permissions.
 */
export function hasAllPermissions(role: UserRole, permissions: Permission[]): boolean {
  return permissions.every((p) => hasPermission(role, p));
}
