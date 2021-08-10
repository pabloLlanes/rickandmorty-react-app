//components
import CharactersList from "./components/CharactersList";

//context
import CharacterState from "./context/Character/CharacterState";

function App() {
  return (
    <div className="App">
      <div className="h-32 bg-black flex justify-center items-center">
        <h3 className="text-3xl text-white">Hola</h3>

        <CharactersList />
      </div>
    </div>
  );
}

export default App;
