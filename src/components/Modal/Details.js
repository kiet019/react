import React, { useEffect, useState } from "react";
import { Icon } from "react-materialize";
import { useParams } from "react-router-dom";
import ModalCase from "./ModalCase";
let ListOfFilms = require("../../shared/ListOfFilms.json");

export default function Details() {
  const [isOpen, setIsOpen] = useState(false);
  const { type } = useParams();
  const { id } = useParams();
  const listType = ListOfFilms.find((Object) => {
    return Object.ms === type;
  });
  // eslint-disable-next-line
  const film = listType.list.find((Object) => {
    if (Object.id.toLocaleString() === id) {
      return Object;
    }
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isOpen]);
  return (
    <div className="details">
      <img src={"../../" + film.image} alt="" />
      <div className="content">
        <h3>Name: {film.title}</h3>
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
        <div className="text" style={{ textAlign: "justify" }}>
          {film.information}
        </div>
      </div>
      {/* eslint-disable-next-line */}
      <a
        onClick={() => setIsOpen(true)}
        className="btn-floating halfway-fab waves-effect waves-light red"
      >
        <Icon>ondemand_video</Icon>
      </a>
      {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}
    </div>
  );
}
