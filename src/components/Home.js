import React from "react";
import Body from "./Body";
import Header from "./Header";
import Navigation from "./Navigation";


export default function Home() {
  return (
    <div className="Home">
        <Header/>
        <Navigation/>
        <Body/>
    </div>
  );
}
