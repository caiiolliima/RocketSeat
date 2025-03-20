import { expect, test } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question";
import { AnswerRepository } from "../repositories/answers-repositories";
import { Answer } from "../entities/answer";

const fakeAnswerRepoitory : AnswerRepository = {
  create: async (answer: Answer) => {
    return;
  }
}

test("create an answer", async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepoitory);

  const answer = await answerQuestion.execute({
    questionId: "1",
    instructorId: "1",
    content: "Nova Resposta",
  });

  expect(answer.content).toEqual('Nova Resposta')
});
