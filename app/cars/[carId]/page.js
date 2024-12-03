import Head from '@/components/layout/Head';
import React from 'react';
export const generateMetadata = ({params,searchParams})=>{
return{
	title:`car${params.carId}`,
}
}

const Page = ({params,searchParams}) => {
    console.log(params);
    
    return (
        <div>
            <Head/>
  <div className="row">
						<div className="col-lg-3 col-md-4 col-sm-6">
							<div className="single-featured-cars">
								<div className="featured-img-box">
									<div className="featured-cars-img">
										<img src={`/assets/images/featured-cars/fc${params.carId}.png`} alt="cars"/>
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
									<h2><a href="#">{searchParams.title}</a></h2>
									<h3>$89,395</h3>
									<p>
										Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non. 
									</p>
								</div>
							</div>
						</div>
						
					</div>
        </div>
    );
}

export default Page;
