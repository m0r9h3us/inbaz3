import JugglingIcon from '../../icons/juggling-icon';

export const HeaderLogo = () => {
    return (
        <div className="flex min-h-12 flex-shrink-0 gap-4 items-center">
            <JugglingIcon className="w-10 h-10 fill-violet-600" />
            <div className="hidden md:block">
                <span className="text-4xl text-violet-400">
                    JUGGLING <span className="text-4xl text-violet-600">HUB</span>
                </span>
            </div>
        </div>
    );
};
