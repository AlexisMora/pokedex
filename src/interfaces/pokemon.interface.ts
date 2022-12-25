export interface PokemonOverview {
    name: string
    url: string
    img?: string
}

// ! This is not the full interface, just the properties i need
export interface PokemonDetail {
    abilities: any[]
    base_experience: number
    forms: any[]
    game_indices: any[]
    height: number
    held_items: any[]
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: any[]
    name: string
    order: number
    species: any
    sprites: any
    stats: any[]
    types: Type[]
    weight: number
}

export interface Type {
    slot: number
    type: {
        name: string
        url: string
    }
}