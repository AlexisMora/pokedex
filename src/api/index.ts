import axios from "axios"
import { PokemonOverview } from "../interfaces/pokemon.interface"

export const getPokemons = async () => {
    try {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
        console.log('pokemons:', data)
        return data.results
    } catch (error) {
        console.log('There was an error:', error)
    }
}

export const getPokemonDetail = async (pokemon: PokemonOverview) => {
    try {
        const { data } = await axios.get(pokemon.url)
        return data
    } catch (error) {
        console.log('There was an error:', error)
    }
}