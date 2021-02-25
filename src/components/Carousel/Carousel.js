import React from 'react';
import './Carousel.css';
import tv from '../images/tv.png';
import xbox from '../images/xbox.png';
import headphone from '../images/headphone.png';
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const CarouselSet = () => {
    return (
            <>
                <Carousel className='bg-sizing'>
                    <Carousel.Item>
                    <div className="row p-5 align-items-center">
                        <div className="col-md-7">
                            <h1>Mega LCD TV For Sports</h1>
                            <p>This the best tv in the world for people who just want to waste time in front of tv.</p>
                            <h1 className= ' text-warning'>$1200</h1>
                            <button className= 'btn btn-warning'>BUY NOW</button>
                        </div>
                        <div className="col-md-5">
                        <img src={tv} height = "100%" width="100%" alt=""/>
                        </div>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="row p-5 align-items-center">
                        <div className="col-md-7">
                        <h1>Mega LCD TV For Sports</h1>
                            <p>This the best tv in the world for people who just want to waste time in front of tv.</p>
                            <h1 className= ' text-warning'>$1200</h1>
                            <button className= 'btn btn-warning'>BUY NOW</button>
                        </div>
                        <div className="col-md-5">
                        <img src={xbox} height = "100%" width="100%" alt=""/>
                        </div>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="row p-5 align-items-center">
                        <div className="col-md-7">
                            <h1>Ear Bud Warmer</h1>
                            <p>Contray to popular belief,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, quas incidunt.</p>
                            <h1 className= ' text-warning'>$420</h1>
                            <button className= 'btn btn-warning'>BUY NOW</button>
                        </div>
                        <div className="col-md-5">
                        <img src={headphone} height = "100%" width="100%" alt="headphone"/>
                        </div>
                    </div>
                    </Carousel.Item>
                </Carousel>
            </>
    );
};

export default CarouselSet;