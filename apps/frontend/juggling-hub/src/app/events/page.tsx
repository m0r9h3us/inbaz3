import { EventCardCollection } from '../../components/event-card/event-card-collection';
import { EventCardProps } from '../../components/event-card/event-card';

import dayjs from 'dayjs';
import { getEvents } from '../api-client/get-events';
import { Separator, Switch } from '@juggling-hub/frontend/primitives';

export default async function Events() {
    const eventData = await getEvents();

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
