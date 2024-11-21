import { Injectable, Logger } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { jugglingEdgeMockEvents } from '@juggling-hub/shared/domain/event/data';
import { JugglingEdgeEventDto } from './juggling-edge-event.dto';

@Injectable()
export class JugglingEdgeApiIntegrationHttpServiceMock {
    private readonly logger = new Logger(JugglingEdgeApiIntegrationHttpServiceMock.name);

    public async getEvents() {
        const events = plainToInstance(JugglingEdgeEventDto, jugglingEdgeMockEvents);

        const errors = await validate(events);
        if (errors.length > 0) {
            this.logger.error('Validation failed!', errors);
            throw new Error('Validation failed!');
        }

        return events;
    }
}
