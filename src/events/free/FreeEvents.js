import React from "react";

let FreeEvents = () => {
    return (
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-teal">Free Events</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                            <p className="h5">Total Available : 4</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <img src="https://www.eventsnow.com/files/events/16397-cube-matrix-online-chess-class-16069590791814073290.jpg"/>
                                      <div className="row">
                                          <div className="col">
                                <div className="card-body bg-light">
                                    <p className="h4">CUBE MATRIX ONLINE CHESS CLASS</p>
                                    <p>DATE : 6TH SEP 2020</p>
                                    <h6>Price : FREE</h6>
                                </div>
                                <div className="col">
                                    <button className="btn btn-teal btn-sm">Book Now</button>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};
export default FreeEvents;