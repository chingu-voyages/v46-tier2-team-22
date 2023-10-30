import { useState } from "react";

import PropTypes from 'prop-types';

const SearchForm = ({ingredients}) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ingredients(inputValue);
  };
  return (
    <div className="w-full h-full text-center flex flex-col justify-center items-center">
      <h1 className='text-5xl text-neutral-900 mb-8'>Find Recipe</h1>
      <form onSubmit={handleSubmit}   className="w-3/5 h-11 flex justify-between" >
        <input
          type="text"
          placeholder="I want to make.."
          value={inputValue}
          onChange={handleInputChange}
          className="w-4/5  bg-Pewter border border-Cinnabar"
        ></input>
        <button type="submit" onSubmit={() => handleSubmit()} className="w-36 h-full bg-Cinnabar text-white  ml-3 rounded-sm">
          search
        </button>
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  ingredients: PropTypes.func.isRequired,
};

export default SearchForm;
