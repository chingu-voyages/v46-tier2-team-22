import { useState } from "react";
import Card from "./Card";
// import dummyRecipes from "../data/dummyData";
import PropTypes from "prop-types";

// Your component here

CardList.propTypes = {
  cardDetails: PropTypes.array.isRequired,
};

function CardList({ cardDetails }) {
  const renderedCards = 3; //change value after dummy is replaced
  const recipes = cardDetails;
  const [loadMore, setLoadMore] = useState(renderedCards);

  const handleLoadMore = () => {
    setLoadMore(loadMore + renderedCards);
  };

  return (
    <div className="flex flex-col">
      <div
        className="relative flex flex-wrap items-center justify-evenly mx-auto mb-5 py-6 bg-Gunmetal-gray w-screen max-w-screen-25"
        id="card-holder"
      >
        {recipes.slice(0, loadMore).map(recipe => (
          <Card recipe={recipe} key={recipe.id} />
        ))}
      </div>
      {loadMore < recipes.length && (
        <button
          onClick={handleLoadMore}
          className="w-36 border border-black m-4 p-3 rounded-sm self-center"
        >
          load more
        </button>
      )}
    </div>
  );
}

export default CardList;
