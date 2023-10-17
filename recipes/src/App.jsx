import React from "react";
import { Header } from "./components/Header";

import { Recipes } from "./components/Recipes";
import FetchedData from "./components/FetchedData";

import RecipeList from "./components/RecipeList";


function App() {
  return (
    <>
      <Header />

      {/* <Recipes /> */}
      <FetchedData/>

      <RecipeList />

    </>
  );
}

export default App;
