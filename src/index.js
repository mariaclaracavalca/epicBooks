import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />
  );

// Se vuoi iniziare a misurare le prestazioni della tua app, puoi passare una funzione
// per registrare i risultati (per esempio: reportWebVitals(console.log))
// oppure inviare i dati a un endpoint di analytics. Scopri di più: https://bit.ly/CRA-vitals
reportWebVitals();
