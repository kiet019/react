import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import RoutesPath from "./RoutesPath";

export default function Main() {
  return (
    <>
      <div className="main">
        <Header />
        <Navigation />
        <RoutesPath/>
      </div>
      <Footer/>
    </>
  );
}
