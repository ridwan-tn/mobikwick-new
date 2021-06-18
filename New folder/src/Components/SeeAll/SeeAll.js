import React, { useState } from 'react';
import { useLocation } from 'react-router';
import CardComponent from '../CardComponent/CardComponent';
import './SeeAll.css';
export default function SeeAll() {
	const location = useLocation();
	console.log(location.data.items);
	const [data, setData] = useState(location.data.items);
	const [section, setSection] = useState(location.data.section);
	return (
		<div className="row row-component">
			<h1 className="component-heading">{section}</h1>
			<div className="col-12">
				<div className="row card-items">
					{data.map((item) => (
						<div className="col-4 mb-4 width200" style={{ padding: 0, width: '327px' }}>
							<CardComponent
								brandName={item.brandName}
								imageUrl={item.imageUrl}
								offerText={item.offerText}
								brandimageUrl={item.brandimageUrl}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
