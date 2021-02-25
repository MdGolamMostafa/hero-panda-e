import React from 'react';
import './Subscribe.css';
const Subscribe = () => {
    return (
        <div>
            <div id="subscribe" className = 'd-flex justify-content-center align-items-center bg-sizing my-3 '>
                <div>
                    <h1>LET'S STAY IN TOUCH</h1>
                    <h6>Get updates on sales, specials and more</h6>
                    <input class="form-control" type="text"/>
                    <button className = "btn btn-warning">SUBMIT</button>
                </div>
            </div>
            <footer className="text-center" >
                <small>@Panda ecommarce right reserved</small>
             </footer>
        </div>
    );
};

export default Subscribe;