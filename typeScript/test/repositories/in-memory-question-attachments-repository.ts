import { PaginationParams } from "@/core/repositories/pagination-params";
import { QuestionAttachmentRepository } from "@/domain/forum/application/repositories/question-attachment-repository";
import { QuestionAttachment } from "@/domain/forum/enterprise/entities/question-attachment";

export class InMemoryQuestionAttachmentRepository
  implements QuestionAttachmentRepository
{
  public items: QuestionAttachment[] = [];
  async findManyQuestionId(questionId: string) {
    const questionAttachments = this.items.filter(
      (item) => item.questionId.toString() === questionId
    );
    
    return questionAttachments;
  }
  async deleteManyByQuestionId(questionId: string): Promise<void> {
    const questionAttachments = this.items.filter(
      (item) => item.questionId.toString() != questionId
    )
    this.items = questionAttachments
  }
}
