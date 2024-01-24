import React, { useEffect } from 'react';
import { recipes } from './RecipeData';

const RandomRecipe = ({ randomIndex, setRandomIndex }) => {
  useEffect(() => {
    const newRandomIndex = Math.floor(Math.random() * recipes.length);
    setRandomIndex(newRandomIndex);
  }, [setRandomIndex]);

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
          <p className="recipe-name">{randomRecipe.name}</p>
          {/* Add a className to style the recipe name or make other adjustments */}
        </div>
      )}
    </div>
  );
};

export default RandomRecipe;