import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { InMemoryAnswersCommentRepository } from "test/repositories/in-memory-answers-comment-repository";
import { makeAnswersComment } from "test/factories/make-answers-comment";
import { FetchAnswerCommentsUseCase } from "./fetch-answer-comments";

let inMemoryAnswersCommentRepositoru: InMemoryAnswersCommentRepository
let sut: FetchAnswerCommentsUseCase

describe('Fetch Answers Comment', () => {
  beforeEach(() => {
    inMemoryAnswersCommentRepositoru = new InMemoryAnswersCommentRepository()
    sut = new FetchAnswerCommentsUseCase(inMemoryAnswersCommentRepositoru)
  })

  it("should be able to fetch answers comment", async () => {
    await inMemoryAnswersCommentRepositoru.create(makeAnswersComment({
        answersId: new UniqueEntityId('answers-1')
    }))
    await inMemoryAnswersCommentRepositoru.create(makeAnswersComment({
        answersId: new UniqueEntityId('answers-1')
    }))
    await inMemoryAnswersCommentRepositoru.create(makeAnswersComment({
        answersId: new UniqueEntityId('answers-1')
    }))
    
    const { answersComments } = await sut.execute({
      answersId: 'answers-1',
      page: 1,
    })

    expect(answersComments).toHaveLength(3)
  });

  it("should be able to fetch paginated answers comment", async () => {
    for (let i = 1; i <= 22; i++) {
        await inMemoryAnswersCommentRepositoru.create(makeAnswersComment({
            answersId: new UniqueEntityId('answers-1')
        }))
    }
    
    const { answersComments } = await sut.execute({
        answersId: 'answers-1',
        page: 2,
    })

    expect(answersComments).toHaveLength(2)
  });

})


