import { DomainEvents } from "@/core/events/domain-events";
import { EventHandler } from "@/core/events/event-handler";
import { AnswerRepository } from "@/domain/forum/application/repositories/answers-repositories";
import { QuestionBestAnswerChoseEvent } from "@/domain/forum/enterprise/entities/events/question-best-answer-choosen-event";
import { SendNotificationUseCase } from "../use-case/send-notification";

export class OnQuestionBestAnswerChosen implements EventHandler {
  constructor(
    private answerRepository: AnswerRepository,
    private sendNotification: SendNotificationUseCase
  ) {
    this.setupSubscription();
  }
  setupSubscription(): void {
    DomainEvents.register(
      this.sendQuestionBestAnswerNotification.bind(this),
      QuestionBestAnswerChoseEvent.name
    );
  }

  private async sendQuestionBestAnswerNotification({
    question,
    bestAnswerId,
  }: QuestionBestAnswerChoseEvent) {
    const answer = await this.answerRepository.findById(
      bestAnswerId.toString()
    );

    if (answer) {
      await this.sendNotification.execute({
        recipientId: answer.authorId.toString(),
        title: `Sua resposta foi escolhida!`,
        content: `A resposta que você enviou em "${question.title.substring(0, 20).concat('...')}" foi escolhida pelo autor!`,
      });
    }
  }
}
