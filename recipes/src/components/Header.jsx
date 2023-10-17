import React from "react";

export const Header = () => {
  const headerText = "The Recipes App";

  const descriptionText = `
    Cooking made easy! Our Recipes app is your go-to kitchen companion.
    Whether you're a beginner or a seasoned chef, we've got your back.
    Browse through a wide variety of delicious recipes for breakfast, lunch,
    dinner, and snacks.
  `;

  const imageUrl = ""; // Let's discuss if we want to use a random image from the API call here.

  return (
    <div>
      <div className="bg-green-600 text-white text-center py-4">
        <h1 className="text-3xl font-semibold">{headerText}</h1>
      </div>

      <div className="flex justify-center items-center bg-green-600">
        <div className="w-1/2 p-4">
          <p className="text-left text-white text-lg">{descriptionText}</p>
        </div>
        <div className="w-1/2 p-4">
          <img src={imageUrl} alt="dish" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};
