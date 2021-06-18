import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
export default function Footer(props) {
  const { window } = props;


  return (
    <div>
    <div className="row offer-footer width901"   style={{width:"86%", float:"right"}}>
      <div className="col-2 offer-footer-links"  >
        <div className="link">
        
          <link to href=" " className="strong"> Prepaid Recharge</link>
          
          
            <Link to="/bsnl">
             BSNL Reacharge
            </Link>
            <Link to="/Vodafone">
            Vodafone Idea (VI) Reacharge
            </Link>
            <Link to="/Mntl">
            MNTL Reacharge
            </Link>
            <Link to="/Jio">
            JIO Reacharge
            </Link>
          
         
         
        </div>

        <div className="link mt-3">
          <a href=" " className="strong"> Postpaid Recharge</a>
          <a href=" "> Vodafone Idea (VI) Bill Reacharge</a>
          <a href=" "> BSNL Bill Payment</a>
          <a href=" "> Airtel Bill Payment</a>
          <a href=" "> JIO Bill Payment</a>
        </div>
      </div>

      <div className="col-3 offer-footer-links">
        <div className="link">
          <a href=" " className="strong"> DTH Reacharge</a>
          <a href=" "> Airtel DTH Reacharge</a>
          <a href=" "> Dish TV Idea (VI) Reacharge</a>
          <a href=" "> Tata Sky Reacharge</a>
          <a href=" "> Sun Direct Reacharge</a>
          <a href=" "> Videocon D2H Reacharge</a>
        </div>

        <div className="link mt-3">
          <a href=" " className="strong"> Electricity Bil Payment</a>
          <Link to='/electricity-payment/avvnl'> AVVNL Bill Payment </Link>
          <Link to='/electricity-payment/apdcl'> APDCL Bill Payment</Link>
          <Link to='/electricity-payment/bescom'> BESCOM Bill Payment</Link>
          <Link to='/electricity-payment/jdvvnl'> JDVVNL Bill Payment</Link>
          <Link to='/electricity-payment/nbpdcl'> NBPDCL Bill Payment</Link>
        </div>
      </div>


      <div className="col-3 offer-footer-links">
        <div className="link">
          <p className="strong m-0"> Others </p>
          <a href=" "> Datacard Reacharge</a>
          <a href=" "> Gas Bill Reacharge</a>
          <a href=" "> Gas Booking Reacharge</a>
          <a href=" "> Credit Card Bill Payment</a>
          <a href=" "> Instant Loans  </a>
          <a href=" "> EMI Payment </a>
          <a href=" "> Broadband Bill Payment </a>
          <a href=" "> Water Bill Payment </a>
          <a href=" "> Insurance </a>
        </div>  
      </div>

      <div className="col-2 offer-footer-links">
        <div className="link">
          <p className="strong m-0"> Company </p>
          <a href=" "> About</a>
          <a href=" "> Career</a>
          <a href=" "> Blog</a>
          <a href=" "> Press</a>
          <a href=" "> Contact  </a>
          <a href=" "> Blug Bounty </a>
          <a href=" "> Sitemap </a>
        </div>  
      </div>

      <div className="col-2 offer-footer-links">
        <div className="link">
          <p className="strong m-0"> Help & Support </p>
          <a href=" "> Home</a>
          <a href=" "> Mobile Apps</a>
          <a href=" "> Payment Options</a>
          <a href=" "> FAQ </a>
          <a href=" "> Help  </a>
          <a href="/partner"> Become a Partner </a>
        </div>  
      </div>

      <div className="col-2 offer-footer-links">
        <div className="link">
          <p className="strong m-0"> Help & Support </p>
          <div className="image-links d-flex">
          <a href=" " className="image-visa image-link me-1"> </a>
          <a href=" " className="image-master image-link"> </a>
          </div>
        </div>  
      </div>
      <div className=" row  mid-footer width901">
       <div className="col-12 d-flex justify-content-center align-items-center">
         <a  href=" " className="mid-footer-links br "> Privacy Policy</a>|
    <a  href=" " className="mid-footer-links br "> Terms&Conditions</a>|
     <a  href=" " className="mid-footer-links br "> Refund Policy</a>|
     <a  href=" " className="mid-footer-links br "> Grievance Policy</a>|
     <a  href=" " className="mid-footer-links "> PAYBACK Policy</a>
      </div>
      
    </div>
    <div className=" row mid-footer width900">
       <div className="col-12 d-flex justify-content-center align-items-center">
         <a  href=" " className="mid-footer-links br ">  About</a>|
    <a  href=" " className="mid-footer-links br "> Career</a>|
     <a  href=" " className="mid-footer-links br "> Blog</a>|
     <a  href=" " className="mid-footer-links br ">  Press </a>|
     <a  href=" " className="mid-footer-links "> Contact </a>
      </div>
      
    </div>
    <div className=" row  lower-footer">
       <div className="col-12 d-flex justify-content-center align-items-center" style={{height:"30px"}}>
        <span style={{fontSize:"13px",fontWeight:"100",color:"rgba(255,255,255,.8)"}}>© 2021 One MobiKwik System Pvt Ltd, India | All rights reserved. | 2.0.84</span>
      </div>
    </div>
    </div>
   

    

 
   
    </div>
  )
}
