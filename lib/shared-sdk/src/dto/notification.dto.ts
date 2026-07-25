import type { Notification } from "../types/notification.js";
import type { NotificationType, NotificationChannel } from "../enums/notification-type.enum.js";

// --- Requests ---

export type SendNotificationRequest = {
  userId: string;
  type: NotificationType;
  channel: NotificationChannel;
  title: string;
  body: string;
  metadata?: Record<string, unknown>;
};

export type MarkNotificationReadRequest = {
  notificationIds: string[];
};

export type ListNotificationsRequest = {
  isRead?: boolean;
  page?: number;
  limit?: number;
};

// --- Responses ---

export type NotificationResponse = Notification;

export type ListNotificationsResponse = {
  items: Notification[];
  total: number;
  unreadCount: number;
  page: number;
  limit: number;
  hasMore: boolean;
};
