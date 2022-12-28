import { fromJS, setIn } from 'immutable'
import { SET_POKEMONS } from './../actions/types'
export const initialState = fromJS({
    pokemons: [],
})

export const pokemonsReducer = (state = initialState, action: any) => {
    const { type, payload } = action
    switch(type) {
        case SET_POKEMONS:
            return setIn(state, ['pokemons'], fromJS(payload))
        default:
            return state
    }
}