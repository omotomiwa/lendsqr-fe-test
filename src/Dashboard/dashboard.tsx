import React from "react";
//import logo from './logo.svg';
import { useState } from "react";
import Navbar from "../Navbar/navbar"
import SideNav from "../SideNav/sidenav";
//import Users from "../Main/main";
import { Route, Routes } from "react-router-dom" 
//import Loan from "../Guarantors/guarantors";

function Dashboard() {
   
   
  return (
    <div>
      <Navbar/>
      <div className="content-wrapper">
        <SideNav/>
        
      </div>

        
    </div>
  )
}
export default  Dashboard;
