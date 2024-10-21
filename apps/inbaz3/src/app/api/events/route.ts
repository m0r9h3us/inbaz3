import { EventDto } from '@inbaz3/dto'

import { testEvents } from './_test-data/events'

export async function GET() {
    const events: EventDto[] = testEvents
    return Response.json({ data: events })
}
