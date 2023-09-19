import React from 'react';

function AddItemButton({ onAddToCartClick }) {
  return (
    <button className="add-to-cart-button" onClick={onAddToCartClick}>
      Agregar al Carrito
    </button>
  );
}

export default AddItemButton;
