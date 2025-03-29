import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { InMemoryQuestionCommentRepository } from "test/repositories/in-memory-question-comment-repository";
import { FetchQuestionCommentsUseCase } from "./fetch-question-comment";
import { makeQuestionComment } from "test/factories/make-question-comment";

let inMemoryQuestionCommentRepositoru: InMemoryQuestionCommentRepository
let sut: FetchQuestionCommentsUseCase

describe('Fetch Question Comment', () => {
  beforeEach(() => {
    inMemoryQuestionCommentRepositoru = new InMemoryQuestionCommentRepository()
    sut = new FetchQuestionCommentsUseCase(inMemoryQuestionCommentRepositoru)
  })

  it("should be able to fetch question comment", async () => {
    await inMemoryQuestionCommentRepositoru.create(makeQuestionComment({
        questionId: new UniqueEntityId('question-1')
    }))
    await inMemoryQuestionCommentRepositoru.create(makeQuestionComment({
        questionId: new UniqueEntityId('question-1')
    }))
    await inMemoryQuestionCommentRepositoru.create(makeQuestionComment({
        questionId: new UniqueEntityId('question-1')
    }))
    
    const { questionComments } = await sut.execute({
      questionId: 'question-1',
      page: 1,
    })

    expect(questionComments).toHaveLength(3)
  });

  it("should be able to fetch paginated question comment", async () => {
    for (let i = 1; i <= 22; i++) {
        await inMemoryQuestionCommentRepositoru.create(makeQuestionComment({
            questionId: new UniqueEntityId('question-1')
        }))
    }
    
    const { questionComments } = await sut.execute({
        questionId: 'question-1',
        page: 2,
    })

    expect(questionComments).toHaveLength(2)
  });

})


