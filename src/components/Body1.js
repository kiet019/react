import React from 'react'
import FilmsShow from './FilmsShow';
let Movies = require("../shared/ListOfMovie.json");

export default function Body1() {
    return (
        <div className='body'>
            <FilmsShow Films={Movies}/>
        </div>
      )
}
