import { FC, useEffect, useState } from "react"
import { connect, Connect, shallowEqual, useDispatch, useSelector } from "react-redux"
import { getPokemonDetail, getPokemons } from "./api"
import { getPokemonWithDetails, setLoading, setPokemons } from "./actions/index"
import PokemonList from "./components/PokemonList"
import Searcher from "./components/Searcher"
import logo from './statics/pokedex_logo.png'
import Loader from "./components/Loader"

const App:FC = () => {
  const pokemons = useSelector((state: any) => state.getIn(['data', 'pokemons'], shallowEqual).toJS())
  const loading = useSelector((state: any) => state.getIn(['ui', 'loading']))
  const dispatch = useDispatch()
  useEffect(() => {
    const getPokemonsFromApi = async () => {
      dispatch(setLoading(true))
      const response = await getPokemons()
      dispatch(getPokemonWithDetails(response))
      dispatch(setLoading(false))
    }
    getPokemonsFromApi()
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
