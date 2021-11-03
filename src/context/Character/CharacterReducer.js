import {
  GET_ALL_CHARACTERS,
  GET_CHARACTER,
  GET_PAGE,
  SEARCH,
  SEARCH_ERROR
} from '../types';

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
    case GET_PAGE:
      return {
        ...state,
        characters: payload
      };
    case SEARCH:
      return {
        ...state,
        characters: payload
      };
    case SEARCH_ERROR:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};
