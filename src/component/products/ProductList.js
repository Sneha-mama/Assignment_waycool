import React from "react";
import image1 from "../../component/asset/products/apple.webp";
class ProductList extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="col">
                        <p className="h3 text-success">Product List</p>
                        <p className="lead">Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header text-center bg-white">
                                  <img src={image1} alt="" width="200" height="200"/>
                            </div>
                            <div className="card-body">
                                <ul className="card-body">
                                    <li className="list-group-item">
                                        NAME :
                                    </li>
                                    <li className="list-group-item">
                                        Price :

                                    </li>
                                    <li className="list-group-item">
                                        Qty
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default ProductList;