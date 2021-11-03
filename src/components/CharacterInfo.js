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
          <button
            onClick={() => {
              setLocation('/');
            }}
            class='ml-4 absolute inline-flex  bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'
          >
            Button
          </button>
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
              </p>
              <div class='flex justify-center gap-4'>
                <div class='shadow-lg rounded-2xl w-64 p-4 bg-white relative overflow-hidden'>
                  <img
                    alt='moto'
                    src={selectCharacter.image}
                    class='absolute -right-20 -bottom-8 h-40 w-40 mb-4'
                  />
                  <div class='w-4/6'>
                    <p class='text-indigo-500 text-xl font-medium'>status:</p>
                    <p class='text-indigo-500 text-xl font-medium'>
                      {selectCharacter.status}
                    </p>
                  </div>
                </div>

                <div class='shadow-lg rounded-2xl w-64 p-4 bg-white relative overflow-hidden'>
                  <img
                    alt='moto'
                    src={selectCharacter.image}
                    class='absolute -right-20 -bottom-8 h-40 w-40 mb-4'
                  />
                  <div class='w-4/6'>
                    <p class='text-gray-800 text-lg font-medium mb-2'>
                      {' '}
                      gender:{' '}
                    </p>
                    <p class='text-gray-800 text-lg font-medium mb-2'>
                      {' '}
                      {selectCharacter.gender}
                    </p>
                    <p class='text-gray-800 text-lg font-medium mb-2'>
                      {' '}
                      {selectCharacter.species}
                    </p>
                  </div>
                </div>

                <div class='shadow-lg rounded-2xl w-64 p-4 bg-white relative overflow-hidden'>
                  <img
                    alt='moto'
                    src={selectCharacter.image}
                    class='absolute -right-20 -bottom-8 h-40 w-40 mb-4'
                  />
                  <div class='w-4/6'>
                    <p class='text-indigo-500 text-xl font-medium'>
                      {selectCharacter.gender}
                    </p>
                  </div>
                </div>
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
