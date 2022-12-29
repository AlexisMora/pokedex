import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getPokemonDetail, getPokemons } from "../api"
import { PokemonOverview } from "../interfaces/pokemon.interface"
import { setLoading } from "./uiSlice"

const initialState = {
    pokemons: []
}

export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_, { dispatch }) => {
        dispatch(setLoading(true))
        const response = await getPokemons()
        const pokemonDetails = await Promise.all(
            response.map((pokemon: PokemonOverview) => getPokemonDetail(pokemon))
          )
        dispatch(setPokemons(pokemonDetails))
        dispatch(setLoading(false))
    }
)

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload
        }
    }
})

export const { setPokemons } = dataSlice.actions

export default dataSlice.reducer