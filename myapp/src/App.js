import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact'


function App() {
  return (
    <div className="App">
      <Home></Home>
      {/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li> 
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </nav> */}
      {/* <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
       */}
    </div>
  );
}

export default App;
