import dayjs from 'dayjs';

import { Separator, Switch } from '@juggling-hub/frontend/primitives';
import { EventCardProps } from '@juggling-hub/frontend/domain/event/components';
import { getMockEvents } from '@juggling-hub/frontend/domain/event/api-client';
import { EventCardCollection } from '@juggling-hub/frontend/domain/event/components';

export default async function Events() {
    const eventData = getMockEvents();

    const events: Array<{ id: string } & EventCardProps> = eventData.map((event) => ({
        id: event.id,
        title: event.title,
        start: dayjs(event.start),
        end: dayjs(event.end),
        city: event.location.city,
        country: event.location.country,
        description: event.description
    }));

    return (
        <div className="flex flex-col flex-1 gap-4 py-4 px-2">
            <div className="flex flex-col align-start gap-4 pb-2 md:flex-row md:justify-between md:items-center">
                <h1 className="text-3xl font-bold">Juggling events</h1>
                <span className="inline-flex items-center">
                    <Switch /> <span className="px-2">List View</span>
                </span>
            </div>
            <Separator />
            <div className="pt-2">
                <EventCardCollection events={events} />
            </div>
        </div>
    );
}
