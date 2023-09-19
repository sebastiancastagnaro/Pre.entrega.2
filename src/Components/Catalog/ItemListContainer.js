import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';

function ItemListContainer() {
 
  const initialProducts = [
    { id: 1, name: 'Producto 1', price: 10.99 },
    { id: 2, name: 'Producto 2', price: 15.99 },
    { id: 3, name: 'Producto 3', price: 12.49 },
    // ... Aca se agregan mas productos
  ];

  // Usa un estado para almacenar la lista de productos.
  const [products, setProducts] = useState([]);

  // Simula una llamada a una API o base de datos para obtener los productos.
  useEffect(() => {
    // Simula una solicitud a una API (puede ser una solicitud real a una API o una función de mock).
    // Aquí, simplemente establecemos los productos iniciales en el estado después de un tiempo simulado.
    setTimeout(() => {
      setProducts(initialProducts);
    }, 1000); // Simula una demora de 1 segundo
  }, []);

  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
