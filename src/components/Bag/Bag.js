import React from 'react';
import "./Bag.css";
import bag1 from '../images/bag-1.png';
import bag2 from '../images/bag-2.png';
import bag3 from '../images/bag-3.png';
const Bag = () => {
    return (
        <div className = 'my-4'>
        <h1>Bag</h1>
            <div class="mt-2 row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card h-100">
                <img src={bag1} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Red bag</h5>
                    <h5>$125</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div class="card-footer">
                    <button className = "btn btn-warning">Buy Now >></button>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                <img src={bag2} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Blue Bag</h5>
                    <h5>$350</h5>
                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div class="card-footer">
                    <button className = "btn btn-warning">Buy Now >></button>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                <img src={bag3} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Black bag</h5>
                    <h5>$125</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                </div>
                <div class="card-footer">
                    <button className = "btn btn-warning">Buy Now >></button>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Bag;