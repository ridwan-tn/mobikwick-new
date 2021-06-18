
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Partner from "../src/pages/becomeapartner/partner";
import LocalStore from './Routes/LocalStore'
import Mutual from "../src/pages/mutualfunds/mutual";
import Partners from './pages/becomeapartner/partner'
import Payment from './pages/paymentgateway/payment'
import Career from './pages/career/career'
import Apps from './pages/appspage/apps'
import Contact from './pages/contact/contact'
import Blog from './pages/Blog/Blog'
import About from './pages/About/about'
import Sitemap from './pages/sitemap/sitemap'
import Routes from "./Routes/mainRoute";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Routes} />
          <Route path="/partner" component={Partner} />
          <Route path="/payment" component={Payment} />
          <Route path="/mutual" component={Mutual} />
          <Route exact  path="/Apps" component={Apps}/>
            <Route exact path="/Blog" component={Blog}/>
            <Route exact path="/Career" component={Career}/>
            <Route exact path="/About" component={About}/>
            <Route exact path="/Contact" component={Contact}/>
            <Route exact path="/Sitemap" component={Sitemap}/>
        </Switch>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
