import type { EventName } from "../constants/event-names.js";

export type BaseEvent<TPayload = unknown> = {
  /** Unique event ID (UUID) */
  id: string;
  /** Event name / type */
  name: EventName;
  /** ISO timestamp when the event was emitted */
  timestamp: string;
  /** The event payload */
  payload: TPayload;
  /** Optional correlation / trace ID */
  correlationId?: string;
};
