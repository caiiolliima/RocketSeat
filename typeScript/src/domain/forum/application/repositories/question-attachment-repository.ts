import { QuestionAttachment } from "../../enterprise/entities/question-attachment";

export interface QuestionAttachmentRepository {
    findManyQuestionId(questionId:string): Promise<QuestionAttachment[]>
}