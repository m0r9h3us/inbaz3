import { ReactNode } from "react"
import Link from "next/link"

type HeaderProps = {
    children: ReactNode
}

export const Header = (props: HeaderProps) => {
    const { children } = props

    return (
        <header className="flex h-16 items-center px-4 justify-start flex-1">
            {children}
        </header>

    )
}


// export const Header = (props: HeaderProps) => {
//     const { children } = props

//     return (
//         <div className="flex h-16 items-center px-4 justify-start flex-1">
//             <HeaderLogo />
//             <div className="flex flex-1 justify-between">
//                 {children}
//             </div>
//         </div>

//     )
// }
