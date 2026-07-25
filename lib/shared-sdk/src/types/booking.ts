import type { BookingStatus } from "../enums/booking-status.enum.js";

export type Booking = {
  id: string;
  customerId: string;
  professionalId: string;
  serviceId: string;
  status: BookingStatus;
  scheduledTime: string;
  estimatedDurationMinutes?: number;
  address?: string;
  notes?: string;
  totalAmount?: number;
  currency?: string;
  createdAt: string;
  updatedAt: string;
};
