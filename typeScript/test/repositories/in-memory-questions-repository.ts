import { PaginationParams } from "@/core/repositories/pagination-params";
import { QuestionRepository } from "@/domain/forum/application/repositories/question-repositories";
import { Question } from "@/domain/forum/enterprise/entities/question";

export class InMemoryQuestionRepository implements QuestionRepository {
  public items: Question[] = [];
  
  async findById(id: string) {
    const question = this.items.find((item) => item.id.toString() === id);
    
    if (!question) {
      return null;
    }
    
    return question;
  }
    
  async findBySlug(slug: string) {
    const question = this.items.find((item) => item.slug.value === slug);
    
    if (!question) {
      return null;
    }
    
    return question;
  }
  
  async create(question: Question) {
    this.items.push(question);
  }
  
  async delete(question: Question) {
    const itemIdenx = this.items.findIndex((item) => item.id === question.id);
    
    this.items.splice(itemIdenx, 1);
  }
  async save(question: Question) {
    const itemIdenx = this.items.findIndex((item) => item.id === question.id);
    this.items[itemIdenx] = question
  }
  async findManyRecent({ page }: PaginationParams) {
    const questions = this.items.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()).slice((page - 1) * 20, page * 20)

    return questions;
  }
}
