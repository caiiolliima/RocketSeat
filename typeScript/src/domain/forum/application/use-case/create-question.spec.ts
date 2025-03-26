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
  
    const {question} = await sut.execute({
      authorId: "1",
      title: "Nova Pergunta",
      content: "Conteudo da pergunta",
    });
  
    expect(question.id).toBeTruthy();
    expect(inMemoryQuestionRepositoru.items[0].id).toEqual(question.id)
  });
  
})

