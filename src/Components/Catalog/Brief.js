import React from 'react';

function Brief({ cartItems }) {
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-brief">
      <p>Carrito: {totalItems} {totalItems === 1 ? 'producto' : 'productos'}</p>
    </div>
  );
}

export default Brief;
