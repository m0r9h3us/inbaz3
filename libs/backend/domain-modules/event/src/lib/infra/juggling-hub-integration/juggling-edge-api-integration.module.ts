import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { JugglingEdgeApiIntegrationHttpServiceMock } from './juggling-edge-api-integration.service.mock';

export const JUGGLING_EDGE_API_INTEGRATION_SERVICE = Symbol(
    'JUGGLING_EDGE_API_INTEGRATION_SERVICE'
);

@Module({
    imports: [
        HttpModule.register({
            timeout: 5000,
            maxRedirects: 5,
            // baseURL: 'https://www.jugglingedge.com/'
            baseURL: 'https://www.test.com/'
        })
    ],
    providers: [
        {
            provide: JUGGLING_EDGE_API_INTEGRATION_SERVICE,
            useClass: JugglingEdgeApiIntegrationHttpServiceMock
        }
    ],
    exports: []
})
export class JugglingEdgeApiIntegrationModule {}