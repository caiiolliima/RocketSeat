import { Answer } from "../../enterprise/entities/answer";
import { AnswerRepository } from "../repositories/answers-repositories";

interface FetchQuestionAnswersUseCaseRequest {
  questionId: string
  page: number;
}

interface FetchQuestionAnswersUseCaseRequestResponse {
  answer: Answer[];
}

export class FetchQuestionAnswersUseCase {
  constructor(private answersRepository: AnswerRepository) {}

  async execute({
    questionId,
    page,
  }: FetchQuestionAnswersUseCaseRequest): Promise<FetchQuestionAnswersUseCaseRequestResponse> {
    const answer = await this.answersRepository.findManyQuestionId(questionId,{page});

    return {
        answer
    }
    
  }
}
