import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
let ListOfFilms = require("../shared/ListOfFilms.json");

export default function Details() {
  const { type } = useParams();
  const { id } = useParams();
  const listType = ListOfFilms.find(Object => {
    return Object.ms === type;
  });
  // eslint-disable-next-line
  const film = listType.list.find(Object => {
    if (Object.id.toLocaleString() === id) {
      return Object;
    } 
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="details">
      <img src={"../../" + film.image} alt=""/>
      <div className="content">
        <h2>Name: {film.title}</h2>
        <div className="text year">Year: {film.Year}</div>
        <div className="text director">Director: {film.director}</div>
        <div className="text time_reso">
          <span className="material-icons">schedule</span>
          {film.time}
          <> </>
          <span className="material-icons">high_quality</span>
           {film.resolution}
        </div>
        <div className="text infor"> Description: </div>
        <div className="text">{film.information}</div>
      </div>
    </div>
  );
}
