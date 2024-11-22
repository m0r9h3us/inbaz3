import {
    jugglingEdgeMockEvents,
    transformToBackendData
} from '@/libs/shared/domain/event/data/src';
import dayjs from 'dayjs';
import { EventModel } from '@juggling-hub/frontend/view-model';

export const getMockEvents = () => {
    const jugglingEdgeData = jugglingEdgeMockEvents;
    const backendData = transformToBackendData(jugglingEdgeData);
    const frontendData: Array<EventModel> = backendData.map((event) => ({
        id: event.eventID.toString(),
        title: event.fullTitle,
        start: dayjs(event.startDate),
        end: dayjs(event.startDate),
        location: {
            country: event.country
        },
        websites: event.urls,
        description: event.blurb
    }));

    return frontendData;
};
