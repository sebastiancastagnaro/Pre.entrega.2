import React from 'react';

function CartWidget() {
  

  return (
    <div className="cart-widget">
      <span>{cartItemsCount}</span> {/* Muestra el número de elementos en el carrito */}
    </div>
  );
}

export default CartWidget;
