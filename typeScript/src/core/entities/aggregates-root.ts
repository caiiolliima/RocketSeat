import { Domain } from "domain";
import { DomainEvent } from "../events/domain-event";
import { Entity } from "./entity";
import { DomainEvents } from "../events/domain-events";

export abstract class AggregateRoot<Props> extends Entity<Props> {
  private _domainEvents: DomainEvent[] = [];

  get domainEvents(): DomainEvent[] {
    return this._domainEvents;
  }

  protected addDomainEvent(domainEvents: DomainEvent): void {
    this._domainEvents.push(domainEvents);
    DomainEvents.markAggregateForDispatch(this);
  }

  public clearEvents() {
    this._domainEvents = [];
  }
}
