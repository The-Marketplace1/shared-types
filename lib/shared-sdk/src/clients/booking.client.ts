import { BaseClient, type ClientConfig, type RequestOptions } from "./base-client.js";
import { BookingStatus } from "../enums/booking-status.enum.js";
import type {
  CreateBookingRequest,
  UpdateBookingRequest,
  UpdateBookingStatusRequest,
  ListBookingsRequest,
  BookingResponse,
  ListBookingsResponse,
} from "../dto/booking.dto.js";

export class BookingClient extends BaseClient {
  constructor(config: ClientConfig) {
    super(config);
  }

  async create(body: CreateBookingRequest, opts?: RequestOptions): Promise<BookingResponse> {
    const { data } = await this.post<BookingResponse>("/bookings", body, opts);
    return data;
  }

  async getById(id: string, opts?: RequestOptions): Promise<BookingResponse> {
    const { data } = await this.get<BookingResponse>(`/bookings/${id}`, opts);
    return data;
  }

  async update(id: string, body: UpdateBookingRequest, opts?: RequestOptions): Promise<BookingResponse> {
    const { data } = await this.patch<BookingResponse>(`/bookings/${id}`, body, opts);
    return data;
  }

  async updateStatus(id: string, body: UpdateBookingStatusRequest, opts?: RequestOptions): Promise<BookingResponse> {
    const { data } = await this.patch<BookingResponse>(`/bookings/${id}/status`, body, opts);
    return data;
  }

  async list(params: ListBookingsRequest = {}, opts?: RequestOptions): Promise<ListBookingsResponse> {
    const qs = new URLSearchParams(params as Record<string, string>).toString();
    const { data } = await this.get<ListBookingsResponse>(`/bookings${qs ? `?${qs}` : ""}`, opts);
    return data;
  }

  async cancel(id: string, reason?: string, opts?: RequestOptions): Promise<BookingResponse> {
    return this.updateStatus(id, { status: BookingStatus.CANCELLED, reason }, opts);
  }

  async accept(id: string, opts?: RequestOptions): Promise<BookingResponse> {
    return this.updateStatus(id, { status: BookingStatus.ACCEPTED }, opts);
  }

  async complete(id: string, opts?: RequestOptions): Promise<BookingResponse> {
    return this.updateStatus(id, { status: BookingStatus.COMPLETED }, opts);
  }
}
