import React from 'react'
import Body1 from "./Body1";
import Body from "./Body";
import { Route } from "react-router-dom";

export default function Bodys() {
  return (
    <>
        <Route exact path="/" component={Body} />
        <Route path="/body1" component={Body1} />
    </>
  )
}
