import { Test } from '@nestjs/testing';
import { EventService } from './event.service';

describe('EventService', () => {
    let service: EventService;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [EventService]
        }).compile();

        service = module.get(EventService);
    });

    it('should be defined', () => {
        expect(service).toBeTruthy();
    });
});
