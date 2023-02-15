import React from 'react'
import TypeScreen from "./TypeScreen";
import Home from "./Home";
import { Route } from "react-router-dom";
import Contact from "./Contact";
import Details from './Details';

export default function RoutesPath() {
  return (
    <>
        <Route exact path="/" component={Home} />
        <Route path="/films/:type" component={TypeScreen} />
        <Route path="/contact" component={Contact}/>
        <Route path="/details/:type/:id" component={Details}/>
    </>
  )
}
