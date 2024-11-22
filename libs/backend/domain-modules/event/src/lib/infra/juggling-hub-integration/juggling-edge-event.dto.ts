import { Exclude, Expose, Transform, Type } from 'class-transformer';
import {
    IsInt,
    IsString,
    IsUrl,
    IsLatitude,
    IsLongitude,
    IsDateString,
    IsOptional,
    IsArray,
    ValidateNested
} from 'class-validator';

export interface JugglingEdgeEvent {
    edgeListing: string;
    eventID: number;
    fullTitle: string;
    shortTitle: string;
    tag: string;
    blurb: string;
    address: string;
    startDate: string;
    duration: number;
    startTime: string;
    endTime: string;
    urls: Array<string>;
    country: string;
    lat: number;
    lng: number;
    lastEdit: string;
    status: number;
    cancelled: number;
}

// this dto is not ment to be send to the frontend

@Exclude()
export class JugglingEdgeEventDto implements JugglingEdgeEvent {
    @Expose({ name: 'EdgeListing' })
    @IsUrl()
    edgeListing!: string;

    @Expose({ name: 'EventID' })
    @IsInt()
    eventID!: number;

    @Expose({ name: 'FullTitle' })
    @IsString()
    fullTitle!: string;

    @Expose({ name: 'ShortTitle' })
    @IsString()
    shortTitle!: string;

    @Expose({ name: 'Tag' })
    @IsString()
    tag!: string;

    @Expose({ name: 'Blurb' })
    @IsString()
    blurb!: string;

    @Expose({ name: 'Address' })
    @IsString()
    address!: string;

    @Expose({ name: 'StartDate' })
    @IsDateString()
    startDate!: string;

    @Expose({ name: 'Duration' })
    @IsInt()
    duration!: number;

    @Expose({ name: 'StartTime' })
    @IsOptional()
    @IsString()
    startTime!: string;

    @Expose({ name: 'EndTime' })
    @IsOptional()
    @IsString()
    endTime!: string;

    @Expose({ name: 'URL' })
    @Transform(({ value }) => value.split('\n'))
    @IsArray()
    urls!: Array<string>;

    @Expose({ name: 'Country' })
    @IsString()
    country!: string;

    @Expose({ name: 'Lat' })
    @IsLatitude()
    lat!: number;

    @Expose({ name: 'Lng' })
    @IsLongitude()
    lng!: number;

    @Expose({ name: 'LastEdit' })
    @IsDateString()
    lastEdit!: string;

    @Expose({ name: 'Status' })
    @IsInt()
    status!: number;

    @Expose({ name: 'Cancelled' })
    @IsInt()
    cancelled!: number;
}

export class JugglingEdgeEventCollectionDto {
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => JugglingEdgeEventDto)
    events!: JugglingEdgeEventDto[];

    constructor(events: JugglingEdgeEventDto[]) {
        this.events = events;
    }
}
