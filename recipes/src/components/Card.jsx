import PropTypes from "prop-types";

function Card({ recipe }) {
  return (
    <div className="flex flex-col border-solid overflow-hidden shadow-md m-4 sm:w-72 bg-blue-50">
      <a
        className="hover:bg-blue-200 transition-all duration-500 h-full"
        href="#"
      >
        <img className="" src={recipe.thumbnail_url} alt={"dish" + recipe.id} />
        <div className="grow flex flex-col text-right p-2 sm:h-32 justify-between">
          <p className="p-2 font-bold">{recipe.name}</p>
          {recipe.user_ratings.score !== null && (
            <p className="text-sm">
              Ratings:{" "}
              {Number(recipe.user_ratings.score).toLocaleString(undefined, {
                style: "percent",
                minimumFractionDigits: 0,
              })}
            </p>
          )}
          {recipe.user_ratings.score === null && (
            <p className="text-sm">No ratings submitted</p>
          )}
          <p className="text-sm text-blue-600 p-2">Go to recipe</p>
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
