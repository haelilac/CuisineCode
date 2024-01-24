import React, { useEffect } from 'react';
import { recipes } from './RecipeData';

const RandomRecipe = ({ randomIndex, setRandomIndex }) => {
  useEffect(() => {
    // Generate a random index only on component mount
    const newRandomIndex = Math.floor(Math.random() * recipes.length);
    setRandomIndex(newRandomIndex);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Check if randomIndex is within valid range
  const isValidIndex = randomIndex !== null && randomIndex >= 0 && randomIndex < recipes.length;

  // Display the recipe using the random index
  const randomRecipe = isValidIndex ? recipes[randomIndex] : null;

  // Function to generate a new random index and update the state
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
