import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { subscribe } from './state'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

subscribe(renderApp)
