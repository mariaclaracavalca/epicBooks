import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/Navbar';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import MyFooter from './components/Footer';
import { Container } from 'react-bootstrap'


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

export default App;
