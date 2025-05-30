import { NotificationRepository } from "@/domain/notification/application/repositories/notification-repository";
import { Notification } from "@/domain/notification/enterprise/entities/notification";

export class InMemoryNotificationRepository implements NotificationRepository {
  public items: Notification[] = [];

  async create(notification: Notification) {
    this.items.push(notification);
  }
  async findById(id: string) {
    const notification = this.items.find((item) => item.id.toString() === id);

    if (!notification) {
      return null;
    }

    return notification;
  }
  async save(notification: Notification) {
    const itemIdenx = this.items.findIndex(
      (item) => item.id === notification.id
    );
    this.items[itemIdenx] = notification;
  }
}
