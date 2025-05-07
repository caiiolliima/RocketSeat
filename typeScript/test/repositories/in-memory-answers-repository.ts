import { PaginationParams } from "@/core/repositories/pagination-params";
import { AnswerAttachmentRepository } from "@/domain/forum/application/repositories/answers-attachments-repository";
import { AnswerRepository } from "@/domain/forum/application/repositories/answers-repositories";
import { Answer } from "@/domain/forum/enterprise/entities/answer";

export class InMemoryAnswersRepository implements AnswerRepository {
  public items: Answer[] = [];
  
  constructor (
    private answerAttachmentREpository: AnswerAttachmentRepository,
  ) {}
  
  async findById(id: string) {
    const answer = this.items.find((item) => item.id.toString() === id);

    if (!answer) {
      return null;
    }

    return answer;
  }

  async create(answer: Answer) {
    this.items.push(answer);
  }

  async delete(answer: Answer) {
    const itemIdenx = this.items.findIndex((item) => item.id === answer.id);

    this.items.splice(itemIdenx, 1);

    this.answerAttachmentREpository.deleteManyByAnswerId(answer.id.toString())
  }
  async save(answer: Answer) {
    const itemIdenx = this.items.findIndex((item) => item.id === answer.id);
    this.items[itemIdenx] = answer;
  }

  async findManyQuestionId(questionId: string, { page }: PaginationParams) {
    const answers = this.items
      .filter((item) => item.questionId.toString() === questionId)
      .slice((page - 1) * 20, page * 20);

    return answers;
  }
}
