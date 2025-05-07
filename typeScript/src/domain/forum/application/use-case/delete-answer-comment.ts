import { Either, left, right } from "@/core/either";
import { AnswersCommentRepository } from "../repositories/answers-comments.repository";
import { ResourceNotFoundError } from "@/core/errors/errors/resource-not-found-error";
import { NotAllowedError } from "@/core/errors/errors/not-allowed-error";

interface DeleteAnswersCommentUseCaseRequest {
  authorId: string;
  answersCommentnId: string;
}

type  DeleteAnswersCommentUseCaseRequestResponse = Either<ResourceNotFoundError | NotAllowedError, {}>

export class DeleteAnswersCommentUseCase {
  constructor(
    private answersCommentRepository: AnswersCommentRepository) {}

  async execute({
    authorId,
    answersCommentnId,
  }: DeleteAnswersCommentUseCaseRequest): Promise<DeleteAnswersCommentUseCaseRequestResponse> {
    const answersComment = await this.answersCommentRepository.findById(answersCommentnId)

    if (!answersComment) {
      return left(new ResourceNotFoundError())
    }

    if (answersComment.authorId.toString() !== authorId) {
      return left(new NotAllowedError())
    }

    await this.answersCommentRepository.delete(answersComment)

    return right({})
  }
}
