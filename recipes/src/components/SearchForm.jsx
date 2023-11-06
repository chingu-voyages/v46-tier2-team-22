import { useState } from "react";
import FilterTags from "./FilterTags";
import PropTypes from "prop-types";

const SearchForm = ({ ingredients, setIsChangedState, setFilterTagValue }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    ingredients(inputValue);
    setIsChangedState(true);
  };
  return (
    <div className="w-full h-1/3 md:h-1/2 lg:h-full text-center flex flex-col justify-center items-center">
      <h1 className="text-2xl md:text-4xl text-neutral-900 mb-4 lg:mb-8 md:mb-6 ">
        Find Recipe
      </h1>
      <form onSubmit={handleSubmit} className="w-10/12 md:w-4/6 lg:w-7/12 h-11">
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between">
          <input
            type="text"
            placeholder="I want to make.."
            value={inputValue}
            onChange={handleInputChange}
            className="w-full bg-Pewter border border-Cinnabar mb-2 md:mb-0 text-xs md:text-sm h-7 md:h-9 pl-3"
          ></input>
          <button
            type="submit"
            onSubmit={() => handleSubmit()}
            className="w-28 md:w-48 lg:w-64 ml-3 md:ml-2 h-full bg-Cinnabar text-white text-xs md:text-sm md:h-9 rounded-sm"
          >
            search
          </button>
        </div>
        <FilterTags
          setFilterTagValue={setFilterTagValue}
          setIsChangedState={setIsChangedState}
        />
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  ingredients: PropTypes.func.isRequired,
  setIsChangedState: PropTypes.func.isRequired,
  setFilterTagValue: PropTypes.func.isRequired,
};

export default SearchForm;
