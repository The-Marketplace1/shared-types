import type { NotificationChannel, NotificationType } from "../enums/notification-type.enum.js";

export type Notification = {
  id: string;
  userId: string;
  type: NotificationType;
  channel: NotificationChannel;
  title: string;
  body: string;
  isRead: boolean;
  metadata?: Record<string, unknown>;
  createdAt: string;
};
