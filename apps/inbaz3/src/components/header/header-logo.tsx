import JugglingIcon from '../../icons/juggling-icon'

export const HeaderLogo = () => {
    return (
        <div className="flex min-h-12 flex-shrink-0 gap-4">
            <JugglingIcon className="w-12 h-12 fill-violet-400" />
            <span className="hidden text-5xl text-violet-400 md:block">DEBAZ</span>
        </div>
    )
}
