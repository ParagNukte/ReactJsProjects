import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function LandingPage() {
  return (
    <header className="App-header">
      <h1>Welcome to Parag's Portfoliohub</h1>
      <Link to="/home">
        <button className="next-button">Go to Home</button>
      </Link>
    </header>
  );
}

export default LandingPage;
