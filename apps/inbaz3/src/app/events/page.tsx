import { EventCardCollection } from '../../components/event-card'
import { EventCardProps } from '../../components/event-card'
import { EventDto } from '@inbaz3/dto'

import dayjs from 'dayjs'

export default async function Events() {
    const baseUrl = 'http://localhost:3000'
    const response = await fetch(baseUrl + '/api/events')
    const responseData: { data: Array<EventDto> } = await response.json()
    const events: Array<{ id: string } & EventCardProps> = responseData.data.map((event) => ({
        id: event.id,
        title: event.title,
        start: dayjs(event.start),
        end: dayjs(event.end),
        city: event.location.city,
        country: event.location.country,
        description: event.description,
    }))

    return <EventCardCollection events={events} />
}
