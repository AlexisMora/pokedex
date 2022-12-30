import { PokemonDetail, Type } from './../../interfaces/pokemon.interface';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getPokemonDetail, getPokemons } from "../../api"
import { PokemonOverview } from "../../interfaces/pokemon.interface"
import { setLoading } from "./uiSlice"

const initialState = {
    pokemons: [],
    pokemonsFiltered: []
}

const alexis = { 
    name: 'Alexis Mora',
    sprites: {
        front_default: 'https://alexismora.dev/_nuxt/assets/alexis_mora.8b8613f9.jpg'
    },
    types: [
        {
            type: {
                name: 'developer'
            }
        }
    ]

}

export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_, { dispatch }) => {
        dispatch(setLoading(true))
        const response = await getPokemons()
        const pokemonDetails = await Promise.all(
            response.map((pokemon: PokemonOverview) => getPokemonDetail(pokemon))
          )
        pokemonDetails.unshift(alexis)
        dispatch(setPokemons(pokemonDetails))
        dispatch(setPokemonsFiltered(pokemonDetails))
        dispatch(setLoading(false))
    }
)

export const filterPokemons = createAsyncThunk(
    'data/filterPokemons',
    async (search: string, { dispatch, getState }: any) => {
        const { pokemons } = getState().data
        let pokemonsFiltered = pokemons.filter((pokemon: PokemonDetail) => pokemon.name.toUpperCase().includes(search.toUpperCase()))
        if (pokemonsFiltered.length === 0) {
            pokemonsFiltered = pokemons.filter((pokemon: PokemonDetail) => {
                let hasType = false
                pokemon.types.forEach((type: Type) => {
                    if (type.type.name.toUpperCase().includes(search.toUpperCase())) {
                        hasType = true
                    }
                })
                return hasType
            })
        }
        dispatch(setPokemonsFiltered(pokemonsFiltered))
    }
)

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload
        },
        setPokemonsFiltered: (state, action) => {
            state.pokemonsFiltered = action.payload
        }
    }
})

export const { setPokemons, setPokemonsFiltered } = dataSlice.actions

export default dataSlice.reducer