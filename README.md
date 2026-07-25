# Shared Types

## Overview

The **shared-types** repository is the central source of truth for all shared TypeScript types, interfaces, enums, Data Transfer Objects (DTOs), API contracts, and event contracts used across the Marketplace platform.

It ensures every service and application communicates using the same data structures, reducing duplication, preventing contract drift, and improving maintainability.

This repository contains **type definitions only**. It does not contain business logic, API implementations, databases, or service-specific functionality.

---

# Purpose

The shared-types repository exists to:

- Share common TypeScript types
- Share API request and response contracts
- Share DTOs
- Share event contracts
- Share enums
- Share reusable interfaces
- Share validation-related types
- Standardise communication between services
- Prevent duplicated type definitions

---

# Scope

This repository provides contracts for:

- Authentication
- Users
- Professionals
- Customers
- Services
- Categories
- Bookings
- Payments
- Escrow
- Reviews
- Notifications
- Realtime events
- Communication
- Chat
- Calls
- Masked numbers
- Analytics
- Administration
- Errors
- Pagination
- API responses

---

# Technology Stack

- TypeScript
- Node.js
- pnpm
- ESLint
- Prettier
- GitHub Actions

---

# Responsibilities

This repository is responsible for:

- Shared interfaces
- Shared types
- Shared enums
- Shared DTOs
- Shared API contracts
- Shared event payloads
- Shared request models
- Shared response models
- Shared pagination models
- Shared validation types
- Shared utility types

---

# What This Repository Does NOT Contain

This repository does **not** contain:

- Business logic
- Controllers
- Services
- API routes
- Database models
- SQL
- Authentication logic
- Payment processing
- Notification delivery
- Realtime servers
- HTTP clients
- React components
- Backend implementations

---

# Consumers

The following repositories depend on this package:

- auth-service
- api-gateway
- backend-api
- payment-service
- notification-service
- realtime-service
- communication-service
- customer-app
- professional-app
- admin-dashboard

Every repository imports shared contracts from **shared-types** instead of redefining them.

---

# Event Contracts

Marketplace services communicate using shared event definitions.

Examples include:

- booking.created
- booking.updated
- booking.completed
- booking.cancelled
- payment.created
- payment.authorized
- payment.completed
- payment.failed
- escrow.created
- escrow.released
- withdrawal.requested
- withdrawal.completed
- notification.sent
- notification.failed
- conversation.created
- conversation.archived
- message.sent
- message.deleted
- call.started
- call.connected
- call.ended
- review.created
- professional.verified

---

# API Contracts

Shared request and response models include:

- Authentication
- User Profiles
- Professional Profiles
- Services
- Categories
- Bookings
- Payments
- Escrow
- Notifications
- Reviews
- Chat
- Calls
- Analytics
- Administration
- Pagination
- Success Responses
- Error Responses
- Validation Errors

---

# Versioning

This package follows Semantic Versioning.

- **MAJOR** – Breaking contract changes
- **MINOR** – New backwards-compatible contracts
- **PATCH** – Bug fixes and documentation updates

Breaking changes should be carefully coordinated across all consuming repositories.

---

# Development Guidelines

When adding new shared contracts:

- Keep contracts framework-agnostic.
- Avoid business logic.
- Avoid service-specific implementations.
- Reuse existing definitions where possible.
- Maintain backwards compatibility whenever possible.
- Document breaking changes.

---

# Testing

Validation should ensure:

- TypeScript compiles successfully.
- Public exports are valid.
- No circular dependencies exist.
- Event contracts remain consistent.
- API contracts remain backwards compatible where required.

---

# CI/CD

Every change should pass:

- TypeScript compilation
- Linting
- Formatting checks
- Package build
- Export validation
- Dependency validation

No release should be published unless all checks succeed.

---

# Installation

```bash
pnpm add @marketplace/shared-types
```

---

# Usage

```typescript
import { Booking, PaymentStatus, UserRole } from "@marketplace/shared-types";
```

All Marketplace repositories should import shared contracts from this package rather than creating duplicate definitions.

---

# License

This repository is licensed under the Marketplace project's chosen license.

See the **LICENSE** file for details.
