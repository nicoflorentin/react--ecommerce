import cart_free from "../img/cart_free.png"
import Button from 'react-bootstrap/Button';

import { useState , useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { contextoCart } from '../context/CartContext.jsx'
import { Link } from 'react-router-dom'

const CartWidget = () => {



    return (

        <Link to="/cart"><Button variant="outline-warning"><img src={cart_free} className="cartWidget__icon" alt="" /></Button></Link>

    );
}

export default CartWidget
