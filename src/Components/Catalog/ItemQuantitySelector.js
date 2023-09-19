import React, { useState } from 'react';

function ItemQuantitySelector({ quantity, onQuantityChange }) {
  const [selectedQuantity, setSelectedQuantity] = useState(quantity);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setSelectedQuantity(newQuantity);

    // Llama a la función onQuantityChange para informar al componente padre sobre el cambio de cantidad.
    onQuantityChange(newQuantity);
  };

  return (
    <div className="item-quantity-selector">
      <label>Cantidad:</label>
      <input
        type="number"
        min="1"
        value={selectedQuantity}
        onChange={handleQuantityChange}
      />
    </div>
  );
}

export default ItemQuantitySelector;
