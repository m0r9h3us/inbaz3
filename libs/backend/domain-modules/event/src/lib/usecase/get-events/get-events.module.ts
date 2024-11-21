import { Module } from '@nestjs/common';
import { GetEventsController } from './get-events.controller';
import { GetEventsService } from './get-events.service';
import { JugglingEdgeApiIntegrationModule } from '../../infra/juggling-hub-integration/juggling-edge-api-integration.module';

export const GET_EVENTS_SERVICE = Symbol('GET_EVENTS_SERVICE');

@Module({
    imports: [JugglingEdgeApiIntegrationModule],
    controllers: [GetEventsController],
    providers: [
        {
            provide: GET_EVENTS_SERVICE,
            useClass: GetEventsService
        }
    ],
    exports: []
})
export class GetEventsModule {}
