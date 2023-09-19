import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ItemDetail from './ItemDetail';
import ItemListContainer from './ItemListContainer';  // Importa el componente que muestra el catálogo

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/category/:id" component={ItemListContainer} />
          <Route exact path="/item/:id" component={ItemDetail} />
          <Route exact path="/" component={ItemListContainer} />  {/* Usa ItemListContainer para la ruta por defecto */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

