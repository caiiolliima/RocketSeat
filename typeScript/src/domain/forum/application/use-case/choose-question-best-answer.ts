import { Question } from "../../enterprise/entities/question";
import { QuestionRepository } from "../repositories/question-repositories";
import { AnswerRepository } from "../repositories/answers-repositories";

interface ChooseQuestionBestAnswerUseCaseRequest {
  authorId: string;
  answerId: string;
}

interface ChooseQuestionBestAnswerUseCaseRequestResponse {
  question: Question;
}

export class ChooseQuestionBestAnswerUseCase {
  constructor(
    private answerRepositoru: AnswerRepository,
    private questionRepository: QuestionRepository
  ) {}

  async execute({
    authorId,
    answerId,
  }: ChooseQuestionBestAnswerUseCaseRequest): Promise<ChooseQuestionBestAnswerUseCaseRequestResponse> {
    const answer = await this.answerRepositoru.findById(answerId);

    if (!answer) {
      throw new Error("Answer not found");
    }
    const question = await this.questionRepository.findById(
      answer.questionId.toString()
    );

    if (!question) {
      throw new Error("Question not found");
    }

    if (authorId != question.authorId.toString()) {
      throw new Error("Not allowed...");
    }

    question.bestAnswerId = answer.id;

    await this.questionRepository.save(question);

    return {
      question,
    };
  }
}
