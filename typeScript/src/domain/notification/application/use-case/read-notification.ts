import { Either, left, right } from "@/core/either";
import { Notification } from "../../enterprise/entities/notification";
import { NotificationRepository } from "../repositories/notification-repository";
import { ResourceNotFoundError } from "@/core/errors/errors/resource-not-found-error";
import { NotAllowedError } from "@/core/errors/errors/not-allowed-error";

interface ReadNotificationUseCaseRequest {
  recipientId: string;
  notificationId: string;
}

type ReadNotificationUseCaseRequestResponse = Either<
ResourceNotFoundError | NotAllowedError,
  {
    notification: Notification;
  }
>;

export class ReadNotificationUseCase {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute({
    recipientId,
    notificationId,
  }: ReadNotificationUseCaseRequest): Promise<ReadNotificationUseCaseRequestResponse> {
    const notification = await this.notificationRepository.findById(notificationId);

    if (!notification) {
      return left(new ResourceNotFoundError());
    }

    if (recipientId != notification.recipientId.toString()) {
      return left(new NotAllowedError());
    }

    notification.read()

    await this.notificationRepository.save(notification);

    return right({ notification });
  }
}
