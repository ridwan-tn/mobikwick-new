import React from "react";

import Sideapp from "../Components/Side&App Bar/sideapp";
import Recharge from "../pages/recharge&bill/recharge";
import Transfer from "../pages/transferbank/transfer";
import Offer from "../pages/offers&deals/offers";
import Boostloan from "../pages/boostloan/boostloan";
import Local from "../pages/localstores/local";
import Payback from "../pages/redeempayback/payback";
import Mgm from "../pages/redeemmgm/mgm";
import Wallet from "../pages/wallettransfer/wallet";
import Footer from '../Components/Footermain/Footer'
import Rbsnl from "../Components/Footermain/Fbsnlreacharge";
import RVi from "../Components/Footermain/Fvireacharge"
import Rmntl from '../Components/Footermain/Fmntlreacharge'
import Rji from '../Components/Footermain/Fjioreacharge'
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
            render={(props) => <Offer {...props} />}
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
         
        </Switch>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}
