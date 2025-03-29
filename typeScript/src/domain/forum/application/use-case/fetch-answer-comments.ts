import { AnswersComment } from "../../enterprise/entities/answer-comment";
import { AnswersCommentRepository } from "../repositories/answers-comments.repository";

interface FetchAnswerCommentsUseCaseRequest {
  answersId: string
  page: number;
}

interface FetchAnswerCommentResponse {
  answersComments: AnswersComment[];
}

export class FetchAnswerCommentsUseCase {
  constructor(private answerCommentRepository: AnswersCommentRepository) {}

  async execute({
    answersId,
    page,
  }: FetchAnswerCommentsUseCaseRequest): Promise<FetchAnswerCommentResponse> {
    const answersComments = await this.answerCommentRepository.findManyByAnswerId(answersId, {page});

    return {
        answersComments
    }
    
  }
}
