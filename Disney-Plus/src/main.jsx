import React from 'react';
import './index.css';
import App from './App.jsx';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/store.js'; // Import your Redux store

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
