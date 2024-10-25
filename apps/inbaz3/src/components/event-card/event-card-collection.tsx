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
                <li key={event.id} className="flex-grow">
                    <EventCard
                        title={event.title}
                        start={event.start}
                        end={event.end}
                        city={event.city}
                        country={event.country}
                        description={event.description}
                        priceRange="40-50 €"
                        foodIncluded={true}
                    />
                </li>
            )
        })

    return (
        <>
            <ul className="flex flex-wrap gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
                {renderEventCards()}
            </ul>
        </>
    )
}
