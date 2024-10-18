import { ReactNode } from "react"
import Link from "next/link"
import Image from 'next/image';

import inbazIcon from "../../public/images/inbaz-icon.svg";
import jugglingIcon from "../../public/images/juggling-icon.svg";


export const HeaderLogo = () => {
    return (
        <div className="flex items-center">
            <Image
                className=""
                priority
                src={jugglingIcon}
                alt="Immernoch besser als Zaubern"
            />
            <Image
                className="hidden md:block"
                priority
                src={inbazIcon}
                alt="Immernoch besser als Zaubern"
            />
        </div>

    )
}


