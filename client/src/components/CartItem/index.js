import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css"


const CartItem = ({ product, removeFromCart }) => {
    return (
        <tr>
            <td className="col-xs-8 col-xs-6 ">
                <div className="media">
                    <Link className="thumbnail pull-left" to={`/product/${product._id}`}> <img className="media-object" src={product.image} style={{ width: "72px", height: "72px" }} alt="" /> </Link>
                    <div className="media-body">
                        <h4 className="media-heading "><Link to={`/product/${product._id}`}>{product.name}</Link></h4>
                        <span>Status: </span><span className="text-warning"><strong>{product.countInStock} In Stock</strong></span>
                    </div>
                </div>
            </td>
            <td className="col-sm-1 col-md-1 text-center"><strong>${product.price}</strong></td>
            <td className="col-sm-1 col-md-1">
                <button type="button" className="btn btn-danger" onClick={() => removeFromCart(product._id)}>
                    <span className="fa fa-remove"></span> Remove
                </button>
            </td>
        </tr>
    );
}

export default CartItem;