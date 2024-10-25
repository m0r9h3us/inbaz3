import React from 'react'
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
    CardContent,
    Button,
    Separator,
} from '@inbaz3/primitives'
import dayjs from 'dayjs'

import { CalendarIcon, MapPinIcon, FlameIcon } from 'lucide-react'
import { JugglingClubIcon } from '../../icons/juggling-clubs'
import { AcroIcon } from '../../icons/acro-icon'

export type EventCardProps = {
    title: string
    start: dayjs.Dayjs
    end: dayjs.Dayjs
    city: string
    country: string
    description: string
    priceRange?: string // Optional price range
    foodIncluded?: boolean // Optional food inclusion flag
}

export const EventCard = (props: EventCardProps) => {
    const { title, start, end, city, description, priceRange, foodIncluded } = props
    const activityIcons = {
        acrobatics: <AcroIcon className="w-5 h-5 fill-primary-foreground" />,
        fireSpace: <FlameIcon className="w-5 h-5" />,
        juggling: <JugglingClubIcon className="w-5 h-5" />,
    }
    type ActivityType = 'acrobatics' | 'fireSpace' | 'juggling'

    const renderActivityIcons = (activities: ActivityType[]) => {
        return activities.map((activity, index) => (
            <span key={index} className="flex gap-1">
                {activityIcons[activity]}
                <span className="text-sm">{activity}</span>
            </span>
        ))
    }
    const eventDuration = end.diff(start, 'day') + 1
    return (
        <Card className="flex flex-1 flex-col min-w-60 max-w-120 h-[26rem]">
            <CardHeader className="flex flex-col gap-2">
                <CardTitle>{title}</CardTitle>
                <Separator />
                <div className="flex gap-4 items-center text-sm">
                    <CalendarIcon className="h-4 w-4" />
                    <span>{`${start.format('DD/MM/YYYY')} - ${end.format('DD/MM/YYYY')}`}</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold ml-2 px-2.5 py-0.5 rounded">
                        {eventDuration} {eventDuration > 1 ? 'days' : 'day'}
                    </span>
                </div>
                <div className="flex gap-4 text-sm">
                    <MapPinIcon className="h-4 w-4" />
                    <span>{city}</span>
                </div>
                <Separator />
                <div className="flex flex-wrap gap-4 px-4">
                    {renderActivityIcons(['acrobatics', 'fireSpace', 'juggling'])}
                </div>
                <Separator />
            </CardHeader>

            <CardContent className="flex-1 overflow-y-hidden">
                <CardDescription className="pt-2">{description}</CardDescription>
            </CardContent>
            <Separator />
            <CardFooter className="flex justify-between pt-4">
                <div className="flex flex-col text-xs">
                    {priceRange && (
                        <div className="flex gap-2">
                            <span className="font-semibold">Price Range:</span>
                            <span>{priceRange}</span>
                        </div>
                    )}
                    {foodIncluded !== undefined && (
                        <div className="flex gap-2">
                            <span className="font-semibold">Food Included:</span>
                            <span>{foodIncluded ? 'Yes' : 'No'}</span>
                        </div>
                    )}
                </div>
                <Button variant="outline">Learn More</Button>
            </CardFooter>
        </Card>
    )
}
