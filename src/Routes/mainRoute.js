import React from "react";
import Sideapp from "../Components/Side&App Bar/sideapp";
import Recharge from "../pages/recharge&bill/recharge";
import Transfer from "../pages/transferbank/transfer";
import Boostloan from "../pages/boostloan/boostloan";
import Local from "../pages/localstores/local";
import Payback from "../pages/redeempayback/payback";
import Mgm from "../pages/redeemmgm/mgm";
import Wallet from "../pages/wallettransfer/wallet";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Offers from "../pages/offers&deals/offers";
import  SeeAll from "../Components/SeeAll/SeeAll"
import ElectricityPayment from "../Components/ElectricityPayments/ElectricityPayment";
import LocalStore from "./LocalStore";
import Apps from "../pages/appspage/apps";
import Blog from "../pages/Blog/Blog";
import Career from "../pages/career/career";
import About from "../pages/About/about";
import Contact from "../pages/contact/contact";
import Sitemap from "../pages/sitemap/sitemap";
import Rbsnl from "../Components/Footer/Fbsnlreacharge";
import RVi from "../Components/Footer/Fvireacharge"
import Rmntl from '../Components/Footer/Fmntlreacharge'
import Rji from '../Components/Footer/Fjioreacharge'
export default function main() {
  return (
    <div>
      <BrowserRouter>
        <Sideapp />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Recharge {...props} />}
          />
          <Route
            exact
            path="/transfer"
            render={(props) => <Transfer {...props} />}
          />

          <Route
            exact
            path="/offers"
            render={(props) => <Offers {...props} /> }
          />

          <Route
            exact
            path="/boost"
            render={(props) => <Boostloan {...props} />}
          />
          <Route exact path="/local" render={(props) => <Local {...props} />} />
          <Route
            exact
            path="/payback"
            render={(props) => <Payback {...props} />}
          />
          <Route exact path="/mgm" render={(props) => <Mgm {...props} />} />
          <Route
            exact
            path="/wallet"
            render={(props) => <Wallet {...props} />}
          />
          <div style={{width:"84%",float:"right",marginBottom:"100px"}}>
         <Route exact path="/electricity-payment/avvnl" component={ ElectricityPayment } />	
         <Route
            exact
            path="/bsnl"
            render={(props) => <Rbsnl {...props} />}
          /> 
          <Route
            exact
          path="/Vodafone"
          render={(props) => <RVi {...props} />}
        />
        <Route
            exact
          path="/Mntl"
          render={(props) => <Rmntl {...props} />}
        />
          <Route
            exact
          path="/Jio"
          render={(props) => <Rji {...props} />}
        />
         <Route
            exact
          path="/About"
          render={(props) => <About {...props} />}
        />
         <Route
            exact
          path="/Carrer"
          render={(props) => <Career {...props} />}
        />
         
        </div>
        </Switch>
        
      </BrowserRouter>
    </div>
  );
}
