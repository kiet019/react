import React, { useEffect } from 'react'
import AddUser from './User/AddUser'
import ShowUser from './User/ShowUser'

export default function Account() {
  useEffect(() => {
		window.scrollTo(0,0)
	})
  return (
    <div className='account'>
        <AddUser/>
        <ShowUser/>
    </div>
  )
}
