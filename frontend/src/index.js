import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import 'bootstrap/dist/css/bootstrap.css';
import { ProductsContextProvider } from './context/productContext';
import './styles/products.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <AuthContextProvider>
    <ProductsContextProvider>

       <App />
    </ProductsContextProvider>
    </AuthContextProvider>

  </React.StrictMode>
);

