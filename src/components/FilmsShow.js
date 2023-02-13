import React, { useState } from "react";

export default function FilmsShow({ Films }) {
  const [film, setFilm] = useState([])
  return (
    <div className="films-container">
      <div className="title">{Films.genre}</div>
      <div className="films-list">
        {Films.list.map((film) => (
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
            {film.information}
          </div>
        </div>
      </div>
    </div>
  );
}
