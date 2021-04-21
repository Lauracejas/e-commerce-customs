import React from 'react'
import data from '../data'
import { Link } from 'react-router-dom'
import "./style.css";

const Dashboard = (props) => {
    console.log(props.match.params.id)
    const details = data.product.find(x => x._id === props.match.params.id);
    return (<div>
        <div className="back-to-result">
            <Link to="/">Back to result</Link>
        </div>
        <div className="details">
            <div className="details-image">
                <img src={details.image} alt="product"></img>
            </div>
            <div className="details-info">
                <ul>
                    <h4>{details.name}</h4>
                    <li><b>Price: $ {details.price}</b></li>
                </ul>

            </div>
        </div>
        <div className="action-details">
            <ul>
                <li>Price: {details.price}</li>
                <li>Status: {details.status}</li>
                <li>Qty: <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
                </li>
                <li>
                    <button>Add to cart</button>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default Dashboard
