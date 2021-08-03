import React, {useState} from "react";
import brand from '../../assets/img/event-now.jpg';
import {Link} from "react-router-dom";

let Register = () => {
    let [user , setUser] = useState({
        name : '',
        email : '',
        password : ''
    });

    let [userError , setUserError] = useState({
        nameError : '',
        emailError : '',
        passwordError : ''
    });

    let validateUsername = (event) => {
        setUser({...user , [event.target.name] : event.target.value});
        let regExp = /^[a-zA-Z0-9]{4,10}$/;
        if(regExp.test(event.target.value)){
         setUserError({...userError , nameError: 'Enter a proper Username'});
        }
        else{
            setUserError({...userError , nameError: ''});
        }
    }
    return (
        <React.Fragment>
            <pre>{JSON.stringify(user)}</pre>
            <pre>{JSON.stringify(userError)}</pre>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 m-auto">
                              <div className="card animated zoomIn">
                                  <div className="card-header bg-teal text-white text-center">
                                      <p className="h4">Register Here</p>
                                  </div>
                                  <div className="card-body bg-light">
                                      <from>
                                          <div className="form-group">
                                              <input
                                              name="name"
                                              value={user.name}
                                              onChange={validateUsername}
                                               type="text" className={`form-control`} placeholder="Name"/>
                                          </div>
                                          <div className="form-group">
                                              <input
                                              name="email"
                                              value={user.email} 
                                              type="email" className="form-control" placeholder="Email"/>
                                          </div>
                                          <div className="form-group">
                                              <input
                                              name="password"
                                              value={user.password}
                                               type="password" className="form-control" placeholder="Password"/>
                                          </div>
                                          <div>
                                            <input type="submit" value="Register" className="btn btn-teal btn-sm"/>
                                          </div>
                                          <small>
                                              Already hava an Account ? <Link to="/users/login" className="font-weight-bold text-white">Login</Link>
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
export default Register;