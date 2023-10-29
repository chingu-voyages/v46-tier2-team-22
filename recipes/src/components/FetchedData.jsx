import { useEffect, useState } from "react";

const FetchedData = () => {

  const [recipeData, setRecipeData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {

        //this is just a test for the data fetch, the endpoint mush be replaced 
        //for the "by ingredient" when added to input component
        
      const url =
        "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "ee0b1fde36mshe7ecd0895ee5283p1a0ad4jsna86fc2392562",
          "X-RapidAPI-Host": "tasty.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        const recipes = result.results;

        const recipeData = recipes.map((recipe) => {
          return {
            name: recipe.name,
            instructions: recipe.instructions,
          };
        });

        setRecipeData(recipeData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);


//consider this is only a test/draft for the data fetch, we can handle it 
//as needed, the component will probably will be deleted after approval
  return (
    <div>
      <h1>Recipes</h1>

      {recipeData.map((recipe, index) => (
        <div key={index}>
            <span>----</span>
          <h4 style={{fontWeight:"bold"}}>{recipe.name}</h4>
          <ul>
            {recipe.instructions.map((step, index) => (
              <li>{step.display_text}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FetchedData;
