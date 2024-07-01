import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import Welcome from './components/Welcome';

function App() {
  return (
    <>
      <NavBar />
      <Welcome />
    </>
  );
}

export default App
