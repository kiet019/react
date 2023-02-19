import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
      <div className="navigation">
        <nav>
          <ul className="ul-nav">
              <li className="first">
                <span className="material-icons nav">menu</span>
                <div className="text">Menu</div>
              </li>
            <Link to="/">
            <li>
              <span className="material-icons nav">home</span>
              <div className="text">Home</div>
            </li>
            </Link>
            <Link to="/films/Series">
            <li>
              <span className="material-icons nav">live_tv</span>
              <div className="text">Series</div>
            </li>
            </Link>
            <Link to="/films/Movies">
            <li>
              <span className="material-icons nav">movie</span>
              <div className="text">Movies</div>
            </li>
            </Link>
            <Link to="/contact">
            <li>
              <span className="material-icons nav">contact_support</span>
              <div className="text">Contact</div>
            </li>
            </Link>
            <Link to="/news">
            <li>
              <span className="material-icons nav">feed</span>
              <div className="text">News</div>
            </li>
            </Link>
          </ul>
        </nav>
      </div>
  );
}
