import React from "react";
import { Route, Routes } from "react-router-dom" 
import Users from "../Users/users";
import { Rate } from 'antd';
//import Loan from "../Dashboard/Guarantors/guarantors
function UserDetails() {
   
   
    return (
      <div className="container">

<button className="back-btn  ">
            <img
              className="arrow-icon"
              src="/icons/arrow.svg"
              width="20"
              height="20"
            />
            <a
              className="back "
              href="#"
              
            >
              Back to Users
            </a>
          </button>
          <div className="user-details-header-container">
            <div className="user-details-header-text">User Details</div>
            <div className="action-btns">
              <button className="blacklist-user">BLACKLIST USER</button>
              <button className="active-user">ACTIVATE USER</button>
            </div>
          </div>
          <div className="user-details-tab-container">
            <div className="user-details-sub-container">
              <div className="profile-container">
              <img
              className="avatar-icon"
              src="/icons/profile-avatar.svg"
              width="100"
              height="100"
            />
                <div className="name-container">
                  <div className="fullname"> <h5>Grace Effiom</h5></div>
                  <div className="code"><p>LSQFf587g90</p></div>
                </div>
              </div>
              <img
              className="divider"
              src="/icons/Line.svg"
              width="100"
              height="100"
            />
              <div className="ratings-container">
                <p className="ratings">User’s Tier</p>
                <Rate disabled defaultValue={1} count={3} />
              </div>
              <img
              className="divider"
              src="/icons/Line.svg"
              width="100"
              height="100"
            />
               <div className="amount-container">
                <p className="amount">₦200,000.00</p>
                <p className="bank-details">9912345678/Providus Bank</p>
              </div>
            </div>

          </div>
       
        
  
          
      </div>
    )
  }
  export default  UserDetails;