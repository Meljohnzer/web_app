import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter,HashRouter } from 'react-router-dom';
// import { UserInputProvider } from './Dashboard/Employer/UserInputContext';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    
      <App />
    
  </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById('root')
);
