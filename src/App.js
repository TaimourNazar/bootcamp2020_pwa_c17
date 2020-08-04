import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Users from './Users';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import Contact from './Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
        {"|"}
        <Link to="/"><strong>Home Page</strong></Link>{"|"}
        <Link to="contact"><strong>Contact Us</strong></Link>{"|"}
        <Link to="about"><strong>About Us</strong></Link>{"|"}
        <Link to="users"><strong>Users Data</strong></Link>{"|"}  
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="contact" element={<Contact/>}></Route>
          <Route path="about" element={<About/>}></Route>
          <Route path="users" element={<Users/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
