import { SET_POKEMONS } from './../actions/types';
export const initialState = {
    pokemons: []
}

export const pokemonsReducer = (state = initialState, action: any) => {
    const { type, payload } = action
    switch(type) {
        case SET_POKEMONS:
            return {...state, pokemons: payload}
        default:
            return state
    }
}