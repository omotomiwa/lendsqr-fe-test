import React from "react";
import { Link, Route,Routes,Outlet } from 'react-router-dom'; 
import Users from "../Users"; 
function SideNav() {
  return (
    <div>
      <div className="left">
      <div className="side-nav-container">
        <div className="sidenav-menu">
          <div className="side-nav-links">
            <img
              className="icon"
              src="/icons/briefcase.svg"
              width="20"
              height="20"
            />
            <a
              className="nav-link dropdown-toggle sidenav-text"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Switch Organization
            </a>
          </div>
          <div className="side-nav-links dashboard-nav">
            <img
              className="icon"
              src="/icons/home.svg"
              width="20"
              height="20"
            />
            <a
              className="nav-link sidenav-text"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dashboard
            </a>
          </div>
          <div className="customers-container">
          <h6 className="customers">CUSTOMERS</h6>
          </div>
          
         
        </div>
      
        <ul className="sidenav-tabs x">
        <Link to="users" className="links">
        <li className="sidenav-link">
        
        <div className="sub-side-nav-links ">
             <img
               className="icon"
               src="/icons/users.svg"
               width="20"
               height="20"
             />
             <a
               className="sub-sidenav-text "
               href="#"
              
             >
               Users
             </a>
           </div>
     
           
           
 
           </li>

        </Link>
       
       

        <Link to="guarantors"  className="links">
        <li className="sidenav-link">
            
            <div className="sub-side-nav-links   ">
            <img
              className="icon"
              src="/icons/guarantors.svg"
              width="20"
              height="20"
            />
            <a
              className="sub-sidenav-text "
              href="#"
              
            >
              Guarantors
            </a>
          </div>
            
         

          </li>
        </Link>
         
         
          <li className="sidenav-link">
          <div className="sub-side-nav-links   ">
            <img
              className="icon"
              src="/icons/loan.svg"
              width="20"
              height="20"
            />
            <a
              className="sub-sidenav-text "
              href="#"
              
            >
              Loans
            </a>
          </div>

          </li>
          <li className="sidenav-link">
          <div className="sub-side-nav-links   ">
            <img
              className="icon"
              src="/icons/decision-model.svg"
              width="20"
              height="20"
            />
            <a
              className="sub-sidenav-text "
              href="#"
              
            >
              Decision Models
            </a>
          </div>

          </li>
          <li className="sidenav-link">
          <div className="sub-side-nav-links   ">
            <img
              className="icon"
              src="/icons/piggy-bank.svg"
              width="20"
              height="20"
            />
            <a
              className="sub-sidenav-text "
              href="#"
              
            >
              Savings
            </a>
          </div>

          </li>
          <li className="sidenav-link">
          <div className="sub-side-nav-links   ">
            <img
              className="icon"
              src="/icons/loan-request.svg"
              width="20"
              height="20"
            />
            <a
              className="sub-sidenav-text "
              href="#"
              
            >
              Loan Request
            </a>
          </div>

          </li>
          <li className="sidenav-link">
          <div className="sub-side-nav-links   ">
            <img
              className="icon"
              src="/icons/white-list.svg"
              width="20"
              height="20"
            />
            <a
              className="sub-sidenav-text "
              href="#"
              
            >
              Whitelist
            </a>
          </div>

          </li>
          <li className="sidenav-link">
          <div className="sub-side-nav-links   ">
            <img
              className="icon"
              src="/icons/karma.svg"
              width="20"
              height="20"
            />
            <a
              className="sub-sidenav-text "
              href="#"
              
            >
              Karma
            </a>
          </div>

          </li>
       
         

        </ul>
        <div className="business-container nav-heading">
          <h6 className="customers">BUSINESSES</h6>
          </div>
           <ul className="sidenav-tabs x">

          <li className="sidenav-link">
           
          <div className="sub-side-nav-links ">
            <img
              className="icon"
              src="/icons/briefcase.svg"
              width="20"
              height="20"
            />
            <a
              className="sub-sidenav-text "
              href="#"
             
            >
             Organization
            </a>
          </div>

          </li>
          <li className="sidenav-link">
          <div className="sub-side-nav-links   ">
            <img
              className="icon"
              src="/icons/loan-request.svg"
              width="20"
              height="20"
            />
            <a
              className="sub-sidenav-text "
              href="#"
              
            >
            Loan Products
            </a>
          </div>

          </li>
          <li className="sidenav-link">
          <div className="sub-side-nav-links   ">
            <img
              className="icon"
              src="/icons/bank.svg"
              width="20"
              height="20"
            />
            <a
              className="sub-sidenav-text "
              href="#"
              
            >
              Savings Products
            </a>
          </div>

          </li>
          <li className="sidenav-link">
          <div className="sub-side-nav-links   ">
            <img
              className="icon"
              src="/icons/fees.svg"
              width="20"
              height="20"
            />
            <a
              className="sub-sidenav-text "
              href="#"
              
            >
              Fees and Charges
            </a>
          </div>

          </li>
          <li className="sidenav-link">
          <div className="sub-side-nav-links   ">
            <img
              className="icon"
              src="/icons/transaction.svg"
              width="20"
              height="20"
            />
            <a
              className="sub-sidenav-text "
              href="#"
              
            >
              Transactions
            </a>
          </div>

          </li>
          <li className="sidenav-link">
          <div className="sub-side-nav-links   ">
            <img
              className="icon"
              src="/icons/services.svg"
              width="20"
              height="20"
            />
            <a
              className="sub-sidenav-text "
              href="#"
              
            >
              Services
            </a>
          </div>

          </li>
          <li className="sidenav-link">
          <div className="sub-side-nav-links   ">
            <img
              className="icon"
              src="/icons/service-account.svg"
              width="20"
              height="20"
            />
            <a
              className="sub-sidenav-text "
              href="#"
              
            >
              Service Account
            </a>
          </div>

          </li>
          <li className="sidenav-link">
          <div className="sub-side-nav-links   ">
            <img
              className="icon"
              src="/icons/settlement.svg"
              width="20"
              height="20"
            />
            <a
              className="sub-sidenav-text "
              href="#"
              
            >
              Settlements
            </a>
          </div>

          </li>
          <li className="sidenav-link">
          <div className="sub-side-nav-links   ">
            <img
              className="icon"
              src="/icons/reports.svg"
              width="20"
              height="20"
            />
            <a
              className="sub-sidenav-text "
              href="#"
              
            >
              Reports
            </a>
          </div>

          </li>
       
         

        </ul>
        <div className="settings-container nav-heading">
          <h6 className="settings">SETTINGS</h6>
          </div>
          <ul className="sidenav-tabs x">

<li className="sidenav-link">
 
<div className="sub-side-nav-links ">
  <img
    className="icon"
    src="/icons/Preference.svg"
    width="20"
    height="20"
  />
  <a
    className="sub-sidenav-text "
    href="#"
   
  >
 Preferences
  </a>
</div>

</li>
<li className="sidenav-link">
 
<div className="sub-side-nav-links ">
  <img
    className="icon"
    src="/icons/Pricing.svg"
    width="20"
    height="20"
  />
  <a
    className="sub-sidenav-text "
    href="#"
   
  >
 Fees and Pricing
  </a>
</div>

</li>
<li className="sidenav-link">
 
<div className="sub-side-nav-links ">
  <img
    className="icon"
    src="/icons/audit.svg"
    width="20"
    height="20"
  />
  <a
    className="sub-sidenav-text "
    href="#"
   
  >
 Audit Logs
  </a>
</div>

</li>
</ul>
      </div>
      <Outlet/>
     
      </div>
     
    </div>
  );
}
export default SideNav;
