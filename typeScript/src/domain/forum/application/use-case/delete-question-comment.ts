import { QuestionCommentRepository } from "../repositories/question-comments.repository";

interface DeleteQuestionCommentUseCaseRequest {
  authorId: string;
  questionCommentnId: string;
}

interface DeleteQuestionCommentUseCaseRequestResponse {}

export class DeleteQuestionCommentUseCase {
  constructor(
    private questionCommentRepository: QuestionCommentRepository) {}

  async execute({
    authorId,
    questionCommentnId,
  }: DeleteQuestionCommentUseCaseRequest): Promise<DeleteQuestionCommentUseCaseRequestResponse> {
    const questionComment = await this.questionCommentRepository.findById(questionCommentnId)

    if (!questionComment) {
        throw new Error('Question comment not found.')
    }

    if (questionComment.authorId.toString() !== authorId) {
      throw new Error('Not Allowed')
    }

    await this.questionCommentRepository.delete(questionComment)

    return {}
  }
}
