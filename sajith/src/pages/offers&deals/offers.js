import React from 'react';
import { Context } from '../../Context/Offer&DealsContext'
import OffersDealsRoutes from '../../Routes/OffersDealsRoutes';

export default function Offers() {
	return (
		
		<div style={{ width: '83%', float: 'right' ,marginBottom:"30px"}}>
			<Context>
				<OffersDealsRoutes/>
		</Context>
		</div>
	);
}
