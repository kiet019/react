import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Bodys from "./Bodys";

export default function Home() {
  return (
      <div className="home">
        <Header />
        <Navigation />
        <Bodys/>
      </div>
  );
}
