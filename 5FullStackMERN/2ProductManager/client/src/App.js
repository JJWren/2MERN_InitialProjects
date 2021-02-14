import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import ProductDetails from './components/ProductDetails';
import UpdateProduct from './views/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="products/"/>
        <ProductDetails path="product/:_id"/>
        <UpdateProduct path="product/:_id/edit"/>
      </Router>
    </div>
  );
}

export default App;
