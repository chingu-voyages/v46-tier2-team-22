import { useEffect } from "react";
import { arrayOf, shape, number, string, func } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function CardDetails({ recipe, setToggleCardDetails }) {
  // Click anywhere else outside the card will close the details popup
  function handleParentClick(e) {
    if (e.target === e.currentTarget) {
      setToggleCardDetails(false);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="absolute top-0 left-0 w-full h-full outline-none"
      onClick={handleParentClick}
    >
      <div className="bg-gray-100">
        <div className="flex">
          <div className="flex flex-col justify-center w-1/2">
            <img
              className="text-black"
              src={recipe.thumbnail_url}
              alt={"dish" + recipe.id}
            />
          </div>
          <div className="flex flex-col px-8 py-5 justify-center w-1/2">
            <div className="flex w-full justify-between">
              <h5 className="text-xs sm:text-xl font-medium">{recipe.name}</h5>
              <div>
                <button
                  type="button"
                  className="text-xs bg-blue-300 hover:bg-blue-500 hover:text-white rounded-full px-2 py-1"
                  onClick={() => setToggleCardDetails(false)}
                >
                  <FontAwesomeIcon icon={faX} />
                </button>
              </div>
            </div>

            <div className="flex py-2">
              <div className="flex flex-col pr-4">
                <p className="text-xs uppercase">Cook</p>
                <p className="text-xs">
                  {recipe.cook_time_minutes + " minutes"}
                </p>
              </div>
              <div className="flex flex-col pl-4 border-l border-gray-400">
                <p className="text-xs uppercase">Servings</p>
                <p className="text-xs">{"serves " + recipe.num_servings}</p>
              </div>
            </div>
            <div className="py-4">
              <h6 className="text-xs sm:text-xl underline">Ingredients</h6>
              <ul className="pt-2 text-xs list-disc list-inside">
                {recipe.sections.map((section, sectionIdx) =>
                  section.components.map((ingredient, ingredientIdx) => (
                    <li key={sectionIdx + "-" + ingredientIdx}>
                      {ingredient.raw_text}
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex border-t-2 p-5">
          <h6 className="font-medium text-xs sm:text-xl">Instructions</h6>
          <ul className="px-5 text-xs list-disc list-inside">
            {recipe.instructions.map((step, idx) => (
              <li key={idx}>{step.display_text}</li>
            ))}
          </ul>
        </div>
        <div className="flex border-t-2 p-5">
          <h6 className="font-medium text-xs sm:text-xl">Video</h6>
          {recipe.video_url === null ? (
            <div className="px-5 text-xs sm:text-xl">No video not found</div>
          ) : (
            <a
              className="px-5 text-xs sm:text-xl text-blue-500 hover:underline"
              href={recipe.original_video_url}
            >
              Instruction video
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

CardDetails.propTypes = {
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
  setToggleCardDetails: func.isRequired,
};

export default CardDetails;
