'use client'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import './calendar.css'

import { EventInput } from '@fullcalendar/core'

export type CalendarProps = {
    events: EventInput[]
}

export default function Calendar(props: CalendarProps) {
    const { events } = props

    return (
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
                left: 'prev,next',
                right: 'title',
            }}
            handleWindowResize={true}
            editable={false}
            events={events}
            eventClick={(info) => {
                alert(info + info.event.id)
            }}
        />
    )
}
