import React from "react";
import {Link} from 'react-router-dom';
class ProductAdmin extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
               <div className="container">
                   <div className="row">
                       <div className="col">
                           <p className="h3 text-success">Product Admin</p>
                           <p className="lead">Lorem ipsum dolor sit amet.</p>
                           <Link to='/products/create'className="btn btn-success btn-sm">Create New</Link>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col">
                           <table className="table table-hover text-center table-success table-striped">
                               <thead className="bg-dark text-white">
                                   <tr>
                                       <th>SNO</th>
                                        <th>Product</th>
                                        <th>NAME</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Actions</th>
                                       </tr>
                               </thead>
                               <tbody>

                               </tbody>
                           </table>
                       </div>
                   </div>
                   </div>           
            </React.Fragment>
        );
    }
}
export default ProductAdmin;