import React from 'react'
import { EventCardProps, EventCard } from './event-card'

type EventCardCollectionProps = {
    events: Array<{ id: string } & EventCardProps>
}

export const EventCardCollection = (props: EventCardCollectionProps) => {
    const { events } = props

    const renderEventCards = () =>
        events.map((event) => {
            return (
                <li key={event.id}>
                    <EventCard
                        title={event.title}
                        start={event.start}
                        end={event.end}
                        city={event.city}
                        country={event.country}
                        description={event.description}
                    />
                </li>
            )
        })

    return <ul className="flex flex-col gap-4 p-4">{renderEventCards()}</ul>
}
