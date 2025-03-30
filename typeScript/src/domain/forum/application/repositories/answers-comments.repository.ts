import { PaginationParams } from "@/core/repositories/pagination-params";
import { AnswersComment } from "../../enterprise/entities/answer-comment";

export interface AnswersCommentRepository {
    findById(id: string): Promise<AnswersComment | null>
    findManyByAnswerId(answerId: string, params: PaginationParams): Promise<AnswersComment[]>
    create(answersComment: AnswersComment) : Promise<void>
    delete(questionComment: AnswersComment): Promise<void>
}