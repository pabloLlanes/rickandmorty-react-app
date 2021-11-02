import React, { useContext } from 'react';
import { useLocation } from 'wouter';

import CharacterContext from '../context/Character/CharacterContext';

const CharacterInfo = ({ id }) => {
  const [, setLocation] = useLocation();
  const { selectCharacter } = useContext(CharacterContext);

  return (
    <section>
      {selectCharacter ? (
        <section class='text-gray-600 body-font'>
          <div class='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
            <img
              class='lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded'
              alt='hero'
              src={selectCharacter.image}
            />
            <div class='text-center lg:w-2/3 w-full'>
              <h1 class='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
                {selectCharacter.name}
              </h1>
              <p class='mb-8 leading-relaxed'>
                Meggings kinfolk echo park stumptown DIY, kale chips beard
                jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
                godard disrupt ramps hexagon mustache umami snackwave tilde
                chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui
                celiac mlkshk freegan photo booth af fingerstache pitchfork.
              </p>
              <div class='flex justify-center'>
                <button class='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                  Button
                </button>
                <button class='ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
                  Button
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <h2>loading....</h2>
      )}
    </section>
  );
};

export default CharacterInfo;

/* 
   <div className='container bg-blue-300 h-full mt-16 w-full  flex  flex-col justify-center items-center lg:flex-row '>
          <div>
            <img
              className='p-4 rounded-xl'
              src={selectCharacter.image}
              alt='blog'
            />
          </div>

          <div className='flex flex-col justify-center py-8'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
              {selectCharacter.name}
            </h1>
            <div className='flex justify-center'>
              <div className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                {selectCharacter.species}
              </div>
              <div
                class='ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'
                onClick={() => {
                  setLocation('/');
                }}
              >
                {selectCharacter.status}
              </div>
            </div>
          </div>
        </div>*/
