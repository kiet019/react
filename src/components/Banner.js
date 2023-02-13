import React from "react";
// let banners = require("../shared/ListOfMovie.json");
import { useContext } from 'react'
import { SwitchContext } from './SwitchContext'

export default function Banner() {
  const { index, banners, back, next} = useContext(SwitchContext)
  return (
    <div className="banner">
      <div className="container">
        <img src={banners[index].image} />
        <div className="context">
          <div className="button-place">
            <button className="button" onClick={back}>
              <span className="material-icons button-icon">arrow_circle_left</span>
            </button>
            <button className="button" onClick={next}>
              <span className="material-icons button-icon">arrow_circle_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
