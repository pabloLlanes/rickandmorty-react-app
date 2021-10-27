import { GET_ALL_CHARACTERS, GET_CHARACTER } from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_ALL_CHARACTERS:
      return {
        ...state,
        characters: payload
      };
    case GET_CHARACTER:
      return {
        ...state,
        selectCharacter: payload
      };
    default:
      return state;
  }
};
