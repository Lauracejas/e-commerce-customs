
import { getProduct } from "../utils/API";
import { getAllProducts } from "../utils/API";
import React, { useEffect, useState } from "react"
import {Link} from "react-router-dom"
// import { RightAside, RightMenu } from '../components';
// import CardCart from "../components/CardCart/CardCart"
// import Row from "react-bootstrap/Row"
// import Col from "react-bootstrap/Col"
// import HotCards from "../components/HotCards/HotCards";
import "./style.css"
import styled from "styled-components"

const Cart = (props) => {
    // const [open, setOpen] = useState(false);

    console.log(props)
    const [products, setProducts] = useState([]);

    const Link = ({ classNameName, children }) => (
        <div classNameName={classNameName}>
            {children}
        </div>
    );
    const StyledLink = styled(Link)` 
    color: palevioletred;
    font-weight: bold;
    `;

    const [product, setProduct] = useState({});

    useEffect(() => {
        getProduct(props)
            .then(product => {
                console.log(props);
                setProduct(product.data);
            }
            )
    }, [])
    // console.log(product)

    const handleSubmit = () => {
        getAllProducts().then(results => setProducts(results.data))

    }

    return (

        <div className="contianer mt-5 ">



            <div className="col-xs-12 col-md-10 col-md-offset-1">
                <table className="table table-responsive">
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
                                <a href="/">
                                <button type="button" className="btn btn-success">
                                    <span className="fa fa-shopping-cart"></span> Continue Shopping
                                </button></a>
                            </td>
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

export default Cart

{/* <RightAside open={open} setOpen={setOpen} products={products} />
    <RightMenu open={open} setOpen={setOpen} onClick={handleSubmit} /> */}
{/* <div classNameName="container">
<div classNameName="row">

    <CardCart
        product={product} />
</div>
</div> */}