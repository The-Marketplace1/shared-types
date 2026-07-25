import type { Booking } from "../types/booking.js";
import type { BookingStatus } from "../enums/booking-status.enum.js";

// --- Requests ---

export type CreateBookingRequest = {
  professionalId: string;
  serviceId: string;
  scheduledTime: string;
  estimatedDurationMinutes?: number;
  address?: string;
  notes?: string;
};

export type UpdateBookingRequest = {
  scheduledTime?: string;
  estimatedDurationMinutes?: number;
  address?: string;
  notes?: string;
};

export type UpdateBookingStatusRequest = {
  status: BookingStatus;
  reason?: string;
};

export type ListBookingsRequest = {
  page?: number;
  limit?: number;
  status?: BookingStatus;
  fromDate?: string;
  toDate?: string;
};

// --- Responses ---

export type BookingResponse = Booking;

export type ListBookingsResponse = {
  items: Booking[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
};
