import React from 'react';
import './Categories.css';
import watch from '../images/watch.png';
import bag from '../images/bag.png';
import shoes from '../images/shoes.png';
const Categories = () => {
    return (
        <div className ='categories my-5'>
            <div className="row">
                <div className=" col-md-4">
                    <div className="d-flex align-items-center justify-content-between watch">
                        <h1>Watch</h1>
                        <img src={watch} alt=""/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex align-items-center justify-content-between bag">
                    <h1>Bag</h1>
                    <img src={bag} alt=""/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex align-items-center justify-content-between shoes">
                    <h1>Shoes</h1>
                        <img src={shoes} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;