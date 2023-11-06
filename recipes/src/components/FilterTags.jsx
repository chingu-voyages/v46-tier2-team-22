import { useState, useEffect } from "react";
import { func } from "prop-types";
import fetchData from "../utils/fetchData";

function FilterTags({ setFilterTagValue, setIsChangedState }) {
  const [tagsList, setTagsList] = useState([]);
  const filterTypes = Array.from(new Set(tagsList.map(x => x.root_tag_type)));

  useEffect(() => {
    const url = `https://tasty.p.rapidapi.com/tags/list`;
    fetchData("GET", url, setTagsList);
  }, []);

  function handleFilter(e) {
    setFilterTagValue(e.target.value);
    setIsChangedState(true);
  }

  return (
    <div className="flex p-3 justify-start">
      <label className="pr-2">Apply filters: </label>
      <select
        name="filters"
        id="filters"
        className="bg-Pewter"
        onChange={handleFilter}
      >
        <option value="" disabled>
          -- Apply tag filters here --
        </option>
        {filterTypes.map(type => (
          <optgroup label={type} key={type}>
            {tagsList.map(
              tag =>
                tag.root_tag_type === type && (
                  <option value={tag.name} key={tag.id}>
                    {tag.display_name}
                  </option>
                )
            )}
          </optgroup>
        ))}
      </select>
    </div>
  );
}

FilterTags.propTypes = {
  setFilterTagValue: func.isRequired,
  setIsChangedState: func.isRequired,
};

export default FilterTags;
