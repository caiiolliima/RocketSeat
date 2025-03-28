import { AnswerRepository } from "../repositories/answers-repositories";

interface DeleteAnswerUseCaseRequest {
    authorId: string;
    answerId: string;
}

interface DeleteAnswerUseCaseRequestResponse {}

export class DeleteAnswerUseCase {
  constructor(
    private answerRepository: AnswerRepository,
  ) {}

  async execute({ answerId, authorId }: DeleteAnswerUseCaseRequest) : Promise<DeleteAnswerUseCaseRequestResponse> {
    const answer = await this.answerRepository.findById(answerId)

    if (!answer) {
        throw new Error('Answer not found')
    }

    if (authorId != answer.authorId.toString()) {
        throw new Error('Not allowed.')
    }
    
    await this.answerRepository.delete(answer)

    return {}
  }
}
