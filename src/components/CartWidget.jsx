import React , { useContext, useEffect, useState } from 'react'

import cart_free from "../img/cart_free.png"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

const CartWidget = ({productos}) => {

    const cartQuantity = productos.length

    return (
        <>
            <Link to="/cart"><Button variant="outline-warning"><img src={cart_free} className="cartWidget__icon" alt="" /></Button></Link>
            <p>{cartQuantity}</p>
        </>
    );
}

export default CartWidget
