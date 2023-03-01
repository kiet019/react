import React, { useEffect } from 'react'
import AddUser from './AddUser'
import ShowUser from './ShowUser'

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
