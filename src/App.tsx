import React from 'react';
//import logo from './logo.svg';
import './App.scss';
import Login from "./LoginPage/login";
import { BrowserRouter as Router, Routes, Route,Outlet } from "react-router-dom";
import Dashboard from './Dashboard/dashboard';
import Users from './Users/users';
import Guarantors from './Guarantors/guarantors';
import UserDetails from './UserDetails/userDetails';


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
          <Route path="users"  element={<Users />}/> 
          
          <Route path="guarantors"  element={<Guarantors />}/>
          <Route path="userDetails"  element={<UserDetails />}/>
         
        
          
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
