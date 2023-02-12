import React from "react";
let topFilms = require("../shared/ListOfTopFilms.json");

export default function TopFilm() {
  return (
    <div className="films-container">
      <div className="title">TOP FILMS</div>
      <div className="films-list" style={{"grid-template-rows":" repeat(" + topFilms.length/3 + ", 500px)"}}>
        {topFilms.map((film) => (
          <div className="card">
            <img src={film.image} />
          </div>
        ))}
      </div>
    </div>
  );
}
