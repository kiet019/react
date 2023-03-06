import React, { useEffect, useState } from "react";
import FilmsShow from "./Modal/FilmsShow";
import { useParams } from "react-router-dom";
// let ListOfFilms = require("../shared/ListOfFilms.json");

export default function TypeScreen() {
  const { type } = useParams();
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
  });
  return (
    <div className="home">
      {ListOfFilms.length > 0 ? (
        <div>
          {
            <FilmsShow
              Films={ListOfFilms.find((Object) => {
                return Object.ms === type;
              })}
            />
          }
        </div>
      ) : null}
    </div>
  );
}
