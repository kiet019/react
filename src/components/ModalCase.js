import React from 'react'
import { Link } from 'react-router-dom'

export default function ModalCase({ setIsOpen, film }) {
  return (
    <div className='modal-show' onClick={() => setIsOpen(false)}>
        <div id='modal1' className='modal' style={{display: 'block', top: '35%'}}>
            <div className='modal-content'>
                <h4>Video for</h4>
                <p></p>
            </div>
            <div className='modal-footer'>
                <Link to=""><span className='material-icons'>close</span></Link>
            </div>
        </div>
    </div>
  )
}
