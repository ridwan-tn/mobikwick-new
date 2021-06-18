import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import './ShowDetailed.css';
export default function ShowDetailed(props) {
	const location = useLocation();
	const [caption, setCaption] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	useEffect(() => {
		if (location.data.offerText) {
			setCaption(location.data.offerText);
		}
		if (location.data.imageUrl) {
			setImageUrl(location.data.imageUrl);
		}
	}, [location.data.offerText, location.data.imageUrl]);
	return (
		<>
			<div className="row">
				<div className="col-12">
					<nav className="breadcrumb" aria-label="breadcrumb">
						<ol className="breadcrumb">
							<li className="breadcrumb-item"><a href=" "> </a></li>
							<li className="breadcrumb-item active" aria-current="page">Library</li>
						</ol>
					</nav>
				</div>
			</div>
			<div className="row mt-3 show-details">
				<div className="col-12 col-md-12 col-lg-4 show-details-image-section">
					<img src={imageUrl} alt="" className=" show-details-image " />
				</div>
				<div className="col-12 caption bg-white col-md-12 col-lg-4 d-flex align-items-center justify-content-center flex-column">
					<p className="caption-text">{caption} </p>
					<span className="code-section">
						Code : <span className="code"> asdd</span>
					</span>
					<a href=" " className="mt-3" style={{ textDecoration: 'none' }}>
						{' '}
						Click here to copy code{' '}
					</a>
				</div>
				<div className="col-12 bg-white col-md-12 col-lg-4 d-flex shop-now" style={{ alignItems: 'center' }}>
					<button className="btn btn-primary padding shop-now-btn"> Shop Now</button>
				</div>
			</div>
			<div className="row social-share">
				<div className="col-12 d-flex align-items-center mt-2">
					<p>
						Social Share:{' '}
						<a href=" ">
							<i
								className="fab fa-facebook-square me-2"
								style={{ color: '#3F51B5', fontSize: '24px' }}
							></i>{' '}
						</a>{' '}
						<a href=" ">
							<i class="fab fa-twitter-square" style={{ color: '#04A9F5', fontSize: '24px' }}></i>
						</a>
					</p>
				</div>
			</div>
		</>
	);
}
