import { SET_LOADING, SET_POKEMONS } from './../actions/types'
export const initialState = {
    pokemons: [],
    loading: false
}

export const pokemonsReducer = (state = initialState, action: any) => {
    const { type, payload } = action
    switch(type) {
        case SET_POKEMONS:
            return {...state, pokemons: payload}
        case SET_LOADING:
            return {...state, loading: payload}
        default:
            return state
    }
}