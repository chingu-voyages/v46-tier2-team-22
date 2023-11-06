import { arrayOf, shape, number, string, func, bool } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

function CardDetails({ recipe, nutrition, setToggleCardDetails, setPopUp }) {
  function isEmpty(obj) {
    for (const prop in obj) {
      if (Object.hasOwn(obj, prop)) {
        return false;
      }
    }

    return true;
  }

  return (
    <div className='fixed inset-y-10 right-0 w-4/5 h-4/5 m-8 overflow-y-auto border my-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3'>
      <div className='bg-Gunmetal-gray'>
        <div className='flex text-white border flex-col-reverse lg:flex-row '>
          <div className='flex flex-col justify-center items-center md:w-full lg:w-1/2'>
            <img
              className='text-black object-cover w-full h-40 sm:h-48 md:h-64 lg:h-full'
              src={recipe.thumbnail_url}
              alt={'dish' + recipe.id}
            />
          </div>
          <div className='flex flex-col px-10 py-10 justify-center w-full lg:w-1/2'>
            <div className='flex w-full justify-between'>
              <h5 className='text-xs sm:text-xl font-bold'>{recipe.name}</h5>
              <div>
                <button
                  type='button'
                  className='text-xs bg-Cinnabar hover:bg-Burnt-orange hover:text-white rounded-full px-2 py-1'
                  onClick={() => {
                    setToggleCardDetails(false);
                    setPopUp(false);
                  }}
                >
                  <FontAwesomeIcon icon={faX} />
                </button>
              </div>
            </div>

            <div className='flex py-2'>
              <div className='flex flex-col pr-4'>
                <p className='text-xs uppercase'>Cook</p>
                <p className='text-xs'>
                  {recipe.cook_time_minutes
                    ? recipe.cook_time_minutes + ' minutes'
                    : recipe.total_time_tier.display_tier}
                </p>
              </div>
              <div className='flex flex-col pl-4 border-l border-gray-400'>
                <p className='text-xs uppercase'>Servings</p>
                <p className='text-xs'>{'serves ' + recipe.num_servings}</p>
              </div>
            </div>
            <div className='py-4'>
              <h6 className='text-xs sm:text-xl underline'>Ingredients</h6>
              <ul className='pt-2 text-xs list-disc list-inside'>
                {recipe.sections.map((section, sectionIdx) =>
                  section.components.map((ingredient, ingredientIdx) => (
                    <li key={sectionIdx + '-' + ingredientIdx}>
                      {ingredient.raw_text}
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className='bg-Beige border'>
          <table className='border-separate px-5 py-3 border-spacing-x-3 border-spacing-y-5'>
            <tbody>
              <tr className='flex flex-col lg:flex-row m-3'>
                <td>
                  <h6 className='font-medium text-xs sm:text-xl mb-3'>
                    Instructions
                  </h6>
                </td>
                <td>
                  <ul className='px-12 text-xs list-disc list-outside space-y-2'>
                    {recipe.instructions.map((step, idx) => (
                      <li key={idx}>{step.display_text}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='flex flex-col lg:flex-row w-full px-10 pb-3 bg-Pewter border'>
          <div className='flex flex-col w-full pb-10 lg:max-w-xl lg:w-1/2 items-center justify-center'>
            <h6 className='font-medium text-xs sm:text-xl pt-8 pb-5'>Video</h6>
            {recipe.video_url === null ? (
              <div className='px-5 text-xs sm:text-xl text-Gunmetal-gray'>
                No video not found
              </div>
            ) : (
              <iframe
                src={recipe.original_video_url}
                width='400'
                height='250'
                allow='autoplay; encrypted-media'
                allowFullScreen
                title='video'
              />
            )}
          </div>
          <div className='flex flex-col w-full pb-10 lg:max-w-xl lg:w-1/2 items-center pl-2 lg:pl-10'>
            <h6 className='font-medium text-xs sm:text-xl pt-8 pb-4'>
              Nutrition Value
            </h6>
            {isEmpty(nutrition) ? (
              <div className='px-5 text-xs sm:text-xl text-Gunmetal-gray'>
                No nutrition values found
              </div>
            ) : (
              <table className='text-xs w-64 table-fixed'>
                <tbody>
                  <tr>
                    <td className='font-bold pt-1'>Calories</td>
                    <td className='pl-5 pt-2 text-right'>
                      {nutrition.calories}
                    </td>
                  </tr>
                  <tr>
                    <td className='font-bold'>Total Fat</td>
                    <td className='pl-5 pt-2 text-right'>{nutrition.fat}g</td>
                  </tr>
                  <tr>
                    <td className='font-bold'>Total Carbohydrates</td>
                    <td className='pl-5 pt-2 text-right'>
                      {nutrition.carbohydrates}g
                    </td>
                  </tr>
                  <tr>
                    <td className='pl-3'>Dietary Fiber</td>
                    <td className='pl-5 text-right'>{nutrition.fiber}g</td>
                  </tr>
                  <tr>
                    <td className='pl-3'>Sugars</td>
                    <td className='pl-5 text-right'>{nutrition.sugar}g</td>
                  </tr>
                  <tr>
                    <td className='font-bold py-2'>Protein</td>
                    <td className='pl-5 pb-1 text-right'>
                      {nutrition.protein}g
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

CardDetails.propTypes = {
  setPopUp: bool.isRequired,
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
  nutrition: shape({
    calories: number,
    fat: number,
    carbohydrates: number,
    fiber: number,
    sugar: number,
    protein: number,
  }),
  setToggleCardDetails: func.isRequired,
};

export default CardDetails;
