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
        
          <Link to="/prapaid " className="strong"> Prepaid Recharge</Link>
          
          
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
          <Link to=" " className="strong"> Postpaid Recharge</Link>
          <Link to=" "> Vodafone Idea (VI) Bill Reacharge</Link>
          <Link to=" "> BSNL Bill Payment</Link>
          <Link to=" "> Airtel Bill Payment</Link>
          <Link to=" "> JIO Bill Payment</Link>
        </div>
      </div>

      <div className="col-3 offer-footer-links">
        <div className="link">
          <Link to=" " className="strong"> DTH Reacharge</Link>
          <Link to=" "> Airtel DTH Reacharge</Link>
          <Link to=" "> Dish TV Idea (VI) Reacharge</Link>
          <Link to=" "> Tata Sky Reacharge</Link>
          <Link to=" "> Sun Direct Reacharge</Link>
          <Link to=" "> Videocon D2H Reacharge</Link>
        </div>

        <div className="link mt-3">
          <Link to=" " className="strong"> Electricity Bil Payment</Link>
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
          <Link to=" "> Datacard Reacharge</Link>
          <Link to=" "> Gas Bill Reacharge</Link>
          <Link to=" "> Gas Booking Reacharge</Link>
          <Link to=" "> Credit Card Bill Payment</Link>
          <Link to=" "> Instant Loans  </Link>
          <Link to=" "> EMI Payment </Link>
          <Link to=" "> Broadband Bill Payment </Link>
          <Link to=" "> Water Bill Payment </Link>
          <Link to=" "> Insurance </Link>
        </div>  
      </div>

      <div className="col-2 offer-footer-links">
        <div className="link">
          <p className="strong m-0"> Company </p>
          <Link to=" "> About</Link>
          <Link to=" "> Career</Link>
          <Link to=" "> Blog</Link>
          <Link to=" "> Press</Link>
          <Link to=" "> Contact  </Link>
          <Link to=" "> Blug Bounty </Link>
          <Link to=" "> Sitemap </Link>
        </div>  
      </div>

      <div className="col-2 offer-footer-links">
        <div className="link">
          <p className="strong m-0"> Help & Support </p>
          <Link to=" "> Home</Link>
          <Link to=" "> Mobile Apps</Link>
          <Link to=" "> Payment Options</Link>
          <Link to=" "> FAQ </Link>
          <Link to=" "> Help  </Link>
          <Link to="/partner"> Become a Partner </Link>
        </div>  
      </div>

      <div className="col-2 offer-footer-links">
        <div className="link">
          <p className="strong m-0"> Help & Support </p>
          <div className="image-links d-flex">
          <Link to=" " className="image-visa image-link me-1"> </Link>
          <Link to=" " className="image-master image-link"> </Link>
          </div>
        </div>  
      </div>
      <div className=" row  mid-footer width901">
       <div className="col-12 d-flex justify-content-center align-items-center">
         <Link to=" " className="mid-footer-links br "> Privacy Policy</Link>|
    <Link to=" " className="mid-footer-links br "> Terms&Conditions</Link>|
     <Link to=" " className="mid-footer-links br "> Refund Policy</Link>|
     <Link to=" " className="mid-footer-links br "> Grievance Policy</Link>|
     <Link to=" " className="mid-footer-links "> PAYBACK Policy</Link>
      </div>
      
    </div>
    <div className=" row mid-footer width900">
       <div className="col-12 d-flex justify-content-center align-items-center">
         <Link to=" " className="mid-footer-links br ">  About</Link>|
    <Link to=" " className="mid-footer-links br "> Career</Link>|
     <Link to=" " className="mid-footer-links br "> Blog</Link>|
     <Link to=" " className="mid-footer-links br ">  Press </Link>|
     <Link to=" " className="mid-footer-links "> Contact </Link>
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
