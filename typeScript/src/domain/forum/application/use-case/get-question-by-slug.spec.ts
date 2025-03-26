import { InMemoryQuestionRepository } from "test/repositories/in-memory-questions-repository";
import { GetQuestionBySlugUseCase } from "./get-question-by-slug-";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { Question } from "../../enterprise/entities/question";
import { Slug } from "../../enterprise/entities/value-objects/slug";

let inMemoryQuestionRepositoru: InMemoryQuestionRepository
let sut: GetQuestionBySlugUseCase

describe('Get Question By Slug', () => {
  beforeEach(() => {
    inMemoryQuestionRepositoru = new InMemoryQuestionRepository()
    sut = new GetQuestionBySlugUseCase(inMemoryQuestionRepositoru)
  })

  it("should be able to get a question by slug", async () => {

    const newQuestion = Question.create({
        authorId: new UniqueEntityId,
        title: "Example Question",
        slug: Slug.create('example-question'),
        content: 'Example Test',
  })

    await inMemoryQuestionRepositoru.create(newQuestion)
  
    const {question} = await sut.execute({
      slug: "example-question"
    });
  
    expect(question.id).toBeTruthy();
    expect(question.title).toEqual(newQuestion.title)
    expect(inMemoryQuestionRepositoru.items[0].id).toEqual(question.id)
  });
  
})

