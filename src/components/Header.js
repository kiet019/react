import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="logo-place">
        <span className="material-icons logo">movie</span>
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
