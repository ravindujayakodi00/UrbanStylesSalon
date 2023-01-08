import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AuthContextProvider } from './context/AuthContext';
import { EmployeesContextProvider } from './context/EmployeeContext';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/products.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <EmployeesContextProvider>
        <App />
      </EmployeesContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

