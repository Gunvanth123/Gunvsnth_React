import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ updated import
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App.jsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // ✅ createRoot used here
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
