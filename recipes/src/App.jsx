import React from "react";
import { Header } from "./components/Header";
import {Recipes} from "./components/Recipes";

function App() {
  return (
    <>
      <Header />
      <Recipes />
      <div>
        <h1 className="text-3xl font-bold underline">Happy coding!</h1>
      </div>
    </>
  );
}

export default App;
