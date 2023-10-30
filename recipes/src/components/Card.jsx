import { useState } from "react";
import { arrayOf, shape, number, string } from "prop-types";

import CardDetails from "./CardDetails";

function Card({ recipe }) {
  const [toggleCardDetails, setToggleCardDetails] = useState(false);

  const fetchData = async () => {
    const url = `https://tasty.p.rapidapi.com/recipes/get-more-info?id=${recipe.id}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ee0b1fde36mshe7ecd0895ee5283p1a0ad4jsna86fc2392562",
        "X-RapidAPI-Host": "tasty.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      if (response.ok) {
        const result = await response.json();
        return result.nutrition;
      } else {
        throw new Error("Failed to fetch nutrition data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const renderCardDetails = async () => {
    try {
      const nutritionData = await fetchData();
      recipe.nutrition = nutritionData;
      setToggleCardDetails(!toggleCardDetails);
    } catch (error) {
      console.error(error);
    }
  };

  function handleParentClick(e) {
    if (e.target === e.currentTarget) {
      setToggleCardDetails(false);
    }
  }

  return (
    <>
      <div className="flex flex-col border-solid overflow-hidden shadow-lg m-6 w-48 md:w-72 lg:w-104 h-fit bg-Pewter">
        <a
          className="hover:bg-Freesia transition-all duration-500 cursor-pointer"
          onClick={renderCardDetails}
        >
          <img
            className="object-cover w-full h-32 sm:h-48 md:h-64 lg:h-80"
            src={recipe.thumbnail_url}
            alt={"dish" + recipe.id}
          />
          <div className="grow flex flex-col text-right p-2 sm:p-4 md:p-6 lg:p-7 md:h-1/2 justify-between">
            <span className="p-2 text-xs sm:text-sm md:text-md font-bold">
              {recipe.name}
            </span>
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
            <p className="text-xs  sm:text-sm md:text-md text-Burnt-orange p-2">
              Go to recipe
            </p>
          </div>
        </a>
      </div>
      {/* Create a darkened background to provide focus on the popup & click outside the popup to close */}
      {toggleCardDetails && (
        <div
          className="absolute top-0 left-0 w-screen h-full outline-none bg-gray-600 opacity-50"
          onClick={handleParentClick}
        ></div>
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
    original_video_url: string,
  }),
};

export default Card;
