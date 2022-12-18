import { FC } from "react"
import { Pokemon } from "../interfaces/pokemon.interface"
import PokemonCard from "./PokemonCard"

interface Props {
    pokemons: Pokemon[]
}

const PokemonList:FC<Props> = ({ pokemons }) => {
  return (
    <div className="flex flex-wrap">
        {pokemons.map((pokemon) => {
            return <PokemonCard key={pokemon.name} pokemon={pokemon} />
        })}
    </div>
  )
}

export default PokemonList