import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './App';
import { ThemeProvider } from './Context';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

