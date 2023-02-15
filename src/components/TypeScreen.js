import React, { useEffect } from 'react'
import FilmsShow from './FilmsShow';
import { useParams } from 'react-router-dom'
let ListOfFilms = require("../shared/ListOfFilms.json")

export default function TypeScreen() {
    const { type } = useParams();
    const ms = ListOfFilms.find(Object =>{
        return Object.ms === type
    })
    useEffect(() => {
		window.scrollTo(0,0)
	})
    return (
        <div className='home'>
            <FilmsShow Films={ms}/>
        </div>
      )
}
