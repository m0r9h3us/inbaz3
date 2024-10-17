import { ReactNode } from "react"
import Link from "next/link"

type HeaderProps = {
    children: ReactNode
}

const Header = (props: HeaderProps) => {
    const { children } = props

    return (
        <div className="flex h-16 items-center px-4 justify-start flex-1">
            <HeaderLogo />
            <div className="flex flex-1 justify-between">
                {children}
            </div>
        </div>

    )
}

type HeaderLogoProps = {
    text?: string
}

const HeaderLogo = (props: HeaderLogoProps) => {
    const { text } = props
    return (
        <span className=""> {text ?? 'OoO'}</span>
    )
}

HeaderLogo.displayName = 'HeaderLogo'
Header.Logo = HeaderLogo


type HeaderNavigationProps = {
    children: ReactNode;
};

const HeaderNavigation = (props: HeaderNavigationProps): ReactNode => {
    const { children } = props;
    return (
        <li className="flex flex-row gap-4">
            {children}
        </li>
    )
}

HeaderNavigation.displayName = 'HeaderNavigation'
Header.Navigation = HeaderNavigation

type HeaderNavigationLinkProps = {
    to: string;
    children: ReactNode;
};

const HeaderNavigationLink = (props: HeaderNavigationLinkProps): ReactNode => {
    const { to, children } = props;
    return (
        <Link href={to}>{children}</Link>
    )
}

HeaderNavigationLink.displayName = 'HeaderNavigationLink'
Header.NavigationLink = HeaderNavigationLink

export default Header