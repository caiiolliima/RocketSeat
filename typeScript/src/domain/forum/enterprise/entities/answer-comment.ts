import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { Optional } from "@/core/types/optional";
import { Comment, CommentProps } from './comment'

export interface AnswersCommentProps extends CommentProps{
  answersId: UniqueEntityId;
}

export class AnswersComment extends Comment<AnswersCommentProps> {
  get answersId() {
    return this.props.answersId
  }

  static create(
    props: Optional<AnswersCommentProps, "createdAt">,
    id?: UniqueEntityId
  ) {
    const answersComment = new AnswersComment(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id
    );

    return answersComment;
  }
}
