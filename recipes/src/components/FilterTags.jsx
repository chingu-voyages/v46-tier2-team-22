import { useState, useEffect } from "react";
import { func } from "prop-types";
import fetchData from "../utils/fetchData";

function FilterTags({ setFilterTagValue, setIsChangedState }) {
  const [tagsList, setTagsList] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const filterTypes = Array.from(new Set(tagsList.map(x => x.root_tag_type)));

  useEffect(() => {
    const url = `https://tasty.p.rapidapi.com/tags/list`;
    fetchData("GET", url, setTagsList);
  }, []);

  function handleFilter(e) {
    setFilterTagValue(e.target.value);
    setIsChangedState(true);
  }

  function handleFilterTypes(e) {
    setSelectedType(e.target.value);
  }

  return (
    <div className="hidden sm:flex py-3 justify-start text-sm">
      <label className="pr-2 px-2">Search filters: </label>
      <select
        name="filterTypes"
        id="filterTypes"
        className="bg-Pewter px-2 w-40 overflow-clip"
        onChange={handleFilterTypes}
      >
        <option value="">-- Select filter type --</option>
        {filterTypes.map(type => (
          <option key={type} value={type}>
            {type.slice(0, 1).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </select>
      {selectedType ? (
        <select
          name="filters"
          id="filters"
          className="bg-Pewter px-2 w-32 md:w-40 lg:w-48 overflow-clip"
          onChange={handleFilter}
        >
          <option value="">-- Select filter tag --</option>
          {tagsList.map(
            tag =>
              tag.root_tag_type === selectedType && (
                <option key={tag.id} value={tag.name}>
                  {tag.display_name}
                </option>
              )
          )}
        </select>
      ) : null}
    </div>
  );
}

FilterTags.propTypes = {
  setFilterTagValue: func.isRequired,
  setIsChangedState: func.isRequired,
};

export default FilterTags;
