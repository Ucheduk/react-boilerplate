import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Test from '<helpers>/Text';
import './assets/scss/style.scss';

const App = () => {
  return (
    <div className="container">
      <h2>Welcome to BuildForSdg Team-018 App</h2>
      <Test />
    </div>
  );
};

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'),
);
