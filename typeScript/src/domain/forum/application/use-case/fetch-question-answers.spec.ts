import { FetchQuestionAnswersUseCase } from "./fetch-question-answers";
import { InMemoryAnswersRepository } from "test/repositories/in-memory-answers-repository";
import { makeAnswers } from "test/factories/make-answers";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";

let inMemoryAnswersRepositoru: InMemoryAnswersRepository
let sut: FetchQuestionAnswersUseCase

describe('Fetch Question Answers', () => {
  beforeEach(() => {
    inMemoryAnswersRepositoru = new InMemoryAnswersRepository()
    sut = new FetchQuestionAnswersUseCase(inMemoryAnswersRepositoru)
  })

  it("should be able to fetch question answers", async () => {
    await inMemoryAnswersRepositoru.create(makeAnswers({
        questionId: new UniqueEntityId('question-1')
    }))
    await inMemoryAnswersRepositoru.create(makeAnswers({
        questionId: new UniqueEntityId('question-1')
    }))
    await inMemoryAnswersRepositoru.create(makeAnswers({
        questionId: new UniqueEntityId('question-1')
    }))
    
    const { answer } = await sut.execute({
      questionId: 'question-1',
      page: 1,
    })

    expect(answer).toHaveLength(3)
  });

  it("should be able to fetch paginated question answers", async () => {
    for (let i = 1; i <= 22; i++) {
        await inMemoryAnswersRepositoru.create(makeAnswers({
            questionId: new UniqueEntityId('question-1')
        }))
    }
    
    const { answer } = await sut.execute({
        questionId: 'question-1',
        page: 2,
    })

    expect(answer).toHaveLength(2)
  });

})

