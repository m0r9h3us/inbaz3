import { Test } from '@nestjs/testing';
import { GetEventsController } from './get-events.controller';
import { GetEventsService } from './get-events.service';

describe('EventController', () => {
    let controller: GetEventsController;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [GetEventsService],
            controllers: [GetEventsController]
        }).compile();

        controller = module.get(GetEventsController);
    });

    it('should be defined', () => {
        expect(controller).toBeTruthy();
    });
});
