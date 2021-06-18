import React from 'react';
import {Button} from 'react-bootstrap'
import './contact.css'
import Sideapp from '../../Components/Side&App Bar/sideapp'
import Footer from '../../Components/Footer/Footer'

function Contact() {
  return (
    <div> <Sideapp/>
    <div className="contactsection">
        <div className="col-md-6 col-12" style={{float:"left"}}>
        <h6 className="contact1" >One MobiKwik Systems Private Limited</h6>
        <h6 style={{fontSize:"13px"}} className="mt-3">Customer Care</h6>
        <p className="contact2">We stay by the phone to help you through all your doubts and queries. For any assistance or clarification, please contact MobiKwik helpline number: 011-61266390 <span style={{color:"grey",fontWeight:"bold"}}>( Monday to Saturday 9:00 am to 8:00 pm )</span></p>
        <h6 style={{fontSize:"small"}} className="mt-3">Mail Us</h6>
        <p className="contact2">We hate to see you in confusion. We ensure 24*7 customer support so that you are never in trouble. For any query, write to us <span style={{color:"blue"}}>https://www.mobikwik.com/help</span> </p>
        <h6 style={{fontSize:"small"}} className="mt-3">Social Media Support</h6>
        <p className="contact2">We are just a text away. For any support, reach out to us through our twitter handle <span style={{color:"blue"}}>@MobiKwikSWAT</span> or the <span style={{color:"blue"}}>MobiKwik Facebook Page.</span></p>
        <h6 style={{fontSize:"small"}} className="mt-3">Business Alliances And Inquiries</h6>
        <p style={{fontSize:"small",width:"440px",color:"blue"}} className="contact3">partners@mobikwik.com</p>
        </div>

        <div className="col-md-6 col-12" style={{float:"left"}}>
        <h6 style={{fontSize:"small",marginTop:"34px"}} className="ml-3">Address</h6>
        <p className="ml-3 contacts1">3rd Floor, Augusta Point, Golf Course Road,<br></br>Sector 53, Gurgaon,<br></br>Haryana - 122002,<br></br>India</p>
        <h6 style={{fontSize:"small",marginTop:"34px"}} className="ml-1">Download our App</h6>
        <img style={{width:"126px"}}  src="https://www.mobikwik.com/assets/images/refere-Google-Play-app-page.png"></img>
        <img style={{marginLeft:"10px",width:"126px"}} src="https://www.mobikwik.com/assets/images/refer-app-store-app-page.png"></img>
        </div>

        </div>
        <Footer/>
    </div>
  );

  }
export default Contact;
