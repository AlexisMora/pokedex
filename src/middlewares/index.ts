import { SET_POKEMONS } from "../actions/types"

export const logger = (store: any) => (next: any) => (action: any) => {
    console.log('action: ', action)
    next(action)
}

export const featuring = (store: any) => (next: any) => (action: any) => {
    if (action.type === SET_POKEMONS) {
    const featured = [{ 
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

    },
        ...action.payload]
    next({...action, payload: featured})
    } else next(action)
}