import { FC } from "react"
import { PokemonDetail, PokemonOverview } from "../interfaces/pokemon.interface"
import PokemonCard from "./PokemonCard"

interface Props {
    pokemons: PokemonDetail[]
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