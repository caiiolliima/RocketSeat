import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { DomainEvent } from "@/core/events/domain-event";
import { Answer } from "../answer";
import { Question } from "../question";

export class QuestionBestAnswerChoseEvent implements DomainEvent {
    public ocurredAt: Date;
    public question: Question;
    public bestAnswerId: UniqueEntityId;

    constructor(question: Question, bestAnswerId: UniqueEntityId) {
        this.question = question
        this.bestAnswerId = bestAnswerId
        this.ocurredAt = new Date(); 
    }

    getAggregateId(): UniqueEntityId {
        return this.question.id
    }
}