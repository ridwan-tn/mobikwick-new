import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from 'react-router-dom';
import CardSlider from '../Components/CardSlider/CardSlider';
import SeeAll from '../Components/SeeAll/SeeAll';
import ShowDetailed from '../Components/productDetails/ShowDetailed';
import { offerDetailsContext } from '../Context/Offer&DealsContext';
import Carousels from '../Components/Carousels/Carousel'
import HeaderSection from '../Components/pageHeader/HeaderSection'
import Footer from '../Components/Footer/Footer'
import ElectricityPayment from '../Components/ElectricityPayments/ElectricityPayment';
export default function OffersDealsRoutes() {
	const { globalStore, sectionNames } = useContext(offerDetailsContext);
	const [store, setStore] = globalStore;
	let { path } = useRouteMatch();
	const [section] = sectionNames;
	return (
		<>
		<Router>
			<HeaderSection />
			<Carousels />
		<Switch>
			<Route exact  path="/offers" component={CardSlider} />

				{/* the Routes for component when Clicking the card */}
				 {store.map( items =>{
					return(
					<>
				
						<>
						{items.map( (item,index )=>(
							<>
					<Route  path={`${path}/${section[index]}/${item.brandName}`} component={ShowDetailed} />
					</>
				))}
		
					</>		
					
						</>
						)})}
			{/* the Routes for component when Clicking the card */}

			{ section.map( sectionName =>(
			<Route exact path={`${path}/${sectionName}`} component={ SeeAll } />
			))}

</Switch>
		<Footer/>
		</Router>

		</>
	);
}
