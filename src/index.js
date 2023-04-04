import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//Redux setup
import {createStore} from "redux";


const store = createStore();




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
