import React from 'react'
import { contextoCart } from '../context/CartContext.jsx'
import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './Cart.css'

const Cart = (props) => {

	const { productos, deleteGroup } = useContext(contextoCart) ;

	const [estado , setEstado] = useState(productos)

	console.log("estado del componente")
	console.log(estado)
	console.log("productos del componente")
	console.log(productos)

    return (
        <>
        	<ul>
            	{productos.map((producto)=>(
            		<li key={producto.item.id} className="cartItem">
            			<p>Producto : {producto.item.descripcion}</p>
            			<p>Precio : {producto.item.precio}</p>
            			<p>Cantidad : {producto.quantity}</p>

            			<button onClick={()=>{
            				deleteGroup(producto.item.id) ;
            				console.log("estado")
            				console.log(estado)
            				console.log("productos")
            				console.log(productos)

        					setEstado([])

            			}}>Eliminar</button>
            			
            		</li>
            	))}
            </ul>

            <h2>Precio Total :</h2>
            <Link to="/"><button>Seguir Comprando</button></Link>

        </>
    );
}

export default Cart
