import { PaginationParams } from "@/core/repositories/pagination-params";
import { QuestionCommentRepository } from "@/domain/forum/application/repositories/question-comments.repository";
import { QuestionComment } from "@/domain/forum/enterprise/entities/question-comment";

export class InMemoryQuestionCommentRepository
  implements QuestionCommentRepository
{
  public items: QuestionComment[] = [];

  async findById(id: string) {
    const questionComment = this.items.find(
      (item) => item.id.toString() === id
    );

    if (!questionComment) {
      return null;
    }

    return questionComment;
  }

  async create(questionComment: QuestionComment) {
    this.items.push(questionComment);
  }

  async delete(questionComment: QuestionComment) {
    const itemIdenx = this.items.findIndex(
      (item) => item.id === questionComment.id
    );

    this.items.splice(itemIdenx, 1);
  }

  async findManyByQuestionId(questionId: string, { page }: PaginationParams) {
    const questionComments = this.items
      .filter((item) => item.questionId.toString() === questionId)
      .slice((page - 1) * 20, page * 20);

    return questionComments;
  }
}
