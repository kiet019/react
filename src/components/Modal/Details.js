import React, { useEffect, useState } from "react";
import { Icon } from "react-materialize";
import { useParams } from "react-router-dom";
import ModalCase from "./ModalCase";

export default function Details() {
  const [isOpen, setIsOpen] = useState(false);
  const { type } = useParams();
  const { id } = useParams();
  // eslint-disable-next-line
  const baseURL =
    "https://64055d32eed195a99f80eece.mockapi.io/api/films/details";
  const [ListOfFilms, setAPIData] = useState([]);
  const fetchContacts = () => {
    fetch(baseURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setAPIData(data);
      })
      .catch((error) => console.log(error));
  };
  // Hàm để lấy danh sách contact từ API
  useEffect(() => {
    fetchContacts();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isOpen]);
  return (
    <div className="details">
      {ListOfFilms.length > 0
        ? show(
            ListOfFilms.find((Object) => {
              // eslint-disable-next-line
              return Object.ms === type;
              // eslint-disable-next-line
            }).list.find((Object) => {
              if (Object.id.toLocaleString() === id) {
                return Object;
              }
            }),
            setIsOpen,
            isOpen
          )
        : null}
    </div>
  );
}
function show(film, setIsOpen, isOpen) {
  return (
    <>
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
    </>
  );
}
