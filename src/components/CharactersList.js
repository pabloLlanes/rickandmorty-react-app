import React, { useEffect, useContext } from 'react';
import CharacterContext from '../context/Character/CharacterContext';
import Character from './CharacterCard';

const CharactersList = () => {
  const { characters, getCharacters } = useContext(CharacterContext);
  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <section className='container px-5 py-24 mx-auto text-gray-600 body-font'>
      <div className='flex flex-wrap justify-center -m-4'>
        {characters.map((char) => (
          <Character character={char} key={char.id} />
        ))}
      </div>
    </section>
  );
};

export default CharactersList;
