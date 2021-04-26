import React from 'react'
import "../Checkout/styles.css"

const Checkout = () => {
    return (
        <div className="container">



            <div className="col-xs-12 col-md-10 col-md-offset-1">
                <table className="table table-responsive ">
                    <thead>
                        <tr>
                            <th>Product</th>
                            
                            <th>Quantity</th>
                            <th className="text-center">Price</th>
                            <th className="text-center">Total</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="col-xs-8 col-xs-6 ">
                                <div className="media">
                                    <a className="thumbnail pull-left" href="/"> <img className="media-object" src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png" style={{ width: "72px", height: "72px" }} alt="" /> </a>
                                    <div className="media-body">
                                        <h4 className="media-heading"><a href="/">Package</a></h4>
                                        <h5 className="media-heading"> by <a href="/">Brand name</a></h5>
                                        <span>Status: </span><span className="text-warning"><strong>In Stock</strong></span>
                                    </div>
                                </div>
                            </td>
                            
                            <td className="col-xs-1 col-xs-1" >
                                <input type="email" className="form-control" id="exampleInputEmail1" value="3"></input>
                            </td>
                            <td className="col-sm-1 col-md-1 text-center"><strong>$9.99</strong></td>
                            <td className="col-sm-1 col-md-1 text-center"><strong>$99.99</strong></td>
                            <td className="col-sm-1 col-md-1">
                                <button type="button" className="btn btn-danger">
                                    <span className="fa fa-remove"></span> Remove
                                    </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="col-sm-8 col-md-6">
                                <div className="media">
                                    <a className="thumbnail pull-left" href="/"> <img className="media-object" src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png" style={{ width: "72px", height: "72px" }} alt="" /> </a>
                                    <div className="media-body">
                                        <h4 className="media-heading"><a href="/">Package</a></h4>
                                        <h5 className="media-heading"> by <a href="/">Brand name</a></h5>
                                        <span>Status: </span><span className="text-warning"><strong>In Stock</strong></span>
                                    </div>
                                </div>
                            </td>
                            
                            <td className="col-sm-1 col-md-1" >
                                <input type="email" className="form-control" id="exampleInputEmail1" value="3"></input>
                            </td>
                            <td className="col-sm-1 col-md-1 text-center"><strong>$9.99</strong></td>
                            <td className="col-sm-1 col-md-1 text-center"><strong>$99.99</strong></td>
                            <td className="col-sm-1 col-md-1">
                                <button type="button" className="btn btn-danger">
                                    <span className="fa fa-remove"></span> Remove
                                    </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="col-sm-8 col-md-6">
                                <div className="media">
                                    <a className="thumbnail pull-left" href="/"> <img className="media-object" src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png" style={{ width: "72px", height: "72px" }} alt="" /> </a>
                                    <div className="media-body">
                                        <h4 className="media-heading"><a href="/">Package</a></h4>
                                        <h5 className="media-heading"> by <a href="/">Brand name</a></h5>
                                        <span>Status: </span><span className="text-warning"><strong>In Stock</strong></span>
                                    </div>
                                </div>
                            </td>
                            
                            <td className="col-sm-1 col-md-1" >
                                <input type="email" className="form-control" id="exampleInputEmail1" value="3"></input>
                            </td>
                            <td className="col-sm-1 col-md-1 text-center"><strong>$9.99</strong></td>
                            <td className="col-sm-1 col-md-1 text-center"><strong>$99.99</strong></td>
                            <td className="col-sm-1 col-md-1">
                                <button type="button" className="btn btn-danger">
                                    <span className="fa fa-remove"></span> Remove
                                    </button>
                            </td>
                        </tr>

                        <tr>
                            <td>   </td>
                            <td>   </td>
                            <td>   </td>
                            <td><h5>Subtotal</h5></td>
                            <td className="text-right"><h5><strong>$999.99</strong></h5></td>
                        </tr>
                        <tr>
                            <td>   </td>
                            <td>   </td>
                            <td>   </td>
                            <td><h5>Estimated shipping</h5></td>
                            <td className="text-right"><h5><strong>$9.999.99</strong></h5></td>
                        </tr>
                        <tr>
                            <td>   </td>
                            <td>   </td>
                            <td>   </td>
                            <td><h3>Total</h3></td>
                            <td className="text-right"><h3><strong>$9.999.99</strong></h3></td>
                        </tr>
                        <tr>
                            <td>   </td>
                            <td>   </td>
                            <td>   </td>
                            <td>
                                <button type="button" className="btn btn-success">
                                    <span className="fa fa-shopping-cart"></span> Continue Shopping
</button></td>
                            <td>
                                <button type="button" className="btn btn-success">
                                    Checkout <span className="fa fa-play"></span>
                                </button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
                
            
        </div>
    )
}

export default Checkout
