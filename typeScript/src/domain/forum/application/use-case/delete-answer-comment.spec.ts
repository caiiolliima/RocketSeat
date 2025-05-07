import { InMemoryAnswersCommentRepository } from "test/repositories/in-memory-answers-comment-repository";
import { makeAnswersComment } from "test/factories/make-answers-comment";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { DeleteAnswersCommentUseCase } from "./delete-answer-comment";
import { NotAllowedError } from "@/core/errors/errors/not-allowed-error";

let inMemoryAnswersCommentRepository: InMemoryAnswersCommentRepository;
let sut: DeleteAnswersCommentUseCase;

describe("Delete Answers Comment", () => {
  beforeEach(() => {
    inMemoryAnswersCommentRepository = new InMemoryAnswersCommentRepository();
    sut = new DeleteAnswersCommentUseCase(inMemoryAnswersCommentRepository);
  });

  it("should be able to delete a answers comment", async () => {
    const answersComment = makeAnswersComment();

    await inMemoryAnswersCommentRepository.create(answersComment);

    await sut.execute({
      answersCommentnId: answersComment.id.toString(),
      authorId: answersComment.authorId.toString(),
    });

    expect(inMemoryAnswersCommentRepository.items).toHaveLength(0);
  });

  it("should be not able to delete another user answers comment", async () => {
    const answersComment = makeAnswersComment({
      authorId: new UniqueEntityId("author-1"),
    });

    await inMemoryAnswersCommentRepository.create(answersComment);

    const result = await sut.execute({
      answersCommentnId: answersComment.id.toString(),
      authorId: 'author-2',
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(NotAllowedError)
  });
});
