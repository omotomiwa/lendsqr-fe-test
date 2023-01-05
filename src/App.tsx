import React from 'react';
//import logo from './logo.svg';
import './App.scss';
import Login from "./LoginPage";
import { BrowserRouter as Router, Routes, Route,Outlet } from "react-router-dom";
import Dashboard from './Dashboard';
import Users from './Users';
import Guarantors from './Guarantors';
import UserDetails from './UserDetails';


function App() {
  return (
    <div >
      <Router>
      <Routes>
        
        <Route path="/" element={<Login />}   />
        <Route
          path="/dashboard"
          element={<Dashboard />}
     
          
        >
          <Route path="users"  element={<Users />}><Route path="userDetails"  element={<UserDetails />}/></Route> 
          
          <Route path="guarantors"  element={<Guarantors />}/>
          
         
        
          
        </Route>
        
        {/* <Route path="/users" element={<Users/> }  /> 
            <Route path="/loan" element={<Loan/> } />  */}
       
      </Routes>
      

      </Router>
      {/* <Login/> */}
     
      
    </div>
  );
}

export default App;
