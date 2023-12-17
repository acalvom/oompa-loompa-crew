import search from '@/assets/search.png'

export const Search = () => {
  return (
    <div className="flex flex-row relative w-56 my-3 mr-0 ml-auto">
      <input
        type="search"
        className="block p-2.5 w-full  text-sm text-grey-dark  rounded-lg border-s-grey-main  border border-grey-light focus:ring-focus focus:border-ring-focus  "
        placeholder="Search"
        required
      />
      <div className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white rounded-e-lg border ">
        <img
          src={search}
          alt="Search Oompa"
          className="w-5 h-5 text-grey-main"
          aria-hidden="true"
        />
        <span className="sr-only">Search</span>
      </div>
    </div>
  )
}

export default Search
