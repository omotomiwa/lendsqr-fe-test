import React from "react";
//import logo from './logo.svg';
import { useState } from "react";

function Navbar() {
   
   
  return (
    <div>
       <div className="nav-container">
        <div className="nav-items">
            <div className="nav-item-left">
            <div className="logo-wrapper">
            <img src="logo.svg" width="25" height="25" />
            <img src="lendsqr.svg" width="138" height="36" />
          </div>
          <div className="input-group">
    <input type="text" className="form-control " placeholder="Search for anything"/>
    <div className="input-group-append">
      <button className="btn btn-secondary" type="button">
        <i className="bi bi-search search-icon"></i>
      </button>
    </div>
  </div>
            </div>
            <div className="nav-item-right">
                <a className="document">Docs</a>
                <img src="/icons/notify.svg" width="25" height="25" />
                
                <div className="profile">
                <img  className="avatar" src="/icons/profile-image.svg" width="32" height="32" />
                <a className="nav-link dropdown-toggle profile-name" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Adedeji
        </a>
                
  
  

                </div>
            </div>
        </div>
       </div>

        
    </div>
  )
}
export default  Navbar;
