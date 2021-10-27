import { Route, useLocation } from 'wouter';

//components
import CharactersList from './components/CharactersList';
import CharacterInfo from './components/CharacterInfo';

//context
import CharacterState from './context/Character/CharacterState';

function App() {
  return (
    <>
      <CharacterState>
        <Route path='/' exact component={CharactersList} />
        <Route path='/:id' component={CharacterInfo} />
      </CharacterState>
    </>
  );
}

export default App;
