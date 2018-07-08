import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>, // render class App from App.js
  document.getElementById('root')
); 
registerServiceWorker();
