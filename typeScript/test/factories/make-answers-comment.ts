import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { AnswersComment, AnswersCommentProps } from "@/domain/forum/enterprise/entities/answer-comment";
import { faker } from "@faker-js/faker";

export function makeAnswersComment(
  override: Partial<AnswersCommentProps> = {},
  id?: UniqueEntityId
) {
  const answersComment = AnswersComment.create(
    {
      authorId: new UniqueEntityId(),
      answersId: new UniqueEntityId(),
      content: faker.lorem.text(),
      ...override,
    },
    id
  );

  return answersComment;
}
