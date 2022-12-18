import axios from "axios"

export const getPokemons = async () => {
    try {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
        console.log('pokemons:', data)
        return data.results
    } catch (error) {
        console.log('There was an error:', error)
    }
}