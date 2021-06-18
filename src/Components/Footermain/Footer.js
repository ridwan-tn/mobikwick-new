import { Link } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
export default function Footer() {
// const aboveJsx =  
//  <Link className="mid-footer-links br "> Privacy Policy</Link>|
// <Link className="mid-footer-links br "> Terms&Conditions</Link>|
// <Link className="mid-footer-links br "> Refund Policy</Link>|
// <Link className="mid-footer-links br "> Grievance Policy</Link>|
// <Link className="mid-footer-links "> PAYBACK Policy</Link>


// const belowJsx =  <><Link> About</Link>
// <Link> Career</Link>
// <Link> Blog</Link>
// <Link> Press</Link>
// <Link> Contact  </Link></>

// const actualJsx = (footer.current)? footer.current.style.width > 900? aboveJsx : belowJsx: console.log("no");

  return (
    <div >
    <div className="row offer-footer width901"   style={{width:"100%",}}>
      <div className="col-2 offer-footer-links"  >
        <div className="link">
          <Link className="strong"> Prepaid Recharge</Link>
          <Link> BSNL Reacharge</Link>
          <Link> Vodafone Idea (VI) Reacharge</Link>
          <Link> JIO Reacharge</Link>
          <Link> MNTL Reacharge</Link>
        </div>

        <div className="link mt-3">
          <Link className="strong"> Postpaid Recharge</Link>
          <Link> Vodafone Idea (VI) Bill Reacharge</Link>
          <Link> BSNL Bill Payment</Link>
          <Link> Airtel Bill Payment</Link>
          <Link> JIO Bill Payment</Link>
        </div>
      </div>

      <div className="col-3 offer-footer-links">
        <div className="link">
          <Link className="strong"> DTH Reacharge</Link>
          <Link> Airtel DTH Reacharge</Link>
          <Link> Dish TV Idea (VI) Reacharge</Link>
          <Link> Tata Sky Reacharge</Link>
          <Link> Sun Direct Reacharge</Link>
          <Link> Videocon D2H Reacharge</Link>
        </div>

        <div className="link mt-3">
          <Link className="strong"> Electricity Bil Payment</Link>
          <Link to='/electricity-payment/Linkvvnl'> AVVNL Bill Payment </Link>
          <Link to='/electricity-payment/Linkpdcl'> APDCL Bill Payment</Link>
          <Link to='/electricity-payment/bescom'> BESCOM Bill Payment</Link>
          <Link to='/electricity-payment/jdvvnl'> JDVVNL Bill Payment</Link>
          <Link to='/electricity-payment/nbpdcl'> NBPDCL Bill Payment</Link>
        </div>
      </div>


      <div className="col-3 offer-footer-links">
        <div className="link">
          <p className="strong m-0"> Others </p>
          <Link> Datacard Reacharge</Link>
          <Link> Gas Bill Reacharge</Link>
          <Link> Gas Booking Reacharge</Link>
          <Link> Credit Card Bill Payment</Link>
          <Link> Instant Loans  </Link>
          <Link> EMI Payment </Link>
          <Link> Broadband Bill Payment </Link>
          <Link> Water Bill Payment </Link>
          <Link> Insurance </Link>
        </div>  
      </div>

      <div className="col-2 offer-footer-links">
        <div className="link">
          <p className="strong m-0"> Company </p>
          <Link> About</Link>
          <Link> Career</Link>
          <Link> Blog</Link>
          <Link> Press</Link>
          <Link> Contact  </Link>
          <Link> Blug Bounty </Link>
          <Link> Sitemap </Link>
        </div>  
      </div>

      <div className="col-2 offer-footer-links">
        <div className="link">
          <p className="strong m-0"> Help & Support </p>
          <Link> Home</Link>
          <Link> Mobile Apps</Link>
          <Link> Payment Options</Link>
          <Link> FAQ </Link>
          <Link> Help  </Link>
          <Link> Become a Partner </Link>
        </div>  
      </div>

      <div className="col-2 offer-footer-links">
        <div className="link">
          <p className="strong m-0"> Help & Support </p>
          <div className="image-links d-flex">
          <Link className="image-visa image-link me-1"> </Link>
          <Link className="image-master image-link"> </Link>
          </div>
        </div>  
      </div>
      <div className=" row  mid-footer width901">
       <div className="col-12 d-flex justify-content-center align-items-center">
         <Link className="mid-footer-links br "> Privacy Policy</Link>|
    <Link className="mid-footer-links br "> Terms&Conditions</Link>|
     <Link className="mid-footer-links br "> Refund Policy</Link>|
     <Link className="mid-footer-links br "> Grievance Policy</Link>|
     <Link className="mid-footer-links "> PAYBACK Policy</Link>
      </div>
      
    </div>
    <div className=" row mid-footer width900">
       <div className="col-12 d-flex justify-content-center align-items-center">
         <Link className="mid-footer-links br ">  About</Link>|
    <Link className="mid-footer-links br "> Career</Link>|
     <Link className="mid-footer-links br "> Blog</Link>|
     <Link className="mid-footer-links br ">  Press </Link>|
     <Link className="mid-footer-links "> Contact </Link>
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
