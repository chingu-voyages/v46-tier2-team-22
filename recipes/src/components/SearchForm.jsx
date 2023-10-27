import React, { useState } from "react";

const SearchForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full h-1/3 md:h-1/2 lg:h-full text-center flex flex-col justify-center items-center">
      <h1 className="text-2xl md:text-4xl text-neutral-900 mb-4 lg:mb-8 md:mb-6 ">
        Find Recipe
      </h1>
      <form onSubmit={handleSubmit} className="w-10/12 md:w-4/6 lg:w-7/12 h-11 flex flex-wrap md:flex-nowrap justify-center md:justify-between">
        <input
          type="text"
          placeholder="I want to make.."
          value={inputValue}
          onChange={handleInputChange}
          className="w-full bg-Pewter border border-Cinnabar mb-2 md:mb-0 text-xs md:text-sm h-7 md:h-9 "
        ></input>
        <button
          type="submit"
          className=" w-28 md:w-48 lg:w-64 ml-0 md:ml-2 bg-Cinnabar text-white text-xs md:text-sm h-7 md:h-9 rounded-sm"
        >
          search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
