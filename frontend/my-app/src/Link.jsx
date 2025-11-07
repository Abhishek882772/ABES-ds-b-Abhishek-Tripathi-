import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Link1() {
  return (
    <div>
      <div>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default Link1;
