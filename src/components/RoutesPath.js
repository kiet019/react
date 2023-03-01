import React from 'react'
import Type from "./Type";
import Home from "./Home";
import { Route } from "react-router-dom";
import Contact from "./Contact";
import Details from './Modal/Details';
import News from './News';
import About from './About';
import Account from './Account';

export default function RoutesPath() {
  return (
    <>
        <Route exact path="/" component={Home} />
        <Route path="/films/:type" component={Type} />
        <Route path="/contact" component={Contact}/>
        <Route path="/details/:type/:id" component={Details}/>
        <Route path="/news" component={News}/>
        <Route path="/about" component={About}/>
        <Route path="/account" component={Account}/>
    </>
  )
}
