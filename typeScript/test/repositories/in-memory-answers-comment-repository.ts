import { PaginationParams } from "@/core/repositories/pagination-params";
import { AnswersCommentRepository } from "@/domain/forum/application/repositories/answers-comments.repository";
import { AnswersComment } from "@/domain/forum/enterprise/entities/answer-comment";

export class InMemoryAnswersCommentRepository
  implements AnswersCommentRepository
{
  public items: AnswersComment[] = [];

  async findById(id: string) {
    const AnswersComment = this.items.find((item) => item.id.toString() === id);

    if (!AnswersComment) {
      return null;
    }

    return AnswersComment;
  }

  async create(answersComment: AnswersComment) {
    this.items.push(answersComment);
  }

  async delete(answerComment: AnswersComment) {
    const itemIdenx = this.items.findIndex(
      (item) => item.id === answerComment.id
    );

    this.items.splice(itemIdenx, 1);
  }

  async findManyByAnswerId(answerId: string, { page }: PaginationParams) {
      const answerComments = this.items
        .filter((item) => item.answersId.toString() === answerId)
        .slice((page - 1) * 20, page * 20);
  
      return answerComments;
    }
}
