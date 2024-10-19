import React from 'react'
import { Card, CardHeader, CardFooter, CardContent, Button } from '@inbaz3/primitives'

interface EventCardProps {
    title: string
    date: string
    location: string
    description: string
}

const EventCard: React.FC<EventCardProps> = ({ title, date, location, description }) => {
    return (
        <Card>
            <CardHeader>
                <h2>{title}</h2>
            </CardHeader>
            <CardContent>
                <p>
                    <strong>Date:</strong> {date}
                </p>
                <p>
                    <strong>Location:</strong> {location}
                </p>
                <p>{description}</p>
            </CardContent>
            <CardFooter>
                <Button>Learn More</Button>
            </CardFooter>
        </Card>
    )
}

export default EventCard
