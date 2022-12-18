import PokemonCard from "./components/PokemonCard"
import PokemonList from "./components/PokemonList"
import Searcher from "./components/Searcher"


const App = () => {

  return (
    <>
    <div className="App flex flex-col items-center justify-start min-h-screen py-2">
      <div className="flex flex-col items-center justify-start w-full px-20 text-center">
        <Searcher />
      </div>
      <div className="mt-6 flex flex-row items-center justify-center w-full px-20 text-center">
        <PokemonList pokemons={['', '', '', '', '', '', '']} />
      </div>
    </div>
    </>
  )
}

export default App
