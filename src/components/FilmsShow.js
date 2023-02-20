import React from "react";

export default function FilmsShow({ Films }) {
  return (
    <div className="films-container">
      <div className="title">{Films.ms}</div>
      <div className="films-list">
        {Films.list.map((film) => (
          <div className="card" key={film.id}>
            <img src={"../" + film.image} alt={film.id}/>
            <div className="overload" >
              <button className="button">
                <a href={"/details/" + Films.ms + "/" + film.id} ><span  className="material-icons detail">play_arrow</span></a>
              </button>
            </div>
            <div className="content" >
              <div className="header-name" ></div>
              <div className="name" >
                {film.title} ({film.Year})
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
