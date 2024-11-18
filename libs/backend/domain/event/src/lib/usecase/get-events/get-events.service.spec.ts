import { Test } from '@nestjs/testing';
import { GetEventsService } from './get-events.service';

describe('EventService', () => {
    let service: GetEventsService;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [GetEventsService]
        }).compile();

        service = module.get(GetEventsService);
    });

    it('should be defined', () => {
        expect(service).toBeTruthy();
    });
});
