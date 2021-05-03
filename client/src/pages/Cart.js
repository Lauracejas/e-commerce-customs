import { Link } from "react-router-dom"
import Row from "react-bootstrap/Row"
import "./style.css"
import CartItem from "../components/CartItem";

const Cart = (props) => {
 

    Array.prototype.sum = function (prop) {
        var total = 0
        for ( var i = 0, _len = this.length; i < _len; i++ ) {
            total += this[i][prop]
        }
        return total
    }

   const subtotal = () => {
        return props.products.sum('price');
   }

   const taxes = () => {
        return (subtotal() * 0.08);
   }
   
    const total = () => {
     return (taxes() + subtotal()).toFixed(2);
    }
    return (

        <div className="contianer mt-5 ">

            <div className="container-fluid co">
                <div className="container">

                    <div className="col-xs-12 col-md-10 col-md-offset-1">
                        <table className="table table-responsive ">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.products.map(product => <CartItem key={product.id} product={product} removeFromCart={props.removeFromCart} />)}
                                {!props.products.length && 
                                    <tr>
                                            <td colSpan="3">
                                                <h1>No Products in Cart</h1>
                                            </td>
                                    </tr>
                                }
                                {!!props.products.length &&
                                    <>
                                        <tr>
                                            <td>   </td>
                                            <td><h5>Subtotal</h5></td>
                                            <td className="text-right"><h5><strong>$ {subtotal()}</strong></h5></td>
                                        </tr>
                                        <tr>
                                            <td>   </td>
                                            <td><h5>Taxes</h5></td>
                                            <td className="text-right"><h5><strong>$ {taxes()}</strong></h5></td>
                                        </tr>
                                        <tr>
                                            <td>   </td>
                                            <td><h3>Total</h3></td>
                                            <td className="text-right"><h3><strong>$ {total()}</strong></h3></td>
                                        </tr>
                                        <tr>
                                            <td>   </td>
                                            <td>
                                                <Link to="/">
                                                    <button type="button" className="btn btn-success">
                                                        <span className="fa fa-shopping-cart"></span> Continue Shopping
                                                    </button>
                                                </Link>
                                            </td>
                                            <td>

                                                <button type="button" 
                                               onClick={props.clearCart}
                                                className="btn btn-warning"
                                                >
                                                    Purchase <span className="fa fa-play"></span>
                                                </button>

                                            </td>
                                        </tr>
                                    </>
                                }
                            </tbody>
                        </table>
                    </div>


                </div>
                <Row style={{ margin: "10px" }} />
            </div>
        </div>

    )
}

export default Cart

