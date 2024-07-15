import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import MyFooter from './components/MyFooter';
import AllTheBooks from './components/AllTheBooks';
import BookDetails from './components/BookDetails'; 

function App() {
  return (
    <Router>
      <NavBar />
      <Welcome />
      <Routes>
        <Route path="/" element={<AllTheBooks />} />
        <Route path="/details/:asin" element={<BookDetails />} />
        </Routes>
      <MyFooter />
    </Router>
  );
}

export default App;
