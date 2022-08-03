import React from 'react'; // react core library 
import ReactDOM from 'react-dom'; // React package for working with the DOM.

// custom imports
import './index.css';
import App from './App'; // Importing App Component
import reportWebVitals from './reportWebVitals';

// App Comp is rendered inside div with id root 
ReactDOM.render(
  <App />
  , 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
