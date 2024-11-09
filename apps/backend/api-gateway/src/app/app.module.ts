import { Module } from '@nestjs/common';

import { EventModule } from '@juggling-hub/backend/event';

@Module({
    imports: [EventModule],
    controllers: [],
    providers: []
})
export class AppModule {}
