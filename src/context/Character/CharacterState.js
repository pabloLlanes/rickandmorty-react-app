import { useReducer } from 'react';
import axios from 'axios';

import CharacterReducer from './CharacterReducer';
import CharacterContext from './CharacterContext';

import { GET_ALL_CHARACTERS, GET_CHARACTER, GET_PAGE } from '../types';

const URL = 'https://rickandmortyapi.com/api/character';

const CharacterState = ({ children }) => {
  const initialState = {
    characters: [],
    selectCharacter: null
  };
  const [state, dispatch] = useReducer(CharacterReducer, initialState);

  const getCharacters = async () => {
    try {
      const res = await axios.get(URL);
      const data = res.data;
      console.log(data);
      dispatch({ type: GET_ALL_CHARACTERS, payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  const getCharacter = async (id) => {
    try {
      const res = await axios.get(URL + `/${id}`);
      const { data } = res;
      dispatch({ type: GET_CHARACTER, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
  const getPage = async (page) => {
    try {
      const res = await axios.get(URL + `/?page=${page}`);
      const { data } = res;
      dispatch({ type: GET_PAGE, payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CharacterContext.Provider
      value={{
        characters: state.characters,
        selectCharacter: state.selectCharacter,
        getCharacters,
        getCharacter,
        getPage
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterState;
