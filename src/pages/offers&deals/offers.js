import React from 'react';
import { Context } from '../../Context/Offer&DealsContext'
import OffersDealsRoutes from '../../Routes/OffersDealsRoutes';
import './offers.css'
export default function Offers() {
	return (
		
		<div className="offer-deals" style={{ width: '83%', float: 'right' ,marginBottom:"30px"}}>
			<Context>
				<OffersDealsRoutes/>
		</Context>
		</div>
	);
}
