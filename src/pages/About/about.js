import React,{ useState } from 'react';
import first from './first.png'
import {Image,Button,Card} from 'react-bootstrap';
import datas from './aboutdata';
import './about.css'
import Sideapp from '../../Components/Side&App Bar/sideapp'
import Footer from '../../Components/Footer/Footer'

function About() {
  const [cards] = useState(datas);

    return (
      <div> <Sideapp/>
      <div className="firstsection">
            <img className="firstimage" src={first}>
      </img>

      <div className="container firstsection1 pt-5">
          <h5 className="abouth">About Us</h5>
          <p className="container mt-4 firstpara1">MobiKwik is India’s leading fintech platform, operating businesses in consumer payments, financial services and payment gateway. The vision of the company is - to build a Digital Credit Card for 100 Million Indians. Founded in 2009 by Bipin Preet Singh and Upasana Taku, the company has raised $110M in funding from marquee investors. With 60% Indian ownership, MobiKwik is the Truly Indian Payments App.</p>
          <p className="container secondpara1" >MobiKwik’s payments network is one of the largest in India with 120 million users, 3 million merchants, and 300+ billers. The company has pre-approved 20 million users for its Digital Credit Card aka Buy Now Pay Later “BNPL” product – MobiKwik ZIP, which is available to users for making payments via the MobiKwik Wallet and the MobiKwik Blue Amex Card. The company ventured into the Wealthtech space with the acquisition of Mumbai-based Clearfunds</p>
    
      </div>

      <div className="container aboutsecondsection pt-5">
          <h5 className="secondh">Our Team</h5>
          
          {cards.map((card) => {
            return (
   <Card className="aboutc1 col-md-3 col-sm-12 mt-3 ml-2">
            <Card.Img style={{margin:"0px"}} variant="top" src={card.image} />
              <Card.Body>
                <Card.Title style={{fontSize:"medium"}}>{card.title}</Card.Title>
                <Card.Text style={{fontSize:"small"}}>{card.info}</Card.Text>
                <img src={card.icon1}/>
                <img style={{width:"30px",height:"30px",marginLeft:"10px"}} src={card.icon2}/>
   </Card.Body>
   </Card>
      );
    })}
      </div>
      </div>
      <Footer/>
      </div>


    )
}

export default About;