import React, { useEffect } from 'react';
import { recipes } from './RecipeData';

const RandomRecipe = ({ randomIndex, setRandomIndex }) => {
  useEffect(() => {
    const newRandomIndex = Math.floor(Math.random() * recipes.length);
    setRandomIndex(newRandomIndex);
  }, [setRandomIndex]); // Add setRandomIndex to the dependency array

  const isValidIndex = randomIndex !== null && randomIndex >= 0 && randomIndex < recipes.length;
  const randomRecipe = isValidIndex ? recipes[randomIndex] : null;

  const generateNewRandomIndex = () => {
    const newRandomIndex = Math.floor(Math.random() * recipes.length);
    setRandomIndex(newRandomIndex);
  };

  return (
    <div className="Random-Recipe">
      <h2>Random Daily Recipe</h2>
      {isValidIndex && (
        <div className="recipe" onClick={generateNewRandomIndex}>
          <img src={randomRecipe.image} alt={randomRecipe.name} />
          <p>{randomRecipe.name}</p>
        </div>
      )}
    </div>
  );
};

export default RandomRecipe;
