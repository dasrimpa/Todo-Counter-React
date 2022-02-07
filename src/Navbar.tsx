import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Counterc } from "./components/pages/Counterc";

export default function Navbar() {
  return (
    <BrowserRouter>
        <div>
        <nav className="navbar navbar-default navbar-static-top">
      <div className="nav-container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand app-logo nav-logo" href="#">TODO APP</a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right nav-item">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/counterc">Counter</Link></li>
          </ul>
        </div>
      </div>
    </nav>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counterc" element={<Counterc />} />


          </Routes>
        </div>
    </BrowserRouter>
  );
}
