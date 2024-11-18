import { Controller } from '@nestjs/common';
import { GetEventsService } from './get-events.service';

@Controller('event')
export class GetEventsController {
    constructor(private getEventsService: GetEventsService) {}
}
