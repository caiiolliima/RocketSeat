import { AggregateRoot } from "../entities/aggregates-root";
import { UniqueEntityId } from "../entities/unique-entity-id";
import { DomainEvent } from "./domain-event";
import { DomainEvents } from "./domain-events";
import { vi } from "vitest"

class CustomAggregateCreated implements DomainEvent {
    public ocurredAt: Date
    private aggregate: CustomAggreate

    constructor(aggregate: CustomAggreate) {
        this.ocurredAt = new Date()
        this.aggregate = aggregate
    }

    public getAggregateId(): UniqueEntityId {
        return this.aggregate.id
    }
}

class CustomAggreate extends AggregateRoot<null> {
    static create() {
        const aggregate = new CustomAggreate(null)

        aggregate.addDomainEvent(new CustomAggregateCreated(aggregate))

        return aggregate
    }
}

describe("domain events", () => {
    it('should be able to dispatch and listen to events', () => {
        const callBackSpy = vi.fn()

        //Subscribe cadastrado (ouvindo o evento de "resposta criada")
        DomainEvents.register(callBackSpy, CustomAggregateCreated.name)

        //Estou criando uma resposta sem salvar no banco
        const aggregate = CustomAggreate.create()

        //Estou assegurando que o evento foi criado, porém não foi disparado
        expect(aggregate.domainEvents).toHaveLength(1)

        //Estou salvando a resposta no banco de dados e assim disparando o evento
        DomainEvents.dispatchEventsForAggregate(aggregate.id)

        //O subscriber ouve o evento e faz o que precisa ser feito com o dado
        expect(callBackSpy).toHaveBeenCalled()
        expect(aggregate.domainEvents).toHaveLength(0)
    })
})