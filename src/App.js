import Routes from "./Routes/mainRoute";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Partner from "../src/pages/becomeapartner/partner";
import Payment from "../src/pages/paymentgateway/payment";
import Mutual from "../src/pages/mutualfunds/mutual";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Routes} />
          <Route path="/partner" component={Partner} />
          <Route path="/payment" component={Payment} />
          <Route path="/mutual" component={Mutual} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
