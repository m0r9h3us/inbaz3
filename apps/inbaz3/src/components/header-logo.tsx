import { ReactNode } from "react"
import Link from "next/link"


type HeaderLogoProps = {
    text?: string
}

export const HeaderLogo = (props: HeaderLogoProps) => {
    const { text } = props
    return (
        <span className=""> {text ?? 'OoO'}</span>
    )
}


