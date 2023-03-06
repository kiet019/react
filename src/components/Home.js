import React, { useEffect, useState } from 'react'
import Banner from './Modal/Banner'
import FilmsShow from './Modal/FilmsShow'


export default function Home() {
  const baseURL = 'https://64055d32eed195a99f80eece.mockapi.io/api/films/details'
  const [ListOfFilms, setAPIData] = useState([]);
  const fetchContacts = () => {
    fetch(baseURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setAPIData(data);
      })
      .catch((error) => console.log(error));
  };
  // Hàm để lấy danh sách contact từ API
  useEffect(() => {
    fetchContacts();
    
  }, []);
  useEffect(() => {
		window.scrollTo(0,0)
	})
  return (
    <div className='home'>
        <Banner/>
        {ListOfFilms.length > 0?  ListOfFilms.map((Films) => (
          <FilmsShow Films={Films} key={Films.id}/>
        )) : null}
    </div>
  )
}
