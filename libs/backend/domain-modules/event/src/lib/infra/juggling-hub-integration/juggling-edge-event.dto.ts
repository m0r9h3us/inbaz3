import { Exclude, Transform } from 'class-transformer';
import {
    IsInt,
    IsString,
    IsUrl,
    IsLatitude,
    IsLongitude,
    IsDateString,
    IsOptional
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
    url: string;
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
    @Transform(({ obj }) => obj.EdgeListing, { toClassOnly: true })
    @IsUrl()
    edgeListing!: string;

    @Transform(({ obj }) => obj.EventID, { toClassOnly: true })
    @IsInt()
    eventID!: number;

    @Transform(({ obj }) => obj.FullTitle, { toClassOnly: true })
    @IsString()
    fullTitle!: string;

    @Transform(({ obj }) => obj.ShortTitle, { toClassOnly: true })
    @IsString()
    shortTitle!: string;

    @Transform(({ obj }) => obj.Tag, { toClassOnly: true })
    @IsString()
    tag!: string;

    @Transform(({ obj }) => obj.Blurb, { toClassOnly: true })
    @IsString()
    blurb!: string;

    @Transform(({ obj }) => obj.Address, { toClassOnly: true })
    @IsString()
    address!: string;

    @Transform(({ obj }) => obj.StartDate, { toClassOnly: true })
    @IsDateString()
    startDate!: string;

    @Transform(({ obj }) => obj.Duration, { toClassOnly: true })
    @IsInt()
    duration!: number;

    @Transform(({ obj }) => obj.StartTime, { toClassOnly: true })
    @IsOptional()
    @IsString()
    startTime!: string;

    @Transform(({ obj }) => obj.EndTime, { toClassOnly: true })
    @IsOptional()
    @IsString()
    endTime!: string;

    @Transform(({ obj }) => obj.URL, { toClassOnly: true })
    @IsString()
    url!: string;

    @Transform(({ obj }) => obj.Country, { toClassOnly: true })
    @IsString()
    country!: string;

    @Transform(({ obj }) => obj.Lat, { toClassOnly: true })
    @IsLatitude()
    lat!: number;

    @Transform(({ obj }) => obj.Lng, { toClassOnly: true })
    @IsLongitude()
    lng!: number;

    @Transform(({ obj }) => obj.LastEdit, { toClassOnly: true })
    @IsDateString()
    lastEdit!: string;

    @Transform(({ obj }) => obj.Status, { toClassOnly: true })
    @IsInt()
    status!: number;

    @Transform(({ obj }) => obj.Cancelled, { toClassOnly: true })
    @IsInt()
    cancelled!: number;
}
