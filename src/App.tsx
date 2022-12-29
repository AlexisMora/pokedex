import { FC, useEffect} from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import PokemonList from "./components/PokemonList"
import Searcher from "./components/Searcher"
import logo from './statics/pokedex_logo.png'
import Loader from "./components/Loader"
import { fetchPokemonsWithDetails } from "./slices/dataSlice"

const App:FC = () => {
  const pokemons = useSelector((state: any) => state.data.pokemons, shallowEqual)
  const loading = useSelector((state: any) => state.ui.loading)
  const dispatch = useDispatch<any>()
  useEffect(() => {
    dispatch(fetchPokemonsWithDetails())
  }, [])
  return (
    <>
      <div className="App flex flex-col items-center justify-start min-h-screen py-2">
          <img className="mr-6" src={logo} alt="pokedex" />
        <div className="mt-2 flex flex-col items-center justify-start w-full px-20 text-center">
          <Searcher />
        </div>
          {loading 
          ? ( <Loader /> )
          : ( <div className="mt-6 flex flex-row items-center justify-center w-full px-20 text-center">
                <PokemonList pokemons={pokemons} />
            </div> )}
      </div>
    </>
  )
}

export default App
