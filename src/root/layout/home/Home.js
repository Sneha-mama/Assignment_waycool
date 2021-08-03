import React from "react";
import {Link} from 'react-router-dom';

let Home = () => {
    return (
        <React.Fragment>
            <div className="landing-page">
                <div className="wrapper">
                    <div className="d-flex flex-column justify-content-center text-center align-items-center h-100"></div>
                </div>
                <h5 className="display-4">Let Book an Event</h5>
                <p className="lead px-4">Lorem ipsum dolor sit amet,consectetur adipisicing elit.
                </p>
                <Link to="/events/free" className="btn btn-danger btn-sm">Book Now</Link>
            </div>
        </React.Fragment>
    )
};
export default Home;