import { useState, useContext } from 'react';
import title from '../img/title.png';
import CharacterContext from '../context/Character/CharacterContext';

const Search = () => {
  const { search, error } = useContext(CharacterContext);

  const optStatus = ['alive', 'dead', 'unknown'];
  const optGender = ['female', 'male', 'genderless ', 'unknown'];

  const [chars, setChars] = useState({
    name: '',
    status: '',
    gender: ''
  });

  console.log(chars);
  console.log(error);

  const handlerSubmit = (e) => {
    e.preventDefault();

    search(chars);
    // if (name.trim() === "") return;
  };

  const handlerInput = (e) => {
    setChars({
      ...chars,

      [e.target.name]: e.target.value
    });
  };

  return (
    <div className='container flex flex-col mb-12 md:px-32 lg:px-64'>
      <img className='title' src={title} alt='' />
      <form
        onSubmit={handlerSubmit}
        className='bg-white shadow-md rounded p-8  mb-4 arriba'
      >
        {/* filter by name */}

        <label className='block  text-sm font-bold mb-2'>Name</label>

        <div className='mb-4'>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3  focus:outline-none focus:shadow-outline'
            type='text'
            placeholder='search'
            name='name'
            onChange={handlerInput}
          />
        </div>
        {/* filter by status */}
        <label className='block  text-sm font-bold mb-2'>Status</label>
        <div className='mb-4 flex justify-start gap-8 items-center'>
          <select onChange={handlerInput} name='status' value={chars.status}>
            <option value={''}> all </option>
            {optStatus.map((status) => (
              <option value={status}>{status}</option>
            ))}
          </select>
        </div>

        {/* filter by gender */}
        <label className='block  text-sm font-bold mb-2'>Gender</label>

        <div className='mb-4 flex justify-start gap-8 items-center'>
          <select onChange={handlerInput} name='gender' value={chars.gender}>
            <option value={''}> all </option>

            {optGender.map((gender) => (
              <option value={gender}>{gender}</option>
            ))}
          </select>
        </div>

        <button className='' type='submit'>
          search
        </button>
      </form>{' '}
      {error && <h2>character not encountered</h2>}
    </div>
  );
};

export default Search;
