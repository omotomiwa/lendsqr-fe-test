import React from 'react';
//import logo from './logo.svg';
import './App.scss';
import Login from "./LoginPage/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard/dashboard';

function App() {
  return (
    <div >
      <Router>
      <Routes>
        {/* <Route path="/" element={LoginUi} /> */}
        <Route path="/" element={<Login />}   />
        <Route
          path="/dashboard"
          element={<Dashboard />}
     
          
        />
        {/* <Route path="/dashboard" component={dashboard} /> */}
      </Routes>
      

      </Router>
     
      
    </div>
  );
}

export default App;
