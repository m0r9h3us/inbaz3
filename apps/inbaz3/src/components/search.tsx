import { Input } from "@inbaz3/primitives"

export function Search() {
  return (
    <Input
      type="search"
      placeholder="Search..."
      className="sm:hidden md:block md:w-[100px] lg:w-[300px]"
    />
  )
}
