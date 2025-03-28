import { Answer } from "../../enterprise/entities/answer";
import { AnswerRepository } from "../repositories/answers-repositories";

interface EditAnswerUseCaseRequest {
    authorId: string;
    answerId: string,
    content: string,
}

interface EditAnswerUseCaseRequestResponse {
  answer: Answer
}

export class EditAnswerUseCase {
  constructor(
    private answerRepository: AnswerRepository,
  ) {}
  
  async execute({ authorId, content, answerId }: EditAnswerUseCaseRequest) : Promise<EditAnswerUseCaseRequestResponse> {
    const answer = await this.answerRepository.findById(answerId)

    if (!answer) {
        throw new Error('Answer not found')
    }

    if (authorId != answer.authorId.toString()) {
        throw new Error('Not allowed.')
    }

    answer.content = content
    
    await this.answerRepository.save(answer)

    return {
      answer
    }
  }
}
