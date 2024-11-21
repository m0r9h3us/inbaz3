import { Controller, Inject } from '@nestjs/common';
import { GET_EVENTS_SERVICE } from './get-events.module';
import { GetEventsServiceInterface } from './get-events.service.interface';

@Controller('event')
export class GetEventsController {
    constructor(@Inject(GET_EVENTS_SERVICE) private getEventsService: GetEventsServiceInterface) {}

    public async getEvents() {
        return await this.getEventsService.getEvents();
    }
}
