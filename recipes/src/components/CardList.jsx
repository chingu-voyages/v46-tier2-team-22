import { useState } from "react";

import Card from "./Card";
import dummyRecipes from "../data/dummyData";

function CardList() {
  const [recipes] = useState(dummyRecipes);

  return (
    <div
      className="relative flex flex-wrap items-center justify-evenly mx-auto mb-20 py-6 bg-Gunmetal-gray w-screen max-w-screen-25"
      id="card-holder"
    >
      {recipes.map(recipe => (
        <Card recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
}

export default CardList;
