import { Injectable, Logger } from '@nestjs/common';
import { JugglingEdgeApiIntegrationHttpService } from '../../infra/juggling-hub-integration/juggling-hub-api-integration.service';

@Injectable()
export class GetEventsService {
    private readonly logger = new Logger(GetEventsService.name);

    constructor(private readonly httpService: JugglingEdgeApiIntegrationHttpService) {}

    public async getEvents() {
        // future events
        return this.httpService.getEvents();
    }
}
