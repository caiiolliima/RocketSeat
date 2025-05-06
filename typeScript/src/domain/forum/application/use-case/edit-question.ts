import { Either, left, right } from "@/core/either"
import { Question } from "../../enterprise/entities/question"
import { QuestionRepository } from "../repositories/question-repositories"
import { ResourceNotFoundError } from "./errors/resource-not-found-error"
import { NotAllowedError } from "./errors/not-allowed-error"
import { QuestionAttachmentRepository } from "../repositories/question-attachment-repository"
import { QuestionAttachmentList } from "../../enterprise/entities/question-attachment-list"
import { UniqueEntityId } from "@/core/entities/unique-entity-id"
import { QuestionAttachment } from "../../enterprise/entities/question-attachment"

interface EditQuestionUseCaseRequest {
  authorId: string
  questionId: string
  title: string
  content: string
  attachmentIds: string[]
}

type EditQuestionUseCaseRequestResponse = Either<
  ResourceNotFoundError | NotAllowedError,
  {
    question: Question
  }
>

export class EditQuestionUseCase {
  constructor(
    private questionRepository: QuestionRepository,
    private questionAttachmentRepository: QuestionAttachmentRepository
  ) {}

  async execute({
    authorId,
    title,
    content,
    questionId,
    attachmentIds,
  }: EditQuestionUseCaseRequest): Promise<EditQuestionUseCaseRequestResponse> {
    const question = await this.questionRepository.findById(questionId)

    if (!question) {
      return left(new ResourceNotFoundError())
    }

    if (authorId != question.authorId.toString()) {
      return left(new NotAllowedError())
    }

    const currentQuestionAttachment =
      await this.questionAttachmentRepository.findManyQuestionId(questionId)

    const questionAttachmentList = new QuestionAttachmentList(
      currentQuestionAttachment
    )

    const questionAttachments = attachmentIds.map((attachmentId) => {
      return QuestionAttachment.create({
        attachmentId: new UniqueEntityId(attachmentId),
        questionId: question.id,
      })
    })

    questionAttachmentList.update(questionAttachments)

    question.title = title
    question.content = content
    question.attachments = questionAttachmentList

    await this.questionRepository.save(question)

    return right({
      question,
    })
  }
}
