import React from 'react';
import { Link } from 'react-router-dom';

function Catalog() {
  return (
    <div>
      <Link to="/item/1">Producto 1</Link>
      <Link to="/item/2">Producto 2</Link>
      {/* Agregar más enlaces para tus productos */}
    </div>
  );
}

export default Catalog;
