import React from "react";
import { Header } from "./components/Header";
import RecipeList from "./components/RecipeList";
import { MainPage } from "./components/MainPage";

function App() {
  return (
    <>
      <Header />
      <Recipes />
    </>
  );
}

export default App;
