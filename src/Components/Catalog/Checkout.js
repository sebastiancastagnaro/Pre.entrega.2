import React from 'react';

function Checkout({ cartItems, onCheckout }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="checkout">
      <h2>Resumen del Carrito</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <p>Total: ${totalPrice.toFixed(2)}</p>
      <button onClick={onCheckout}>Pagar</button>
    </div>
  );
}

export default Checkout;
