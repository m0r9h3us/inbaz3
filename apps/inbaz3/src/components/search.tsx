import { Input } from "@inbaz3/primitives"

export function Search() {
  return (
    <div className="max-sm:hidden">
      <Input
        type="search"
        placeholder="Search..."
        className="md:w-[100px] lg:w-[300px]"
      />
    </div>
  )
}
