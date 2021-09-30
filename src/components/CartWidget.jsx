import cart_free from "../img/cart_free.png"
import Button from 'react-bootstrap/Button';

import { useState , useEffect, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { contextoCart } from '../context/CartContext.jsx'
import { Link } from 'react-router-dom'

const CartWidget = (props) => {

	const {productos} = useContext(contextoCart)

    const number = productos.length


    return (

        <>

            <Link to="/cart"><Button variant="outline-warning"><img src={cart_free} className="cartWidget__icon" alt="" /></Button></Link>
            <p>{number}</p>
        </>
    );
}

export default CartWidget
