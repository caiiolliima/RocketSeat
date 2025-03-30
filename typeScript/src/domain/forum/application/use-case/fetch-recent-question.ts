import { Either, right } from "@/core/either";
import { Question } from "../../enterprise/entities/question";
import { QuestionRepository } from "../repositories/question-repositories";

interface FetchRecentQuestionUseCaseRequest {
  page: number;
}

type FetchRecentQuestionUseCaseRequestResponse = Either<
  null,
  {
    question: Question[];
  }
>;

export class FetchRecentQuestionUseCase {
  constructor(private questionRepository: QuestionRepository) {}

  async execute({
    page,
  }: FetchRecentQuestionUseCaseRequest): Promise<FetchRecentQuestionUseCaseRequestResponse> {
    const question = await this.questionRepository.findManyRecent({ page });

    return right({
      question,
    });
  }
}
