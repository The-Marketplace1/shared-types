/**
 * @workspace/shared-sdk
 *
 * Single source of truth for all shared contracts, types, schemas, constants,
 * utilities, errors, and API clients across the Marketplace platform.
 *
 * Sub-path imports are also available for tree-shaking:
 *   import { User } from "@workspace/shared-sdk/types"
 *   import { BookingStatus } from "@workspace/shared-sdk/enums"
 *   import { LoginSchema } from "@workspace/shared-sdk/schemas"
 *   import { APP_CONFIG, PLATFORM } from "@workspace/shared-sdk/constants"
 *   import { formatCurrency } from "@workspace/shared-sdk/utils"
 *   import { AppError } from "@workspace/shared-sdk/errors"
 *   import { AuthClient } from "@workspace/shared-sdk/clients"
 *   import { hasPermission } from "@workspace/shared-sdk/permissions"
 */

// Core domain types
export type * from "./types/index.js";

// Enums
export * from "./enums/index.js";

// Data Transfer Objects (request/response shapes)
export * from "./dto/index.js";

// Zod validation schemas + inferred input types
export * from "./schemas/index.js";

// Platform constants, error codes, event names, currency/country codes
export * from "./constants/index.js";

// Pure utility functions
export * from "./utils/index.js";

// Error classes
export * from "./errors/index.js";

// Typed domain event shapes
export type * from "./events/index.js";

// Role-based permissions
export * from "./permissions/index.js";

// API clients
export * from "./clients/index.js";
