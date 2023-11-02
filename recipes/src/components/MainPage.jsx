import { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import CardList from "./CardList";
import saladPic from "../images/salads.jpg";
import ScrollToTop from "./ScrollToTop";
import { motion } from "framer-motion";

export const MainPage = () => {
  const [isChangedState, setIsChangedState] = useState(false);
  const [recipeData, setRecipeData] = useState([]);
  const [recipeIngredients, setRecipeIngredients] = useState("");
  const [normalizeRecipeIngredients, setNormalizeRecipeIngredients] =
    useState("corn");

  useEffect(() => {
    // fetch data from an api and set the state with it
    async function fetchData() {
      const response = await fetch(
        `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes&q=${normalizeRecipeIngredients}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
            "X-RapidAPI-Host": "tasty.p.rapidapi.com",
          },
        }
      );
      const data = await response.json();
      if (data && data.results) {
        setRecipeData(data.results);
      }
    }
    if (isChangedState || normalizeRecipeIngredients != "") {
      fetchData();
    }
  }, [normalizeRecipeIngredients]);

  const inputIngredients = (ingredients) => {
    setRecipeIngredients(ingredients);
  };

  useEffect(() => {
    const regex = /[ ,]/g;
    let newNormalizeRecipeIngredients = recipeIngredients.replace(regex, "%2C");
    setNormalizeRecipeIngredients(newNormalizeRecipeIngredients);
  }, [recipeIngredients]);

  return (
    <main className="flex flex-col items-center justify-center max-w-screen-25 mx-auto font-montserrat">
      <section className="hidden sm:flex items-center justify-center h-screen w-screen bg-Salad bg-cover shadow-lg max-w-screen-25 mx-auto">
        <motion.div
          initial={{ width: "100vw" }}
          animate={{ width: "92%" }}
          transition={{ duration: 1 }}
          className="flex items-center flex-col justify-center  h-5/6 my-20 bg-black/50"
        >
          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-xl sm:text-2xl xl:text-6xl 2xl:text8xl text-center m-2 font-extrabold text-gray-100"
          >
            [App Name]
          </motion.h1>
          <motion.p
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.3 }}
            className="text-xl sm:text-2xl xl:text-3xl 2xl:text-5xl text-center m-10 font-light text-gray-200"
          >
            Your Culinary Companion
          </motion.p>
        </motion.div>
      </section>

      <section className="flex items-center bg-Gunmetal-gray w-screen max-w-screen-25 mx-auto">
      <article className="flex items-center justify-center sm:flex-col sm:justify-evenly lg:flex-row lg:justify-evenly gap-10 h-1/4 m-10 sm:m-20 2xl:m-40">
      <motion.div
        initial={{ x: -100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col justify-center lg:justify-start lg:mr-10 my-0"
      >
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-xl text-center lg:text-left sm:text-2xl xl:text-4xl mb-6 text-gray-300"
        >
          Hungry for inspiration?
        </motion.h1>
        <motion.p
          initial={{ y: 100, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-wrap text-center lg:text-left sm:text-xl xl:text-xl 2xl:text2xl text-gray-300"
        >
          Explore a world of flavors and ingredients right at your fingertips. Whether you are a seasoned chef or just starting out, we make your cooking journey delightful. Looking for a specific recipe or craving something delicious? Just type it in, and voilà. Plan meals, cook with confidence. New recipes, tips, and mouthwatering photos await. Happy cooking!
        </motion.p>
      </motion.div>

      <motion.img
        initial={{ x: 100, opacity: 0, boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)" }} 
        animate={{ x: 0, opacity: 1, boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
        transition={{ duration: 1 }}
        className="hidden md:flex md:min-w-0 h-auto lg:min-w-0 xl:min-w-0"
        src={saladPic}
        alt=""
      />
    </article>
      </section>
      <section className="flex items-center justify-center w-screen max-w-screen-25 h-[300px] md:h-[400px] lg:h-[600px] py-5 md:py-10 lg:py-12 bg-Pewter mx-auto">
        <div className="flex items-center justify-center w-10/12 border border-orange-700 h-full  bg-Pewter shadow-sm">
          <SearchForm
            ingredients={inputIngredients}
            setIsChangedState={setIsChangedState}
          />
        </div>
      </section>

      <section className="flex justify-center items-center  bg-Gunmetal-gray w-full">
        <CardList cardDetails={recipeData} />
      </section>
      <ScrollToTop />
    </main>
  );
};
