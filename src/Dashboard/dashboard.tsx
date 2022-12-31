import React from "react";
//import logo from './logo.svg';
import { useState } from "react";
import Navbar from "./../Navbar/navbar"
import SideNav from "../SideNav/sidenav";
import Main from "../Main/main";

function Dashboard() {
   
   
  return (
    <div>
      <Navbar/>
      <div className="content-wrapper">
        <SideNav/>
        <Main/>
      </div>

        
    </div>
  )
}
export default  Dashboard;
