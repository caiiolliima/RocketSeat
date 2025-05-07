import { InMemoryQuestionRepository } from "test/repositories/in-memory-questions-repository";
import { GetQuestionBySlugUseCase } from "./get-question-by-slug";
import { makeQuestion } from "test/factories/make-question";
import { Slug } from "../../enterprise/entities/value-objects/slug";
import { InMemoryQuestionAttachmentRepository } from "test/repositories/in-memory-question-attachments-repository";

let inMemoryQuestionRepositoru: InMemoryQuestionRepository;
let inMemoryQuestionAttachmentRepository: InMemoryQuestionAttachmentRepository
let sut: GetQuestionBySlugUseCase;

describe("Get Question By Slug", () => {
  beforeEach(() => {
    inMemoryQuestionAttachmentRepository = new InMemoryQuestionAttachmentRepository
    inMemoryQuestionRepositoru = new InMemoryQuestionRepository(inMemoryQuestionAttachmentRepository);
    sut = new GetQuestionBySlugUseCase(inMemoryQuestionRepositoru);
  });

  it("should be able to get a question by slug", async () => {
    const newQuestion = makeQuestion({
      slug: Slug.create("example-question"),
    });
    await inMemoryQuestionRepositoru.create(newQuestion);

    const result = await sut.execute({
      slug: "example-question",
    });

    // expect(result.value?.question.id).toBeTruthy();
    // expect(result.value?.question.title).toEqual(newQuestion.title);

    expect(result.isRight()).toBe(true)

    expect(result.value).toMatchObject({
      question: expect.objectContaining({
      title: newQuestion.title,
      }),
    })

    expect(result.value).toMatchObject({
      question: expect.objectContaining({
      id: newQuestion.id,
      }),
    })
  });
});
