import { HeaderLogo } from './header-logo'
import { HeaderNavigation } from './header-navigation'
import { ModeToggle } from './mode-toggle'
import { Search } from './search'
import { UserNav } from './user-nav'

export const Header = () => {
    return (
        <div className="flex h-16 items-center justify-between border-b">
            <div className="flex gap-8 md:gap-16 ">
                <HeaderLogo />
                <HeaderNavigation />
            </div>

            <div className="flex gap-4 items-center">
                <Search />
                <ModeToggle />
                <UserNav />
            </div>
        </div>
    )
}
