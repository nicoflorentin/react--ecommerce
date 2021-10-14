import React from 'react'

import cart_free from "../img/cart_free.png"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

const CartWidget = ({productos}) => {

    const cartQuantity = productos.length
    var cartStyle

    cartQuantity > 0
        ?   cartStyle = "outline-warning"
        :   cartStyle = "outline-dark"

    return (
        <>
            <Link to="/cart"><Button variant={ cartStyle }><img src={cart_free} className="cartWidget__icon" alt="" /></Button></Link>
            <p>{cartQuantity}</p>
        </>
    );
}

export default CartWidget
