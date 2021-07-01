import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './Card.css';
export default function CardComponent({   brandName, imageUrl, offerText, brandimageUrl ,section }) {

let { url } = useRouteMatch();
	return (
		<div className=" col-4 col-sm-4  col-md-3 col-lg-3 mr">
			<Link to={{  
				pathname:`${url}/${section}/${brandName}`,
				data:{
					offerText,
					imageUrl
				}
				}}   style={{ textDecoration: 'none', color: 'inherit' }} >
				<div className="card offers-cards">
					<div className="card-img">
						<img src={imageUrl} className="card-img-top" alt="..." />
					</div>
					<div className="card-body">
						<div className="card-caption">
							<h5 className="card-title">{brandName}</h5>
							<p className="card-text">{offerText}</p>
						</div>
						<div className="brand-logo">
							<img src={brandimageUrl} alt="" />
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}
