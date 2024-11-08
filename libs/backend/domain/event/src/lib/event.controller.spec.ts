import { Test } from '@nestjs/testing';
import { EventController } from './event.controller';
import { EventService } from './event.service';

describe('EventController', () => {
    let controller: EventController;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [EventService],
            controllers: [EventController]
        }).compile();

        controller = module.get(EventController);
    });

    it('should be defined', () => {
        expect(controller).toBeTruthy();
    });
});
