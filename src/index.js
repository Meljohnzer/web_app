import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import { UserInputProvider } from './Dashboard/Employer/UserInputContext';

ReactDOM.render(
  <BrowserRouter>
    
      <App />
    
  </BrowserRouter>,
  document.getElementById('root')
);
