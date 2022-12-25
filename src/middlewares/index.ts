export const logger = (store: any) => (next: any) => (action: any) => {
    console.log('action: ', action)
    next(action)
}

export const featuring = (store: any) => (next: any) => (action: any) => {
    const featured = [{ 
        name: 'Alexis Mora',
        sprites: {
            front_default: 'https://alexismora.dev/_nuxt/assets/alexis_mora.8b8613f9.jpg'
        }
    },
        ...action.payload]
    // Future img:
    // https://alexismora.dev/_nuxt/assets/alexis_mora.8b8613f9.jpg
    next({...action, payload: featured})
}