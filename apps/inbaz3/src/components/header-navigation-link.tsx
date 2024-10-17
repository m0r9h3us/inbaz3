import { ReactNode } from "react"
import Link from "next/link"

type HeaderNavigationLinkProps = {
    to: string;
    children: ReactNode;
};

export const HeaderNavigationLink = (props: HeaderNavigationLinkProps): ReactNode => {
    const { to, children } = props;
    return (
        <Link href={to}>{children}</Link>
    )
}
