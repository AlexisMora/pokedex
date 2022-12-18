import { FC } from "react"
import PokemonCard from "./PokemonCard"

interface Props {
    pokemons: any[]
}

const PokemonList:FC<Props> = ({ pokemons }) => {
  return (
    <div className="flex flex-wrap">
        {pokemons.map((pokemon) => {
            return <PokemonCard key={pokemon} />
        })}
    </div>
  )
}

export default PokemonList