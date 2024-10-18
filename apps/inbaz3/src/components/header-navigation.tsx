import { ReactNode } from "react"
import Link from "next/link"

import { cn } from "@/libs/frontend/utils/src";


export const HeaderNavigation = (): ReactNode => {

    return (
        <nav className={"flex items-center gap-x-4 lg:gap-x-6"}       >
            <Link
                href="/calendar"
                className="text-sm font-medium transition-colors hover:text-primary flex items-center"
            >
                <span className="text">Kalendar</span>
            </Link>
            <Link
                href="/meetups"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary flex items-center"
            >
                <span className="text block">Jongliertreffen</span>
            </Link>
        </nav>
        // <li className="flex flex-row gap-4">
        //     {children}
        // </li>
    )
}

