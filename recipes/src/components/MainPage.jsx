import { useEffect, useState } from 'react';
import SearchForm from './SearchForm';
import CardList from './CardList';
import saladPic from '../images/salads.jpg';
import ScrollToTop from './ScrollToTop';

export const MainPage = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [recipeIngredients, setRecipeIngredients] = useState('');
  let [normalizeRecipeIngredients, setNormalizeRecipeIngredients] =
    useState('corn');
  useEffect(() => {
    // fetch data from an api and set the state with it
    async function fetchData() {
      const response = await fetch(
        `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes&q=${normalizeRecipeIngredients}`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-key':
              '1e16a8d7aemsh965bef850564727p10cb7bjsna6a7185b6c67',
            'x-rapidapi-host': 'tasty.p.rapidapi.com',
          },
        }
      );
      const data = await response.json();
      if (data && data.results) {
        setRecipeData(data.results);
      }
    }
    fetchData();
  }, [normalizeRecipeIngredients]);

  const inputIngredients = (ingredients) => {
    setRecipeIngredients(ingredients);
  };

  useEffect(() => {
    const regex = /[ ,]/g;
    let newNormalizeRecipeIngredients = recipeIngredients.replace(regex, '%2C');
    setNormalizeRecipeIngredients(newNormalizeRecipeIngredients);
  }, [recipeIngredients]);

  return (
    <main className='flex flex-col items-center justify-center max-w-screen-25 mx-auto font-montserrat'>
      <section className='hidden sm:flex items-center justify-center h-screen w-screen bg-Salad bg-cover shadow-lg max-w-screen-25 mx-auto'>
        <div className='flex items-center justify-center border w-10/12 h-3/4 my-20 bg-black/50'>
          <p className='text-xl sm:text-2xl xl:text-3xl 2xl:text-5xl text-center m-20 font-medium text-white'>
            Welcome to [App Name] - Your Culinary Companion! 🍳 Hungry for
            inspiration? Explore a world of flavors and ingredients right at
            your fingertips. Whether you are a seasoned chef or just starting
            out, our app is here to make your cooking journey delightful.
            Looking for a specific recipe or craving something delicious? Just
            type it in, and watch our app work its magic. From quick dinners to
            gourmet feasts, we have got you covered. Plan meals, create shopping
            lists, and cook with confidence. New recipes, tips, and
            mouthwatering photos await. Start your culinary adventure today!
            Happy cooking! 🥘🍷🍰
          </p>
        </div>
      </section>

      <section className='flex items-center bg-Gunmetal-gray w-screen max-w-screen-25 mx-auto'>
        <article className='flex items-center justify-center sm:flex-col sm:justify-evenly lg:flex-row lg:justify-evenly  gap-10 h-1/4 m-10 sm:m-20 2xl:m-40'>
          {/* <article className='flex items-center justify-evenly h-1/4 m-5 gap-10 border-red-600 border-spacing-6'> */}
          <div className='flex flex-col justify-center lg:justify-start lg:mr-10 my-0 '>
            {/* <div className='flex flex-col justify-start '> */}
            <h1 className='text-xl text-center lg:text-left sm:text-2xl xl:text-4xl'>
              Title
            </h1>
            <p className='flex flex-wrap text-center lg:text-left sm:text-xl xl:text-2xl 2xl:text-3xl'>
              [App Name] streamlines your meal planning and prep. Input your
              ingredients or cravings, and we will provide curated recipes from
              quick weekday dinners to indulgent feasts. Each recipe includes
              step-by-step instructions. For visual learners, we offer video
              links. Say goodbye to shopping lists; we provide comprehensive
              ingredients lists. [App Name] simplifies your cooking journey,
              whether you are a pro or novice. Embark on a culinary adventure
              today!
            </p>
          </div>

          <img
            className='hidden md:flex md:min-w-0 h-auto lg:min-w-0 xl:min-w-0'
            src={saladPic}
            alt=''
          />
        </article>
      </section>
      <section className='flex items-center justify-center w-screen max-w-screen-25 h-[600px] py-12 bg-Pewter mx-auto'>
        <div className='flex items-center justify-center w-10/12 border border-orange-700 h-full  bg-Pewter shadow-sm'>
          <SearchForm ingredients={inputIngredients} />
        </div>
      </section>

      <section className='flex justify-center items-center  bg-Gunmetal-gray w-full'>
        <CardList cardDetails={recipeData} />
      </section>
      <ScrollToTop />
    </main>
  );
};
