import React,{Component} from 'react';
import {Navbar,Nav,Image,Button,Container} from 'react-bootstrap';
import './Apps.css'
import Sideapp from '../../Components/Side&App Bar/sideapp'
import Footer from '../../Components/Footer/Footer'

class Apps extends Component {
    constructor(props){
        super(props)
        this.state={
        }
    }
    render(){
  return (
    <div><Sideapp />
  <div className="container main">
      <div className="row">
      <div className="col-md-3 col-12">
          <img className="mainimg" src="https://www.mobikwik.com/assets/images/standalone/mobile-apps.jpg"/>

      </div>
      <div className="secondsection col-md-7">
          <p className="appsfirsth">Use it and you'll never use your physical wallet again.</p>
          <p className="secondp">Online shopping, food order-ins, everyday needs, groceries, movie tickets, internet bills, phone bills, recharges, electricity bills, gas bills, restaurant bills…phew! The list of things you can do with your MobiKwik wallet is never ending.</p>
          <div className="appimg">
          <img className="appsimg1" src="https://www.mobikwik.com/assets/images/refere-Google-Play-app-page.png"/><img className="appsimg1" src="https://www.mobikwik.com/assets/images/refer-app-store-app-page.png"/>
      </div>
      </div>
      </div>
      <div className="thirdsections" style={{marginTop:"60px"}}>
                <h6 style={{marginTop:"15px",fontWeight:"547"}}>MobiKwik App</h6>
                <p style={{fontSize:"12px",marginTop:"15px",color:"#757575"}}>MobiKwik is a Truly Indian app that lets you make payments, avail credit, grow your assets, save and do so much more, all in just one place.</p>

                <h6 className="thirdp" style={{marginTop:"20px"}}>How To Download MobiKwik Mobile App?</h6>
                <p style={{fontSize:"12px",marginTop:"15px",color:"#757575"}}>Just click on Playstore for Android or Appstore for an Apple device and it will redirect you to the MobiKwik app download page. Yes, it’s that simple!</p>

                <h6 className="thirdp" style={{marginTop:"20px"}}>How To Get Started After Downloading The MobiKwik App?</h6>
                <p style={{fontSize:"12px",marginTop:"15px",color:"#757575"}}>Signing up on MobiKwik Android App or MobiKwik iOS app is very easy. Enter your mobile number and the received OTP. Just follow the steps and provide the necessary information and voila! You will have successfully signed up on the MobiKwik app!</p>

                <h6 className="thirdp" style={{marginTop:"20px"}}>How To Use The MobiKwik App?</h6>
                <p style={{fontSize:"12px",marginTop:"15px",color:"#757575"}}>MobiKwik payment app is very easy to use. All the services provided are mentioned in the Homepage itself. You just have to click on your desired service and follow the steps. You can make bill payments like electricity, gas, water, tuition, maintenance; recharge your mobile or DTH; transfer money to anybody; shop at 1 Lakh+ brand, avail large and small credit loan, invest in Mutual Funds and Gold and so much more!</p>

                <h6 className="thirdp" style={{marginTop:"20px"}}>The Advantages Of Using MobiKwik Payment App</h6>
                <p style={{fontSize:"12px",marginTop:"15px",color:"#757575"}}>Mentioned below are the advantages one can experience after downloading and using the MobiKwik payment app.</p>

                <div style={{marginLeft:"30px"}}>
                <li style={{fontSize:"small"}}>Quick Payments-</li>
                <p style={{color:"#757575"}} className="thirdp2" >Payments done via the MobiKwik app are quick, seamless and hassle-free. You can also make direct bank to bank payments with UPI without completing your KYC.</p>

                <li style={{fontSize:"small"}}>Everything At One Place-</li>
                <p style={{color:"#757575"}} className="thirdp2">MobiKwik app is one stop destination for all financial needs. From credit to payments to investment, everything can be done at one place in just a few clicks.</p>

                <li style={{fontSize:"small"}}>Safe And Secure-</li>
                <p style={{color:"#757575"}} className="thirdp2">All transactions made on the MobiKwik app are completely secure and safe.</p>
                </div>
            </div>
  </div>
  <Footer/>
  </div>
  );
}
}

export default Apps;
