import dayjs from 'dayjs'

export const testEvents = [
    {
        id: '1',
        title: 'München Con 2024',
        start: dayjs('2024-12-01', 'MM-DD-YYYY', 'de').toISOString(),
        end: dayjs('2024-12-07', 'MM-DD-YYYY', 'de').toISOString(),
        location: {
            name: 'Anton-Fingerle-Zentrum',
            street: 'Schlierseestraße 47',
            houseNumber: '47',
            zipCode: '81539',
            city: 'München',
            country: 'Germany',
        },
        description: '',
        websites: [
            'http://www.muenchen-con.de/',
            'https://www.tickettailor.com/events/jimev/',
            'https://www.jimev.de/',
        ],
    },
    {
        title: 'event 2',
        start: dayjs('2024-12-01', 'MM-DD-YYYY', 'de').toISOString(),
        end: dayjs('2024-12-07', 'MM-DD-YYYY', 'de').toISOString(),
        id: '2',
        location: {
            name: 'Event Location 2',
            street: 'Street 2',
            houseNumber: '2',
            zipCode: '12345',
            city: 'City 2',
            country: 'Germany',
        },
        description: 'Description for event 2',
        websites: ['http://www.event2.com/', 'https://www.event2tickets.com/'],
    },
    {
        title: 'event 3',
        start: dayjs('2025-06-01', 'MM-DD-YYYY', 'de').toISOString(),
        end: dayjs('2025-06-08', 'MM-DD-YYYY', 'de').toISOString(),
        id: '3',
        location: {
            name: 'Event Location 3',
            street: 'Street 3',
            houseNumber: '3',
            zipCode: '54321',
            city: 'City 3',
            country: 'Germany',
        },
        description: 'Description for event 3',
        websites: ['http://www.event3.com/', 'https://www.event3tickets.com/'],
    },
]
