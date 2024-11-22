import 'jest-extended';
import { TestBed } from '@suites/unit';
import { JugglingEdgeApiIntegrationHttpServiceMock } from './juggling-edge-api-integration.service.mock';

describe('EventServiceMock', () => {
    let service: JugglingEdgeApiIntegrationHttpServiceMock;
    beforeEach(async () => {
        const testingModule = await TestBed.solitary(
            JugglingEdgeApiIntegrationHttpServiceMock
        ).compile();

        service = testingModule.unit;
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('getEvents should return a list of dto', async () => {
        const events = await service.getEvents();
        expect(events).toBeDefined();
        expect(events).toBeInstanceOf(Array);
    });
});
