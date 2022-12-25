import { getPokemonDetail } from '../api';
import { PokemonOverview } from './../interfaces/pokemon.interface';
import { SET_POKEMONS } from "./types"

export const setPokemons = (payload: any) => ({
    type: SET_POKEMONS,
    payload
})

export const getPokemonWithDetails = 
(pokemons: PokemonOverview[] = []) => 
async (dispatch: any) => {
    const pokemonDetails = await Promise.all(
        pokemons.map((pokemon: PokemonOverview) => getPokemonDetail(pokemon))
      )
    dispatch(setPokemons(pokemonDetails))
}