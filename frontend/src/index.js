import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

// CSS FILES
import './css/main.css';
import './css/nav.css';
import './css/consumerHomePage.css';
import './css/slideShow.css';
import './css/participantHomePage.css';
import './css/signInAndSignUp.css';
import './css/batchTimeline.css';
import './css/supplyChainDetails.css'
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <AuthContextProvider>
    <App />
  </AuthContextProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
