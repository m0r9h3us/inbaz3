import React from 'react'

type EventCardCollectionProps = {
    children: React.ReactNode
}

export const EventCardCollection = (props: EventCardCollectionProps) => {
    const { children } = props

    return <ul className="flex flex-col gap-4 p-4">{children}</ul>
}
