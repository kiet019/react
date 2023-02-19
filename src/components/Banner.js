import React from "react";
import { useContext } from "react";
import { SwitchContext } from "./SwitchContext";

export default function Banner() {
  const { index, banners, back, next } = useContext(SwitchContext);
  return (
    <div className="banner">
      <div className="container">
        <img src={banners[index].image} alt="" />
         {/* eslint-disable-next-line  */}
        <a className="video" href="https://www.youtube.com/watch?v=l-WSY4jUcT4" target="_blank">
          <div className="circle"></div>
          <span className="material-icons play">play_arrow</span>
        </a>
        <div className="context">
          <div className="title">{banners[index].title}</div>
          <div className="infor">{banners[index].information}</div>
          <div className="button-place">
            <button className="button" onClick={back}>
              <span className="material-icons button-icon">
                arrow_circle_left
              </span>
            </button>
            <button className="button" onClick={next}>
              <span className="material-icons button-icon">
                arrow_circle_right
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
