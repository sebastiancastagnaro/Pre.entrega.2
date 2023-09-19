import React from 'react';
import Item from './Item'; // Importa el componente Item si aún no lo has creado

function ItemList({ products }) {
  return (
    <div className="item-list">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ItemList;
