import { useState } from "react";
import Card from "./Card";
import dummyRecipes from "../data/dummyData";

function RecipeList() {
  const [recipes] = useState(dummyRecipes);

  return (
    <div className="recipe-list w-full min-h-screen">
      <h2 className="font-bold text-xl text-center sm:text-3xl sm:mt-5">
        Recipe Results
      </h2>
      <div className="flex flex-row flex-wrap justify-center">
        {recipes.map(recipe => (
          <Card recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
