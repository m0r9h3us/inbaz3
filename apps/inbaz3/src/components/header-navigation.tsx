import { ReactNode } from "react"
import Link from "next/link"


type HeaderNavigationProps = {
    children: ReactNode;
};

export const HeaderNavigation = (props: HeaderNavigationProps): ReactNode => {
    const { children } = props;
    return (
        <li className="flex flex-row gap-4">
            {children}
        </li>
    )
}

