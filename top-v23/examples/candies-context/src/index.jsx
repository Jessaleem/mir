import React from 'react';
import ReactDOM from 'react-dom/client';
// Importart el Provider de React-Redux
import { Provider } from 'react-redux';

// Importar el store
import store from './store';

import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Usar el provider */}
    {/* El provider siempre necesita una store, tengo q importarla */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();