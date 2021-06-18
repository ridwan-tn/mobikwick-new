import React, { createRef, useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import CardComponent from '../CardComponent/CardComponent';
import './CardSlider.css';
import { offerDetailsContext } from '../../Context/Offer&DealsContext';
export default function CardSlider() {


	var  carousel_container = useRef([]);
		carousel_container.current = []
	
	const {globalStore, sectionNames} = useContext(offerDetailsContext);
	const [store,setStore] =  globalStore
	const [section ] = sectionNames
	const [current_item, setCurrent_item] = useState(2)
	const [current_items,setCurrent_items] = useState([])


    const prevBtn = ( items )=>{
       
      }
	  
    const nextBtn = ( items )=>{
         
      }


	  const addRefs = ( element )=>{
		 if(element&& !carousel_container.current.includes(element)){
				carousel_container.current.push(element)
			}
	
		}
	return (
		<div className="row ">
			{store.map((items, index) => {
				
				return (
					<div className="row mt-5" >
					
						<div className="col-12 " style={{ display: 'flex', justifyContent: 'space-between' }}>
							<h3 className="component-heading"> {section[index]}</h3>
							<div className="buttons">
								<button className="prev-btn" onClick={ 
									()=>{
											if(current_item === 0){
												setCurrent_item(current_items.length - 5)
												carousel_container.current[index].style.transition = 'none'
												carousel_container.current[index].style.transform = `translate(${-325  * current_item}px)`
											}else{
												setCurrent_item(current_item - 1)
												carousel_container.current[index].style.transition  = 'ease'
												carousel_container.current[index].style.transitionDuration = '0.5s'
												carousel_container.current[index].style.transform = `translate(${-325  * current_item}px)`
											}  
									}
								}> </button>
								<button className="next-btn" onClick={ 
									()=>{
										if(current_item === 0){
											setCurrent_item(current_items.length - 4)
												carousel_container.current[index].style.transition = 'none'
												carousel_container.current[index].style.transform = `translate(${-325  * current_item}px)`
											  }else{
											console.log("prev");
										 setCurrent_item(current_item + 1)
										 carousel_container.current[index].style.transition  = 'ease'
										 carousel_container.current[index].style.transitionDuration = '0.5s'
										 carousel_container.current[index].style.transform = `translate(${-325  * current_item}px)`
										}  
								}}> </button>
								<Link to={{pathname:`/offers/${section[index]}`, data:{items:store[index],section:section[index]}}}>
									<button className="see-all-btn">See All </button>
								</Link>
							</div>
						</div>
						<SwipeableViews enableMouseEvents containerStyle={{ overflow: 'hidden' }}>
							<div  className="card_container" key={index} ref= { addRefs }>
								
								{items.map((item,index) => {
									return(
									<CardComponent
										key={index}
										brandName={item.brandName}
										imageUrl={item.imageUrl}
										offerText={item.offerText}
										brandimageUrl={item.brandimageUrl}
										section= {section[index]}
									/>
								)})}
							</div>
						</SwipeableViews>
					</div>
				)
			})}
		</div>
	);
}
