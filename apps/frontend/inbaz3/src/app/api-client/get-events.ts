import { EventDto } from '@inbaz3/dto';
import { testEvents } from '../api/events/_test-data/events';

export const getEvents = async () => {
    const responseData: { data: Array<EventDto> } = { data: testEvents };
    return responseData.data;
};