import Image from 'next/image'

import inbazIcon from '../../public/images/inbaz-icon.svg'
import jugglingIcon from '../../public/images/juggling-icon-3.svg'

export const HeaderLogo = () => {
    return (
        <div className="min-h-12 flex-shrink-0">
            <Image className="md:hidden" priority src={jugglingIcon} alt="JonglierIcon" />
            <Image
                className="hidden md:block"
                priority
                src={inbazIcon}
                alt="Immernoch besser als Zaubern"
            />
        </div>
    )
}
