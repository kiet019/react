import React, { useState, useEffect } from "react";
let banners = require("../shared/ListOfMovie.json");

export default function Banner() {
  const [index, setIndex] = useState(1);
  useEffect(() => {
    if(index <=0 || index>= banners.length-1) {
      setIndex(1);
    }
    console.log(index)
  }, [index]);
  return (
    <div className="banner">
      <div className="container">
        <img src={banners[index].image} />
        <div className="context">
          <div className="button-place">
            <button className="button" onClick={() => {setIndex(index-1)}}>
              <span className="material-icons button-icon">arrow_circle_left</span>
            </button>
            <button className="button" onClick={() => {setIndex(index+1)}}>
              <span className="material-icons button-icon">arrow_circle_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
