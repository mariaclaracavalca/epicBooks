import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import MyFooter from './components/MyFooter';
import NavBar from './components/NavBar';

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
