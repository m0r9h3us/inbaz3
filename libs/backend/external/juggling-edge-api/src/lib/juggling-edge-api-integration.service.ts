import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { Injectable, Logger } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { JugglingEdgeEventDto } from './juggling-edge-event.dto';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class JugglingEdgeApiIntegrationHttpService {
    private readonly logger = new Logger(JugglingEdgeApiIntegrationHttpService.name);

    constructor(private readonly httpService: HttpService) {}

    public async getEvents() {
        // future events
        const status = 1;

        const response = await firstValueFrom(
            this.httpService
                .get(`/feeds/getdata.php?Output=json&Data=events&Status=${status}`)
                .pipe(
                    catchError((error: AxiosError) => {
                        this.logger.error(error.response?.data);
                        throw 'An error happened!';
                    })
                )
        );

        const events = plainToInstance(JugglingEdgeEventDto, response.data);

        const errors = await validate(events);
        if (errors.length > 0) {
            this.logger.error('Validation failed!', errors);
            throw new Error('Validation failed!');
        }

        return events;
    }
}
