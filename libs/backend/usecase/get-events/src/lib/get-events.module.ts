import { Module } from '@nestjs/common';
import { GetEventsController } from './get-events.controller';
import { GetEventsService } from './get-events.service';

@Module({
    controllers: [GetEventsController],
    providers: [GetEventsService],
    exports: []
})
export class GetEventsModule {}
