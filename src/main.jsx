import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

const rootElement = document.getElementById('root');
const loadingElement = document.getElementById('app-loading');

if (!rootElement) {
  throw new Error('Could not find #root element to mount React application.');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (loadingElement) {
  requestAnimationFrame(() => {
    loadingElement.remove();
  });
}
