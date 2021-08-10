import { useReducer } from "react";
import CharacterReducer from "./CharacterReducer";
import CharacterContext from "./CharacterContext";
import axios from "./axios";

const CharacterState = ({ children }) => {
  const initialState = {
    characters: [],
    selectCharacter: null
  };

  const [state, dispatch] = useReducer(CharacterReducer, initialState);

  const getCharacters = async () => {
    const res = await axios.get("https://rickandmortyapi.com/api/character");
    console.log(res);
  };

  const getCharacter = () => {};

  return (
    <CharacterContext.Provider
      value={{
        characters: state.characters,
        selectCharacter: state.selectCharacter,
        getCharacters,
        getCharacter
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterState;
