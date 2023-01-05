import React from "react";
import { Route, Routes } from "react-router-dom" 
import Users from "../Users";
import { Rate, Tabs,Divider  } from 'antd';
//import Loan from "../Dashboard/Guarantors/guarantors
function UserDetails() {
  const onChange = (key: string) => {
    console.log(key);
  };
   
   
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
              href="/dashboard/users"
              
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
          <div className="user-tabs">
            <Tabs
    defaultActiveKey="1"
    onChange={onChange}
    items={[
      {
        label: `General Details`,
        key: '1',
        children: <div className="tab-one-container">
          <div className="personal-info-container">
            <p className="info-header"> Personal Information</p>
            <div className="details-container">
             
                <div className="details-heading-container">
                  <div className="head">
                    <p className="sub-head">FULL NAME</p>
                    <p className="sub-head-details">Grace Effiom</p>
                  </div>
                  <div className="head">
                    <p className="sub-head">MARITAL STATUS</p>
                    <p className="sub-head-details">Single</p>
                  </div>
                </div>
             
                <div className="details-heading-container">
                  <div className="head">
                    <p className="sub-head">PHONE NUMBER</p>
                    <p className="sub-head-details">07060780922</p>
                  </div>
                  <div className="head">
                    <p className="sub-head">CHILDREN</p>
                    <p className="sub-head-details">None</p>
                  </div>
                </div>
                <div className="details-heading-container">
                  <div className="head">
                    <p className="sub-head">EMAIL ADDRESS</p>
                    <p className="sub-head-details">grace@gmail.com</p>
                  </div>
                  <div className="head">
                    <p className="sub-head">TYPE OF RESIDENCE</p>
                    <p className="sub-head-details"> Parent`s Apartment</p>
                  </div>
                </div>
                <div className="details-heading-container">
                  <div className="head">
                    <p className="sub-head">BVN</p>
                    <p className="sub-head-details">08175752205</p>
                  </div>
                 
                </div>
                <div className="details-heading-container">
                  <div className="head">
                    <p className="sub-head">GENDER</p>
                    <p className="sub-head-details">Female</p>
                  </div>
                 
                </div>
               
            </div>
            <Divider />
            
            
          </div>
          <div className="personal-info-container">
            <p className="info-header"> Education and  Employment</p>
            <div className="details-container">
             
                <div className="details-heading-container">
                  <div className="head">
                    <p className="sub-head">LEVEL OF EDUCATION</p>
                    <p className="sub-head-details">B.Sc</p>
                  </div>
                  <div className="head">
                    <p className="sub-head">OFFICE MAIL</p>
                    <p className="sub-head-details">grace@lendsqr.com</p>
                  </div>
                </div>
             
                <div className="details-heading-container">
                  <div className="head">
                    <p className="sub-head">EMPLOYMENT STATUS</p>
                    <p className="sub-head-details">Monthly income</p>
                  </div>
                  <div className="head">
                    <p className="sub-head">MONTHLY INCOME</p>
                    <p className="sub-head-details">₦200,000.00</p>
                  </div>
                </div>
                <div className="details-heading-container">
                  <div className="head">
                    <p className="sub-head">SECTOR OF EMPLOYMENT</p>
                    <p className="sub-head-details">FinTech</p>
                  </div>
                  <div className="head">
                    <p className="sub-head">LOAN REPAYMENT</p>
                    <p className="sub-head-details">40,000</p>
                  </div>
                </div>
                <div className="details-heading-container">
                  <div className="head">
                    <p className="sub-head">DURATION OF EMPLOYMENT</p>
                    <p className="sub-head-details">2 years</p>
                  </div>
                  
                </div>
                
               
            </div>
            <Divider />
            
            
          </div>
          <div className="personal-info-container">
            <p className="info-header"> Socials</p>
            <div className="details-container">
             
                <div className="details-heading-container">
                  <div className="head">
                    <p className="sub-head">TWITTER</p>
                    <p className="sub-head-details">@grace_effiom</p>
                  </div>
                 
                </div>
             
                <div className="details-heading-container">
                  <div className="head">
                    <p className="sub-head">FACEBOOK</p>
                    <p className="sub-head-details">Grace Effiom</p>
                  </div>
                  
                </div>
                <div className="details-heading-container">
                  <div className="head">
                    <p className="sub-head">INSTAGRAM</p>
                    <p className="sub-head-details">@grace_effiom</p>
                  </div>
                  
                </div>
                
             
               
            </div>
            <Divider />
            
            
          </div>
          <div className="personal-info-container">
            <p className="info-header"> GUARANTOR</p>
            <div className="details-container">
             
                <div className="details-heading-container">
                  <div className="head">
                    <p className="sub-head">FULL NAME</p>
                    <p className="sub-head-details">Debby Ogana</p>
                  </div>
                 
                </div>
             
                <div className="details-heading-container">
                  <div className="head">
                    <p className="sub-head">PHONE NUMBER</p>
                    <p className="sub-head-details">07060780922</p>
                  </div>
                 
                </div>
                <div className="details-heading-container">
                  <div className="head">
                    <p className="sub-head">EMAIL ADDRESS</p>
                    <p className="sub-head-details">debby@gmail.com</p>
                  </div>
                  
                </div>
                <div className="details-heading-container">
                  <div className="head">
                    <p className="sub-head">RELATIONSHIP</p>
                    <p className="sub-head-details">Sister</p>
                  </div>
                  
                </div>
               
               
            </div>
            <Divider />
            
            
          </div>
        </div>,
      },
      {
        label: `Documents`,
        key: '2',
        children: `Content of Tab Pane 2`,
      },
      {
        label: `Bank Details`,
        key: '3',
        children: `Content of Tab Pane 3`,
      },
      {
        label: `Loans`,
        key: '4',
        children: `Content of Tab Pane 4`,
      },
      {
        label: `Savings`,
        key: '5',
        children: `Content of Tab Pane 5`,
      },
      {
        label: `App and System`,
        key: '6',
        children: `Content of Tab Pane 6`,
      },
    ]}
  />
            </div>
       
        
  
          
      </div>
    )
  }
  export default  UserDetails;