import React from "react";

export default function Navigation() {
  return (
    <div className="nagivation">
      <nav>
        <ul className="ul-nav">
          <li>
            <span class="material-icons nav">menu</span><div className="text">Menu</div>
          </li>
          <li>
            <span class="material-icons nav">home</span><div className="text">Home</div>
          </li>
          <li>
            <span class="material-icons nav">live_tv</span><div className="text">Series</div>
          </li>
          <li>
            <span class="material-icons nav">movie</span><div className="text">Movies</div>
          </li>
          <li>
            <span class="material-icons nav">settings</span><div className="text">Setting</div>
          </li>
          <li>
            <span class="material-icons nav">manage_accounts</span><div className="text">Account</div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
