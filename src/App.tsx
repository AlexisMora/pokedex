import { FC, useEffect, useState } from "react"
import { connect, Connect, useDispatch, useSelector } from "react-redux"
import { getPokemonDetail, getPokemons } from "./api"
import { getPokemonWithDetails, setPokemons } from "./actions/index"
import PokemonList from "./components/PokemonList"
import Searcher from "./components/Searcher"
import logo from './statics/pokedex_logo.png'

const App:FC = () => {
  const pokemons = useSelector((state: any) => state.pokemons)
  const dispatch = useDispatch()
  useEffect(() => {
    const getPokemonsFromApi = async () => {
      const response = await getPokemons()
      dispatch(getPokemonWithDetails(response))
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
        <div className="mt-6 flex flex-row items-center justify-center w-full px-20 text-center">
          <PokemonList pokemons={pokemons} />
        </div>
      </div>
    </>
  )
}

export default App
