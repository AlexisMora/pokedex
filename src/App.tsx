import { useEffect, useState } from "react"
import { getPokemons } from "./api"
import PokemonList from "./components/PokemonList"
import Searcher from "./components/Searcher"
import { Pokemon } from "./interfaces/pokemon.interface"
import logo from './statics/pokedex_logo.png'

const App = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  useEffect(() => {
    console.log('App mounted')
    const fetchPokemons = async () => { 
      const pokemons = await getPokemons()
      setPokemons(pokemons)
    }
    fetchPokemons()
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
