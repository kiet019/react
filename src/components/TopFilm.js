import React, { useState } from "react";
import { BrowserRouter as router  } from "react-router-dom";
let topFilms = require("../shared/ListOfTopFilms.json");

export default function TopFilm() {
  const [film, setFilm] = useState([])
  return (
    <div className="films-container">
      <div className="title">TOP FILMS</div>
      <div
        className="films-list"
        style={{
          "grid-template-rows": " repeat(" + topFilms.length / 3 + ", 500px)",
        }}
      >
        {topFilms.map((film) => (
          <div className="card">
            <img src={film.image} />
            <div className="overload">
              <button className="button" onClick={() => {setFilm(film)}}>
                <a href="#popup1" id="openPopUp"><span class="material-icons detail">more_vert</span></a>
              </button>
            </div>
            <div className="content">
              <div className="header-name"></div>
              <div className="name">
                {film.title} ({film.Year})
              </div>
            </div>
          </div>
        ))}
      </div>
      <div id="popup1" className="overlay">
        <div className="popup">
          <img src={film.image}/>
          <h2>{film.title}</h2>
          <a className="close" href="#">&times;</a>
          <div className="content">
            {film.infor}
          </div>
        </div>
      </div>
    </div>
  );
}
