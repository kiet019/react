import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Header() {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div className="header" style={{ backgroundColor: theme.backgroundColor }}>
      <a className="switch-mode" href="/" onClick={toggle}>
        <span className="material-icons logo">movie</span>
      </a>
      <div className="search-box">
        <form>
          <input className="text-input" placeholder="Search your movie..."/>
            <span className="material-icons search">search</span>
        </form>
      </div>
      <div className="login-user">
        <span className="material-icons login">account_circle</span>
      </div>
    </div>
  );
}
