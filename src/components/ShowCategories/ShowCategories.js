import React from 'react';
import './ShoesCategories.css';
import shoe1 from '../images/shoe-1.png';
import shoe2 from '../images/shoe-2.png';
import shoe3 from '../images/shoe-3.png';
const ShoesCategories = () => {
    return (
        <div className="my-3">
        <h1>Shoes</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card h-100">
                <img src={shoe1} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Supply 350</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in </p>
                    <h5>$350</h5>
                    <button className = "btn btn-warning">Buy Now >></button>
                </div>
                
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                <img src={shoe2} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Nike 360</h5>
                    <p class="card-text">This card has supporting text below as a natural lead-in</p>
                    <h5>$350</h5>
                    <button className = "btn btn-warning">Buy Now >></button>
                </div>
                
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                <img src={shoe3} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Red Airmax</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in </p>
                    <h5>$350</h5>
                    <button className = "btn btn-warning">Buy Now >></button>
                </div>
                
                </div>
            </div>
            </div>
        </div>
    );
};

export default ShoesCategories;