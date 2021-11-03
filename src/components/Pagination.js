import React, { useContext, useState } from 'react';
import CharacterContext from '../context/Character/CharacterContext';
import { Link as Go } from 'react-scroll';

export const Pagination = () => {
  const { characters, getPage } = useContext(CharacterContext);

  const info = characters.info;

  const [page, setPage] = useState(1);

  let pages = info?.pages || 10;

  const handlerNext = () => {
    if (info?.next === null || page > pages) return;
    getPage(page + 1);
    setPage(page + 1);
  };
  const handlerPrev = () => {
    if (info?.prev === null || page < 1) return;
    setPage(page - 1);
    getPage(page - 1);
  };

  return (
    <div className='flex container justify-center p-8  mt-8  gap-4'>
      <Go to='section1' smooth={true} duration={500}>
        <button
          className='flex items-center  font-bold h-4 w-8 bg-green-500 '
          onClick={handlerPrev}
        >
          <span className='mx-1 h-168 w-16'>Prev ◀ </span>
        </button>
      </Go>

      <Go to='section1' smooth={true} duration={900}>
        <button
          className='flex items-center  font-bold h-4 w-8 bg-green-500 '
          onClick={handlerNext}
        >
          <span className='mx-1 h-8 w-16'>Next ▶</span>
        </button>
      </Go>
    </div>
  );
};
