import { makeAnswers } from "test/factories/make-answers";
import { InMemoryAnswersRepository } from "test/repositories/in-memory-answers-repository";
import { CommentOnAnswersUseCase } from "./comment-on-answer";
import { InMemoryAnswersCommentRepository } from "test/repositories/in-memory-answers-comment-repository";

let inMemoryAnswersRepository: InMemoryAnswersRepository
let inMemoryAnswersCommentRepository: InMemoryAnswersCommentRepository
let sut: CommentOnAnswersUseCase

describe('Comment on Answers', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    inMemoryAnswersCommentRepository = new InMemoryAnswersCommentRepository()
    sut = new CommentOnAnswersUseCase(
      inMemoryAnswersRepository, 
      inMemoryAnswersCommentRepository)
  })

  it("should be able to comment on quesion", async () => {
    const answers = makeAnswers()

    await inMemoryAnswersRepository.create(answers)
    
    await sut.execute({
        answersId: answers.id.toString(),
        authorId: answers.authorId.toString(),
        content: 'Comentário Teste',
    })

    expect(inMemoryAnswersCommentRepository.items[0].content).toEqual('Comentário Teste')
  });
  
})

