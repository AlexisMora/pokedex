import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { filterPokemons } from "../store/slices/dataSlice"

const Searcher = () => {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch<any>()

  useEffect(() => {
    dispatch(filterPokemons(search))
  }, [search])
  return (
    <div className=" relative ">
      <input
        type="text"
        id="rounded-email"
        className="rounded-l-full rounded-r-full flex-1 appearance-none border border-gray-300 w-full py-2 px-10 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
    </div>

  )
}

export default Searcher