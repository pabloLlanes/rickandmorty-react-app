/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useContext } from 'react';
import { useLocation } from 'wouter';

import CharacterContext from '../context/Character/CharacterContext';

const CharacterCard = ({ character }) => {
  const { getCharacter } = useContext(CharacterContext);
  const [, setLocation] = useLocation();

  const { id, name, image, status, species, gender } = character;

  return (
    <div className='p-4 md:w-1/3'>
      <div className='awesome-card  gap-4 border-2 border-gray-200 border-opacity-60 rounded-xl overflow-hidden'>
        <img className='w-full p-2 rounded-xl' src={image} alt='blog' />
        <div className='p-6'>
          <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
            {status}
          </h2>
          <h1 class='title-font text-lg font-medium text-gray-900 mb-3'>
            {name}
          </h1>
          <p className='leading-relaxed mb-3'>
            {gender}-----{species}
          </p>
          <div className='flex items-center flex-wrap '>
            <a className='text-blue-500 '>
              <button
                onClick={() => {
                  getCharacter(id);
                  setLocation(`/${id}`);
                }}
              >
                button
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CharacterCard;
