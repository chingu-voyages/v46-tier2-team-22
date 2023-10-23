import { arrayOf, shape, number, string, func } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function CardDetails({ recipe, setToggleCardDetails }) {
  return (
    <div className="absolute top-10 left-1/6 w-4/5 h-auto outline-none">
      <div className="bg-Gunmetal-gray">
        <div className="flex text-white">
          <div className="flex flex-col justify-center w-1/2">
            <img
              className="text-black"
              src={recipe.thumbnail_url}
              alt={"dish" + recipe.id}
            />
          </div>
          <div className="flex flex-col px-8 py-5 justify-center w-1/2">
            <div className="flex w-full justify-between">
              <h5 className="text-xs sm:text-xl font-bold">{recipe.name}</h5>
              <div>
                <button
                  type="button"
                  className="text-xs bg-Cinnabar hover:bg-Burnt-orange hover:text-white rounded-full px-2 py-1"
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
        <table className="border-separate p-5 border-spacing-x-5 border-spacing-y-2 bg-Pewter border-t-2">
          <tbody>
            <tr>
              <td>
                <h6 className="font-medium text-xs sm:text-xl">Instructions</h6>
              </td>
              <td>
                <ul className="px-5 text-xs list-disc list-inside space-y-2">
                  {recipe.instructions.map((step, idx) => (
                    <li key={idx}>{step.display_text}</li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <h6 className="font-medium text-xs sm:text-xl">Video</h6>
              </td>
              <td>
                {recipe.video_url === null ? (
                  <div className="px-5 text-xs sm:text-xl text-Gunmetal-gray">
                    No video not found
                  </div>
                ) : (
                  <a
                    className="px-5 text-md text-Burnt-orange hover:underline"
                    href={recipe.original_video_url}
                  >
                    Instruction video
                  </a>
                )}
              </td>
            </tr>
          </tbody>
        </table>
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
