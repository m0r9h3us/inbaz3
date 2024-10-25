import { EventDto } from '@inbaz3/dto'

export const getEvents = async () => {
    const baseUrl = 'http://localhost:3000'
    const response = await fetch(baseUrl + '/api/events')
    const responseData: { data: Array<EventDto> } = await response.json()
    return responseData.data
}
