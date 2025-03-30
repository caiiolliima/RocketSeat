import { AnswersCommentRepository } from "../repositories/answers-comments.repository";

interface DeleteAnswersCommentUseCaseRequest {
  authorId: string;
  answersCommentnId: string;
}

interface DeleteAnswersCommentUseCaseRequestResponse {}

export class DeleteAnswersCommentUseCase {
  constructor(
    private answersCommentRepository: AnswersCommentRepository) {}

  async execute({
    authorId,
    answersCommentnId,
  }: DeleteAnswersCommentUseCaseRequest): Promise<DeleteAnswersCommentUseCaseRequestResponse> {
    const answersComment = await this.answersCommentRepository.findById(answersCommentnId)

    if (!answersComment) {
        throw new Error('Answers comment not found.')
    }

    if (answersComment.authorId.toString() !== authorId) {
      throw new Error('Not Allowed')
    }

    await this.answersCommentRepository.delete(answersComment)

    return {}
  }
}
