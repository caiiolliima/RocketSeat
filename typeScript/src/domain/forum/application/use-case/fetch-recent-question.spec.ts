import { InMemoryQuestionRepository } from "test/repositories/in-memory-questions-repository";
import { makeQuestion } from "test/factories/make-question";
import { FetchRecentQuestionUseCase } from "./fetch-recent-question";

let inMemoryQuestionRepositoru: InMemoryQuestionRepository
let sut: FetchRecentQuestionUseCase

describe('Fetch Recent Questions', () => {
  beforeEach(() => {
    inMemoryQuestionRepositoru = new InMemoryQuestionRepository()
    sut = new FetchRecentQuestionUseCase(inMemoryQuestionRepositoru)
  })

  it("should be able to fetch recente questions", async () => {
    await inMemoryQuestionRepositoru.create(makeQuestion({ createdAt: new Date(2022, 0, 20)}))
    await inMemoryQuestionRepositoru.create(makeQuestion({ createdAt: new Date(2022, 0, 18)}))
    await inMemoryQuestionRepositoru.create(makeQuestion({ createdAt: new Date(2022, 0, 23)}))
    
    const result = await sut.execute({
      page: 1,
    })

    expect(result.value?.question).toEqual([
      expect.objectContaining({createdAt: new Date(2022, 0, 23)}),
      expect.objectContaining({createdAt: new Date(2022, 0, 20)}),
      expect.objectContaining({createdAt: new Date(2022, 0, 18)}),
    ])
  });

  it("should be able to fetch paginated recent questions", async () => {
    for (let i = 1; i <= 22; i++) {
        await inMemoryQuestionRepositoru.create(makeQuestion())
    }
    
    const result = await sut.execute({
      page: 2,
    })

    expect(result.value?.question).toHaveLength(2)
  });

})

