'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
const cars = [
	{id:1,name:"car1",price:"price1"},
	{id:2,name:"car2",price:"price2"},
	{id:3,name:"car3",price:"price3"},
	{id:4,name:"car4",price:"price4"},
	{id:5,name:"car5",price:"price5"},
	{id:6,name:"car6",price:"price6"},
	{id:7,name:"car7",price:"price7"},
	{id:8,name:"car8",price:"price8"},
]
const Cars = () => {
	const router = useRouter()
    return (
        <div className=''>
            
            <div className="featured-cars-content">
			<div className="row">

						{cars.map(c=>(
							<div onClick={()=>router.push(`/cars/${c.id}`)} key={c.id} className="col-lg-3 col-md-4 col-sm-6">
							<div className="single-featured-cars">
								<div className="featured-img-box">
									<div className="featured-cars-img">
										<img src={`assets/images/featured-cars/fc${c.id}.png`} alt="cars"/>
									</div>
									<div className="featured-model-info">
										<p>
											model: 2017
											<span className="featured-mi-span"> 3100 mi</span> 
											<span className="featured-hp-span"> 240HP</span>
											 automatic
										</p>
									</div>
								</div>
								<div className="featured-cars-txt">
									<h2><a href="#">{c.name}</a></h2>
									<h3>{c.price}</h3>
									<p>
										Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non. 
									</p>
								</div>
							</div>
						</div>
						))}
					
					</div>
			</div>
        </div>
    );
}

export default Cars;
