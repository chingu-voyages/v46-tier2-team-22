import React from "react";
import { Header } from "./components/Header";
import { Recipes } from "./components/Recipes";
import FetchedData from "./components/FetchedData";

function App() {
  return (
    <>
      <Header />
      {/* <Recipes /> */}
      <FetchedData/>
    </>
  );
}

export default App;
