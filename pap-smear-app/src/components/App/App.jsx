import logo from '../../logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import Banner from '../Banner/Banner';
import NavBar from '../NavBar/NavBar';

const API_BASE_URL = "http://localhost:3001";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      
    </div>
  );
}

export default App;
