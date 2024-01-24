import React from 'react';

const RecipeModal = ({ recipe, onClose }) => {
  const imagePath = process.env.PUBLIC_URL + '/' + recipe.image; // Constructing the image path

  // Split the procedure string into an array of lines
  const procedureLines = recipe.procedure.split('\n');

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{recipe.name}</h2>
          <button className="close-button" onClick={onClose}>
            <span className="material-symbols-rounded">cancel</span>
          </button>
        </div>
        <img src={imagePath} alt={recipe.name} />
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
  );
};

export default RecipeModal;
