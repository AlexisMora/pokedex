import { FC } from "react"
import { PokemonDetail } from "../interfaces/pokemon.interface"
import TypeBadge from "./TypeBadge"

interface Props {
    pokemon: PokemonDetail
}

const PokemonCard:FC<Props> = ({ pokemon }) => {
    const color:any = {
        fire: 'bg-red-500',
        grass: 'bg-green-500',
        electric: 'bg-yellow-500',
        water: 'bg-blue-500',
        ground: 'bg-yellow-900',
        rock: 'bg-slate-500',
        fairy: 'bg-indigo-500',
        poison: 'bg-purple-500',
        bug: 'bg-amber-500',
        dragon: 'bg-emerald-500',
        psychic: 'bg-pink-500',
        flying: 'bg-sky-500',
        fighting: 'bg-rose-500',
        normal: 'bg-gray-500',
        ghost: 'bg-violet-500',
        ice: 'bg-sky-200',
        developer: 'bg-yellow-500'

    }
  return (
    <div className="flex flex-wrap items-center justify-center">
        <div className={`relative flex-shrink-0 max-w-xs mx-2 mb-6 overflow-hidden ${color[pokemon.types[0].type.name]} rounded-lg shadow-lg`}>
            <div className="relative flex items-center justify-center px-10 pt-10">
                <picture>
                    <img
                    className="relative w-40 rounded-md"
                    src={ pokemon.sprites.front_default ? pokemon.sprites.front_default
                        : "https://i.seadn.io/gae/TjAYyDT-QZbmLvq1oso_MaajwO-yk4O5sBUrbUk7-GzQFheA3YRZz4Dn5-gUpDICivs9istK07RqeUogJpokIHlI6h2gbMtSwnfrFA?auto=format&w=1000" }
                    alt={pokemon.name}/>
                </picture>
                    </div>
                    <div className="relative px-6 pb-6 mt-6 text-white">
                        <div className="flex flex-col justify-between flex-wrap">
                            <span className="block text-xl font-semibold capitalize">
                                {pokemon.name}
                            </span>
                            <div className="flex flex-row justify-center mt-3" >
                            {pokemon.types.map((type, index) => (
                                <div key={index} className={`${index !== 0 ? 'ml-2' :''}`} >
                                    <TypeBadge type={type.type.name}/>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
        </div>
    </div>
  )
}

export default PokemonCard