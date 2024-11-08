import { Module } from '@nestjs/common';

import { EventModule } from '@inbaz3/backend/event';

@Module({
    imports: [EventModule],
    controllers: [],
    providers: []
})
export class AppModule {}
