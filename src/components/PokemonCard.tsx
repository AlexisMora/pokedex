import { FC } from "react"
import { Pokemon } from "../interfaces/pokemon.interface"
import TypeBadge from "./TypeBadge"

interface Props {
    pokemon: Pokemon
}

const PokemonCard:FC<Props> = ({ pokemon }) => {
  return (
  <div className="flex flex-wrap items-center justify-center">
    <div className="relative flex-shrink-0 max-w-xs mx-2 mb-6 overflow-hidden bg-yellow-500 rounded-lg shadow-lg">
        <div className="relative flex items-center justify-center px-10 pt-10">
            <picture>
                <img className="relative w-40" src="https://i.seadn.io/gae/TjAYyDT-QZbmLvq1oso_MaajwO-yk4O5sBUrbUk7-GzQFheA3YRZz4Dn5-gUpDICivs9istK07RqeUogJpokIHlI6h2gbMtSwnfrFA?auto=format&w=1000" alt="pikachu"/>
            </picture>
                </div>
                <div className="relative px-6 pb-6 mt-6 text-white">
                    <div className="flex justify-between">
                        <span className="block text-xl font-semibold capitalize">
                            {pokemon.name}
                        </span>
                        <TypeBadge type="electric"/>
                    </div>
                </div>
    </div>
  </div>
  )
}

export default PokemonCard