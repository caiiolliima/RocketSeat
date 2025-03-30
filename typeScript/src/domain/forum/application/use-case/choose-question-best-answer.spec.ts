  import { InMemoryQuestionRepository } from "test/repositories/in-memory-questions-repository";
  import { InMemoryAnswersRepository } from "test/repositories/in-memory-answers-repository";
  import { ChooseQuestionBestAnswerUseCase } from "./choose-question-best-answer";
  import { makeQuestion } from "test/factories/make-question";
  import { makeAnswers } from "test/factories/make-answers";
  import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { NotAllowedError } from "./errors/not-allowed-error";

  let inMemoryQuestionRepository: InMemoryQuestionRepository;
  let inMemoryAnswerRepository: InMemoryAnswersRepository;
  let sut: ChooseQuestionBestAnswerUseCase;

  describe("Choose question best answer", () => {
    beforeEach(() => {
      inMemoryQuestionRepository = new InMemoryQuestionRepository();
      inMemoryAnswerRepository = new InMemoryAnswersRepository();
      sut = new ChooseQuestionBestAnswerUseCase(
        inMemoryAnswerRepository,
        inMemoryQuestionRepository
      );
    });

    it("should be able to choose question best answer", async () => {
      const question = makeQuestion();
      const answer = makeAnswers({
        questionId: question.id,
      });

      await inMemoryQuestionRepository.create(question);
      await inMemoryAnswerRepository.create(answer);

      await sut.execute({
        answerId: answer.id.toString(),
        authorId: question.authorId.toString(),
      });

      expect(inMemoryQuestionRepository.items[0].bestAnswerId).toEqual(answer.id);
    });

    it("should be able to choose another user question best answer", async () => {
      const question = makeQuestion({
        authorId: new UniqueEntityId("author-1"),
      });
      const answer = makeAnswers({
        questionId: question.id,
      });

      await inMemoryQuestionRepository.create(question);
      await inMemoryAnswerRepository.create(answer);

      const result = await sut.execute({
        answerId: answer.id.toString(),
        authorId: "author-2",
      });
      
      expect(result.isLeft()).toBe(true)
      expect(result.value).toBeInstanceOf(NotAllowedError)
    });
  });
