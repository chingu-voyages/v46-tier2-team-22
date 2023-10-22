import { useState } from "react";
import dummyRecipes from "../data/dummyData";

export const Recipes = () => {
  const [recipes, setRecipes] = useState(dummyRecipes);

  return (
    <div>
      <ul>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <h2 className="font-bold underline">{recipe.title}</h2>
            <ol>
              {recipe.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        ))}
      </ul>
    </div>
  );
};
