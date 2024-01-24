import React from 'react';

import './RecipeModal.css';

const RecipeModal = ({ recipe, onClose }) => {
  const imagePath = process.env.PUBLIC_URL + '/' + recipe.image;


  const procedureLines = recipe.procedure.split('\n');

  return (
    <div className="RecipeModal-overlay" onClick={onClose}>
      <div className="RecipeModal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{recipe.name}</h2>
        <img src={imagePath} alt={recipe.name} />
        <div className="recipe-details">
          <p>
            <strong>Ingredients:</strong> {recipe.ingredients.join(', ')}
          </p>
          <p>
            <strong>Procedure:</strong>
            {procedureLines.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
