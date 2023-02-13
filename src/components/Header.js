import React from "react";
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function Header() {
  const { theme, toggle} = useContext(ThemeContext)
  return (
    <div className="header" style={{ backgroundColor: theme.backgroundColor}}>
      <div className="logo-place">
      <a className='switch-mode' href='#' onClick={toggle}><span className="material-icons logo">movie</span></a>
      </div>
      <div className="search-box">
        <form className="search-box-form">
          <input
            type="text"
            className="search-text"
            placeholder="Your movie name..."
          />
          <input type="submit" className="search-submit" value=" "></input>
          <span class="material-icons search">search</span>
        </form>
      </div>
      <div className="login-user">
        <span class="material-icons login">account_circle</span>
      </div>
    </div>
  );
}
