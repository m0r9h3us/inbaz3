import { AddressModel } from './address.model'

export type EventDto = {
    id: string
    title: string
    start: string
    end: string
    location: AddressModel
    description: string
    websites: Array<string>
}
