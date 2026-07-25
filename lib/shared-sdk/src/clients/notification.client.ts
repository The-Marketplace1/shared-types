import { BaseClient, type ClientConfig, type RequestOptions } from "./base-client.js";
import type {
  SendNotificationRequest,
  MarkNotificationReadRequest,
  ListNotificationsRequest,
  NotificationResponse,
  ListNotificationsResponse,
} from "../dto/notification.dto.js";

export class NotificationClient extends BaseClient {
  constructor(config: ClientConfig) {
    super(config);
  }

  async send(body: SendNotificationRequest, opts?: RequestOptions): Promise<NotificationResponse> {
    const { data } = await this.post<NotificationResponse>("/notifications", body, opts);
    return data;
  }

  async list(params: ListNotificationsRequest = {}, opts?: RequestOptions): Promise<ListNotificationsResponse> {
    const qs = new URLSearchParams(params as Record<string, string>).toString();
    const { data } = await this.get<ListNotificationsResponse>(`/notifications${qs ? `?${qs}` : ""}`, opts);
    return data;
  }

  async markRead(body: MarkNotificationReadRequest, opts?: RequestOptions): Promise<{ message: string }> {
    const { data } = await this.patch<{ message: string }>("/notifications/read", body, opts);
    return data;
  }

  async markAllRead(opts?: RequestOptions): Promise<{ message: string }> {
    const { data } = await this.post<{ message: string }>("/notifications/read-all", undefined, opts);
    return data;
  }
}
