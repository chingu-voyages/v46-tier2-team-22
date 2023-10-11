import { useState } from "react";
import { arrayOf, shape, number, string } from "prop-types";

import CardDetails from "./CardDetails";

function Card({ recipe }) {
  const [toggleCardDetails, setToggleCardDetails] = useState(false);

  return (
    <>
      <div className="flex flex-col border-solid overflow-hidden shadow-lg m-4 w-40 md:w-72 lg:w-96 h-fit bg-gray-50">
        <a
          className="hover:bg-gray-200 transition-all duration-500 cursor-pointer"
          onClick={() => setToggleCardDetails(!toggleCardDetails)}
        >
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
      {/* Create a darkened background to provide focus on the popup */}
      {toggleCardDetails && (
        <div className="fixed top-0 left-0 w-full h-full outline-none bg-gray-400 opacity-25"></div>
      )}
      {/* Create the popup */}
      {toggleCardDetails && (
        <CardDetails
          recipe={recipe}
          setToggleCardDetails={setToggleCardDetails}
        />
      )}
    </>
  );
}

Card.propTypes = {
  recipe: shape({
    id: number.isRequired,
    name: string.isRequired,
    thumbnail_url: string.isRequired,
    user_ratings: shape({
      score: number,
    }),
    cook_time_minutes: number,
    num_servings: number,
    sections: arrayOf(
      shape({
        components: arrayOf(
          shape({
            raw_text: string.isRequired,
          })
        ),
      })
    ),
    instructions: arrayOf(
      shape({
        display_text: string.isRequired,
      })
    ),
  }),
};

export default Card;
