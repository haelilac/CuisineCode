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
      <h2>Explore Something New!</h2>
      {isValidIndex && (
        <div className="recipe" onClick={generateNewRandomIndex}>
          <img src={randomRecipe.image} alt={randomRecipe.name} />
          <div className="recipe-details">
            <p className="recipe-name">{randomRecipe.name}</p>
            <p className="recipe-ingredients">
              <strong>Ingredients:</strong> {randomRecipe.ingredients.join(', ')}
            </p>
            <p className="recipe-preparation">
              <strong>Preparation:</strong>
              {randomRecipe.procedure.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomRecipe;
