import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import MyFooter from './components/MyFooter';
import AllTheBooks from './components/AllTheBooks';

function App() {
  return (
    <>
      <NavBar />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </>
  );
}

export default App
