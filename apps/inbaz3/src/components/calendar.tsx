'use client'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction' // a plugin!

import './calendar.css'

export default function Calendar() {
    return (
        <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
                left: 'prev,next',
                right: 'title',
            }}
            handleWindowResize={true}
            editable={false}
            events={[
                { title: 'event 1', start: '2024-12-01', end: '2024-12-07', id: '1' },
                { title: 'event 2', start: '2024-12-01', end: '2024-12-07', id: '2' },
                { title: 'event 3', start: '2024-12-01', end: '2024-12-07', id: '3' },
                { title: 'event 4', start: '2024-12-01', end: '2024-12-07', id: '4' },
                { title: 'event ', date: '2024-12-02', id: '5' },
            ]}
            eventClick={(info) => {
                alert(info + info.event.id)
            }}
        />
    )
}
