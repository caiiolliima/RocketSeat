import { AnswersCommentRepository } from "../repositories/answers-comments.repository";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { AnswerRepository } from "../repositories/answers-repositories";
import { AnswersComment } from "../../enterprise/entities/answer-comment";

interface CommentOnAnswersUseCaseRequest {
  authorId: string;
  answersId: string;
  content: string;
}

interface CommentOnAnswersUseCaseRequestResponse {
  answersComment: AnswersComment;
}

export class CommentOnAnswersUseCase {
  constructor(
    private answersRepository: AnswerRepository,
    private answersCommentRepository: AnswersCommentRepository) {}

  async execute({
    authorId,
    answersId,
    content,
  }: CommentOnAnswersUseCaseRequest): Promise<CommentOnAnswersUseCaseRequestResponse> {
    const answers = await this.answersRepository.findById(answersId)

    if (!answers) {
        throw new Error("Answers not found.")
    }

    const answersComment = AnswersComment.create({
        authorId: new UniqueEntityId(authorId),
        answersId: new UniqueEntityId(answersId),
        content,
    })

    await this.answersCommentRepository.create(answersComment)

    return {
        answersComment
    }
  }
}
