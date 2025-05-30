import { AggregateRoot } from "@/core/entities/aggregates-root";
import { Slug } from "./value-objects/slug";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { Optional } from "@/core/types/optional";
import dayjs from "dayjs";
import { QuestionAttachmentList } from "./question-attachment-list";
import { QuestionBestAnswerChoseEvent } from "./events/question-best-answer-choosen-event";

export interface QuestionProps {
  authorId: UniqueEntityId;
  bestAnswerId?: UniqueEntityId;
  attachments: QuestionAttachmentList;
  title: string;
  content: string;
  slug: Slug;
  createdAt: Date;
  updatedAt?: Date;
}

export class Question extends AggregateRoot<QuestionProps> {
  get authorId() {
    return this.props.authorId;
  }
  get bestAnswerId() {
    return this.props.bestAnswerId;
  }
  get title() {
    return this.props.title;
  }
  get content() {
    return this.props.content;
  }
  get createdAt() {
    return this.props.createdAt;
  }
  get updatedAt() {
    return this.props.updatedAt;
  }

  get slug() {
    return this.props.slug
  }

  get isNew(): boolean {
    return dayjs().diff(this.createdAt, "days") <= 3;
  }

  get except() {
    return this.content.substring(0, 120).trimEnd().concat("...");
  }

  get attachments() {
    return this.props.attachments
  }

  private touch() {
    this.props.updatedAt = new Date();
  }

  set title(title: string) {
    this.props.title = title;
    this.props.slug = Slug.createFromText(title);
    this.touch();
  }

  set content(content: string) {
    this.props.content = content;
    this.touch();
  }

  set attachments(attachments: QuestionAttachmentList) {
    this.props.attachments = attachments
    this.touch()
  }
  
  set bestAnswerId(bestAnswerId: UniqueEntityId | undefined) {

    if(bestAnswerId === undefined) {
      return
    }

    if(this.props.bestAnswerId === undefined || !this.props.bestAnswerId.equals(bestAnswerId)) {
      this.addDomainEvent( new QuestionBestAnswerChoseEvent(this, bestAnswerId))
    }

    this.props.bestAnswerId = bestAnswerId;
    this.touch();
  }
  
  static create(
    props: Optional<QuestionProps, "createdAt" | "slug" | "attachments">,
    id?: UniqueEntityId
  ) {
    const question = new Question(
      {
        ...props,
        slug: props.slug ?? Slug.createFromText(props.title),
        attachments: props.attachments ?? new QuestionAttachmentList(),
        createdAt: props.createdAt ?? new Date(),
      },
      id
    );

    return question;
  }
}
