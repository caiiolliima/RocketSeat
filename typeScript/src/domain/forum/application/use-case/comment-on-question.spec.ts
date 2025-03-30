import { InMemoryQuestionRepository } from "test/repositories/in-memory-questions-repository";
import { makeQuestion } from "test/factories/make-question";
import { InMemoryQuestionCommentRepository } from "test/repositories/in-memory-question-comment-repository";
import { CommentOnQuestionUseCase } from "./comment-on-question";

let inMemoryQuestionRepository: InMemoryQuestionRepository
let inMemoryQuestionCommentRepository: InMemoryQuestionCommentRepository
let sut: CommentOnQuestionUseCase

describe('Comment on Question', () => {
  beforeEach(() => {
    inMemoryQuestionRepository = new InMemoryQuestionRepository()
    inMemoryQuestionCommentRepository = new InMemoryQuestionCommentRepository()
    sut = new CommentOnQuestionUseCase(
      inMemoryQuestionRepository, 
      inMemoryQuestionCommentRepository)
  })

  it("should be able to comment on quesion", async () => {
    const question = makeQuestion()

    await inMemoryQuestionRepository.create(question)
    
    await sut.execute({
        questionId: question.id.toString(),
        authorId: question.authorId.toString(),
        content: 'Comentário Teste',
    })

    expect(inMemoryQuestionCommentRepository.items[0].content).toEqual('Comentário Teste')
  });
  
})

