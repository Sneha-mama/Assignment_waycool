import React from "react";
import brand from '../../assets/img/event-now.jpg';
import {Link} from "react-router-dom";
let Login = () => {
    return (
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 m-auto">
                              <div className="card animated zoomIn">
                                  <div className="card-header bg-teal text-white text-center">
                                      <p className="h4">Login Here</p>
                                  </div>
                                  <div className="card-body bg-light">
                                      <from>
                                          <div className="form-group">
                                              <input type="email" className="form-control" placeholder="Email"/>
                                          </div>
                                          <div className="form-group">
                                              <input type="password" className="form-control" placeholder="Password"/>
                                          </div>
                                          <div>
                                            <input type="submit" value="Login" className="btn btn-teal btn-sm"/>
                                          </div>
                                          <small>
                                              Don't hava an Account ? <Link to="/users/register" className="font-weight-bold text-white">Register</Link>
                                          </small>
                                      </from>
                                  </div>
                                  <div className="card-footer text-center">
                                      <img src={brand} alt="" width="150" height="80"/>
                                  </div>
                              </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};
export default Login;