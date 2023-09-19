import React from 'react';

function Description({ product }) {
  return (
    <div className="product-description">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price.toFixed(2)}</p>
    </div>
  );
}

export default Description;
