import { AnswersCommentRepository } from "../repositories/answers-comments.repository";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { AnswerRepository } from "../repositories/answers-repositories";
import { AnswersComment } from "../../enterprise/entities/answer-comment";
import { Either, left, right } from "@/core/either";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";
import { NotAllowedError } from "./errors/not-allowed-error";

interface CommentOnAnswersUseCaseRequest {
  authorId: string;
  answersId: string;
  content: string;
}

type CommentOnAnswersUseCaseRequestResponse = Either<
  ResourceNotFoundError | NotAllowedError,
  {
    answersComment: AnswersComment;
  }
>;

export class CommentOnAnswersUseCase {
  constructor(
    private answersRepository: AnswerRepository,
    private answersCommentRepository: AnswersCommentRepository
  ) {}

  async execute({
    authorId,
    answersId,
    content,
  }: CommentOnAnswersUseCaseRequest): Promise<CommentOnAnswersUseCaseRequestResponse> {
    const answers = await this.answersRepository.findById(answersId);

    if (!answers) {
      return left(new ResourceNotFoundError());
    }

    const answersComment = AnswersComment.create({
      authorId: new UniqueEntityId(authorId),
      answersId: new UniqueEntityId(answersId),
      content,
    });

    await this.answersCommentRepository.create(answersComment);

    return right({
      answersComment,
    });
  }
}
