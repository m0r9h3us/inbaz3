import dayjs from 'dayjs'

import Calendar from '../../components/calendar/calendar'
import { getEvents } from '../api-client/get-events'
import { Suspense } from 'react'
import Skeleton from 'react-loading-skeleton'

type EventCalendarProps = {
    id: string
    title: string
    start: dayjs.Dayjs
    end: dayjs.Dayjs
}

export default async function CalendarPage() {
    const eventData = await getEvents()

    const events: Array<{ id: string } & EventCalendarProps> = eventData.map((event) => ({
        id: event.id,
        title: event.title,
        start: dayjs(event.start),
        end: dayjs(event.end),
    }))

    return (
        <div className="flex flex-col flex-1 p-2 md:p-4 lg:p-8">
            <Suspense fallback={<Skeleton />}>
                <Calendar
                    events={events.map((event) => {
                        return {
                            id: event.id,
                            title: event.title,
                            start: event.start.toDate(),
                            end: event.end.toDate(),
                        }
                    })}
                />
            </Suspense>
        </div>
    )
}
