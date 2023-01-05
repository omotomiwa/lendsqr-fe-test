import React from "react";
//import logo from './logo.svg';
import { useState } from "react";
import {useNavigate} from "react-router";
import Dashboard from "../Dashboard/dashboard";
function Login() {

    const [shown, setShown] = useState(false);
    const getInputValue = (event: { target: { value: any; }; })=>{
        // show the user input value to console
        const userValue = event.target.value;

       
    };
    let navigate = useNavigate();
   const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(e.target.email.value);
    
        if (!e.target.email.value) {
          alert("Email is required");
        } else if (!e.target.email.value) {
          alert("Valid email is required");
        } else if (!e.target.password.value) {
          alert("Password is required");
        } else if (
          e.target.email.value === "admin@example.com" &&
          e.target.password.value === "admin"
        ) {
             navigate("/dashboard")
          alert("Successfully logged in");
          
          e.target.email.value = "";
          e.target.password.value = "";
        } else {
          alert("Wrong email or password combination");
        }
      };
    //   const handleClick = (e: { preventDefault: () => void; }) => {
    //     e.preventDefault();
    
    //     alert("Goes to registration page");
    //   };
  return (
    <div className="  wrapper">
      <div className="row gx-5">
        <div className="col ">
          <div className="logo-wrapper">
            <img src="logo.svg" width="25" height="25" />
            <img src="lendsqr.svg" width="138" height="36" />
          </div>
          <div className="pablo-img">
            <img
              src="pablo.svg"
              alt="Girl in a jacket"
              width="600"
              height="337"
            />
          </div>
        </div>
        <div className="col login-wrapper">
          <h2>Welcome!</h2>
          <p>Enter details to login.</p>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group email-input">
              <input
                type="email"
                value="admin@example.com"
                className="form-control"
                id="email"
                placeholder="Email"
              />
              
              <br />

              <div className="input-group password">
                <input
                   type={shown ? "text" : "password"}
                   value= "admin"
                   onChange={getInputValue}
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
                <div className="input-group-append">
                  <span className="show-hide" onClick={() => setShown(!shown)}>{!shown? "show" : "hide"}</span>
                </div>
              </div>

              <a className=" forgot-pwd" href="#">
                {" "}
                Forgot Password?
              </a>
              <br />
              <div className="btn-wrapper">
                <button type="submit" className="submit-btn">
                  LOGIN
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
