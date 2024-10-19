export type CalendarEvent = {
    title: string
    start: Date
    end?: Date
    allDay?: boolean
    description?: string
    location?: string
}
