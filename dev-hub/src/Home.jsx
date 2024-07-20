import React from 'react';
import './App.css';

function Home() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="home-content">
        <h2>Welcome to the Home Page</h2>
        <p>This is where you can find more about Parag's work.</p>
      </div>
    </div>
  );
}

export default Home;
