import { InMemoryQuestionRepository } from "test/repositories/in-memory-questions-repository";
import { CreateQuestionUseCase } from "./create-question";

let inMemoryQuestionRepositoru: InMemoryQuestionRepository
let sut: CreateQuestionUseCase

describe('Create Question', () => {
  beforeEach(() => {
    inMemoryQuestionRepositoru = new InMemoryQuestionRepository()
    sut = new CreateQuestionUseCase(inMemoryQuestionRepositoru)
  })

  it("should be able to create a question", async () => {
  
    const result = await sut.execute({
      authorId: "1",
      title: "Nova Pergunta",
      content: "Conteudo da pergunta",
    });
  
    expect(result.isRight()).toBe(true);
    expect(inMemoryQuestionRepositoru.items[0]).toEqual(result.value?.question)
  });
  
})

