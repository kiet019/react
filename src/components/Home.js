import React, { useEffect } from 'react'
import Banner from './Modal/Banner'
import FilmsShow from './Modal/FilmsShow'
let ListOfFilms = require("../shared/ListOfFilms.json");

export default function Home() {
  useEffect(() => {
		window.scrollTo(0,0)
	})
  return (
    <div className='home'>
        <Banner/>
        {ListOfFilms.map((Films, index) => (
          <FilmsShow Films={Films} key={index}/>
        ))}
    </div>
  )
}
