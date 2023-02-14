import React from 'react'
import Banner from './Banner'
import FilmsShow from './FilmsShow'
let Movies = require("../shared/ListOfMovie.json");
let Series = require("../shared/ListOfSeries.json")

export default function Body() {
  return (
    <div className='body'>
        <Banner/>
        <FilmsShow Films={Movies}/>
        <FilmsShow Films={Series}/>
    </div>
  )
}
