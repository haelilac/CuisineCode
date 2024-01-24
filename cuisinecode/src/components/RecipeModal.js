import React from 'react';

const RecipeModal = ({ recipe, onClose }) => {
  const imagePath = process.env.PUBLIC_URL + '/' + recipe.image; // Constructing the image path

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{recipe.name}</h2>
          <button className="close-button" onClick={onClose}>
            <span className="material-symbols-rounded"> cancel</span>
          </button>
        </div>
        <div className="modal-body">
          <img src={imagePath} alt={recipe.name} />
          <div className="recipe-details">
            <p>Ingredients: {recipe.ingredients.join(', ')}</p>
            <p>Procedure: {recipe.procedure}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
