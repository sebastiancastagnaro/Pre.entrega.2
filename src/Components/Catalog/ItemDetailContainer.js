import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

function ItemDetailContainer({ match }) {
  // tengo una lista de productos y se quiere mostrar los detalles de un producto específico.
  const products = [
    { id: 1, name: 'casette', description: 'Casette de cualquier grupo', price: 10 },
    { id: 2, name: 'cd', description: 'CD de cualquier grupo', price: 12 },
    { id: 3, name: 'vinilo', description: 'Vinilo grupos seleccionados', price: 15},
    // ... Agrega más productos aquí
  ];

  // Utiliza un estado para almacenar los detalles del producto.
  const [productDetail, setProductDetail] = useState(null);

  // Simula una llamada a una API o base de datos para obtener los detalles del producto.
  useEffect(() => {
    // Obtén el ID del producto de los parámetros de la URL (react-router-dom).
    const productId = parseInt(match.params.id);

    // Simula una búsqueda del producto por ID.
    const foundProduct = products.find((product) => product.id === productId);

    // Establece los detalles del producto en el estado.
    setProductDetail(foundProduct);
  }, [match.params.id]);

  return (
    <div>
      <h1>Detalles del Producto</h1>
      {productDetail ? <ItemDetail product={productDetail} /> : <p>Cargando...</p>}
    </div>
  );
}

export default ItemDetailContainer;
