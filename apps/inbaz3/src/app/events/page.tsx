import { EventCardCollection } from '../../components/event-card/event-card-collection'
import { EventCardProps } from '../../components/event-card/event-card'

import dayjs from 'dayjs'
import { getEvents } from '../api-client/get-events'

export default async function Events() {
    const eventData = await getEvents()

    const events: Array<{ id: string } & EventCardProps> = eventData.map((event) => ({
        id: event.id,
        title: event.title,
        start: dayjs(event.start),
        end: dayjs(event.end),
        city: event.location.city,
        country: event.location.country,
        description: event.description,
    }))

    return (
        <div className="flex flex-col flex-1 gap-4 p-4">
            <h1 className="text-2xl text-bold">All events</h1>
            <EventCardCollection events={events} />
        </div>
    )
}
