import { useState } from "react";
import Card from "./Card";
import dummyRecipes from "../data/dummyData";

function RecipeList() {
  const [recipes] = useState(dummyRecipes);

  return (
    <div className="recipe-list">
      <div className="flex flex-row flex-wrap justify-center gap-4">
        {recipes.map(recipe => (
          <Card recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
