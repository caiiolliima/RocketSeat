import { AnswerRepository } from "@/domain/forum/application/repositories/answers-repositories";
import { Answer } from "@/domain/forum/enterprise/entities/answer";

export class InMemoryAnswersRepository implements AnswerRepository {
  async findById(id: string) {
    const answer = this.items.find((item) => item.id.toString() === id);
    
    if (!answer) {
      return null;
    }
    
    return answer;
  }
  public items: Answer[] = []
  
  async create(answer: Answer) {
    this.items.push(answer)
  }
  
  async delete(answer: Answer) {
    const itemIdenx = this.items.findIndex((item) => item.id === answer.id);
    
    this.items.splice(itemIdenx, 1);
  }
  async save(answer: Answer) {
    const itemIdenx = this.items.findIndex((item) => item.id === answer.id);
    this.items[itemIdenx] = answer
}
}