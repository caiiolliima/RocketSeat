import { expect, test } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question";
import { InMemoryAnswersRepository } from "test/repositories/in-memory-answers-repository";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { InMemoryAnswerAttachmentRepository } from "test/repositories/in-memory-answers-attachments-repository";

let inMemoryAnswersRepository: InMemoryAnswersRepository
let inMemoryAttachmentRepository: InMemoryAnswerAttachmentRepository
let sut: AnswerQuestionUseCase

describe("Create am answer", () => {
  beforeEach(() => {
    inMemoryAttachmentRepository = new InMemoryAnswerAttachmentRepository()
    inMemoryAnswersRepository = new InMemoryAnswersRepository(inMemoryAttachmentRepository)
    sut = new AnswerQuestionUseCase(inMemoryAnswersRepository)
  })
  it("create an answer", async () => {
    const result = await sut.execute({
      questionId: "1",
      instructorId: "1",
      content: "Nova Resposta",
      attachmentsIds: ["1", "2"]
    });

    expect(result.isRight()).toBe(true);
    expect(inMemoryAnswersRepository.items[0]).toEqual(result.value?.answer)
        expect(
          inMemoryAnswersRepository.items[0].attachments.currentItems
        ).toHaveLength(2);
        expect(
          inMemoryAnswersRepository.items[0].attachments.currentItems
        ).toEqual([
          expect.objectContaining({ attachmentId: new UniqueEntityId("1") }),
          expect.objectContaining({ attachmentId: new UniqueEntityId("2") }),
        ]);
  });
});
