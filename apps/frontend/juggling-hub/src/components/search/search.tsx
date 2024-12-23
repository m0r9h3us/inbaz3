import { Input } from '@juggling-hub/frontend/primitives';

export function Search() {
    return (
        <Input
            type="search"
            placeholder="Search..."
            className="hidden md:block md:w-[100px] lg:w-[300px]"
        />
    );
}
