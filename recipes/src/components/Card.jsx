import PropTypes from "prop-types";

function Card({ recipe }) {
  return (
    <div className="flex flex-col border-solid overflow-hidden shadow-lg m-4 w-40 md:w-72 lg:w-96 h-fit bg-gray-50">
      <a className="hover:bg-gray-200 transition-all duration-500" href="#">
        <img src={recipe.thumbnail_url} alt={"dish" + recipe.id} />
        <div className="grow flex flex-col text-right p-2 md:h-1/2 justify-between">
          <p className="p-2 text-xs sm:text-sm md:text-md font-bold">
            {recipe.name}
          </p>
          {recipe.user_ratings.score !== null && (
            <p className="text-xs sm:text-sm md:text-md">
              Ratings:{" "}
              {Number(recipe.user_ratings.score).toLocaleString(undefined, {
                style: "percent",
                minimumFractionDigits: 0,
              })}
            </p>
          )}
          {recipe.user_ratings.score === null && (
            <p className="text-xs sm:text-sm md:text-md">
              No ratings submitted
            </p>
          )}
          <p className="text-xs  sm:text-sm md:text-md text-blue-600 p-2">
            Go to recipe
          </p>
        </div>
      </a>
    </div>
  );
}

Card.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    thumbnail_url: PropTypes.string.isRequired,
    user_ratings: PropTypes.shape({
      score: PropTypes.number,
    }),
  }),
};

export default Card;
