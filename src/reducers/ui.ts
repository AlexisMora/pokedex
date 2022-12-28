import { fromJS, setIn } from 'immutable'
import { SET_LOADING } from './../actions/types'
export const initialState = fromJS({
    loading: false
})

export const uiReducer = (state = initialState, action: any) => {
    const { type, payload } = action
    switch(type) {
        case SET_LOADING:
            return setIn(state, ['loading'], fromJS(payload))
        default:
            return state
    }
}