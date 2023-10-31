import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import CounterContextProvider from './contexts/CounterContextProvider';
import ContactContextProvider from './contexts/ContactContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CounterContextProvider>
      <ContactContextProvider>
      <App />
      </ContactContextProvider>
    </CounterContextProvider>
  </BrowserRouter>

);
