import React from 'react';
import { useParams } from 'react-router-dom';

function ItemDetail() {
  const { id } = useParams();

  // Usar el id para cargar y mostrar los detalles del producto
  // ...

  return (
    <div>
      {/* Muestra los detalles del producto */}
      <h2>Detalles del Producto {id}</h2>
    </div>
  );
}

export default ItemDetail;
