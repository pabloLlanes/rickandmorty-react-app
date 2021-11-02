import React, { useEffect, useContext } from 'react';
import CharacterContext from '../context/Character/CharacterContext';
import Character from './CharacterCard';
import { Pagination } from './Pagination';
const CharactersList = () => {
  const { characters, getPage } = useContext(CharacterContext);
  const chars = characters.results;

  useEffect(() => {
    getPage(1);
  }, []);

  return (
    <section
      id='section1'
      className='container px-5 py-24 mx-auto text-gray-600 body-font'
    >
      <div>
        <li>{}</li>
      </div>

      <div className='flex flex-wrap justify-center -m-4'>
        {chars?.map((char) => (
          <Character character={char} key={char.id} />
        ))}
      </div>
      <Pagination />
    </section>
  );
};

export default CharactersList;
