import { JugglingEdgeEventDto } from './juggling-edge-event.dto';

export interface JugglingEdgeApiIntegrationServiceInterface {
    getEvents(): Promise<Array<JugglingEdgeEventDto>>;
}
