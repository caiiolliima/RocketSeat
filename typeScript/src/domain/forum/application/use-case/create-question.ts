import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { Question } from "../../enterprise/entities/question";
import { QuestionRepository } from "../repositories/question-repositories";

interface CreateQuestionUseCaseRequest {
    authorId: string, 
    title: string,
    content: string,
}

interface CreateQuestionUseCaseRequestResponse {}

export class CreateQuestionUseCase {
  constructor(
    private questionRepository: QuestionRepository,
  ) {}

  async execute({ authorId, title, content }: CreateQuestionUseCaseRequest) : Promise<CreateQuestionUseCaseRequestResponse> {
    const question = Question.crea  te({
      authorId: new UniqueEntityId(authorId),
      title,
      content,
    })

    await this.questionRepository.create(question)

    return {question}
  }
}
