import { ReactNode } from 'react'
import Link from 'next/link'

export const HeaderNavigation = (): ReactNode => {
    return (
        <nav className="flex items-center gap-x-4 lg:gap-x-6">
            <Link
                href="/events"
                className="text-sm font-medium transition-colors hover:text-primary flex items-center"
            >
                <span className="text">Events</span>
            </Link>
            <Link
                href="/calendar"
                className="text-sm font-medium transition-colors hover:text-primary flex items-center"
            >
                <span className="text">Kalendar</span>
            </Link>
        </nav>
    )
}
