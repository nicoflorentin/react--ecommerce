import React from 'react'
import { contextoCart } from '../context/CartContext.jsx'
import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './Cart.css'

const Cart = (props) => {

	const { productos, deleteGroup, clearCart } = useContext(contextoCart) ;

	const [estado , setEstado] = useState(productos)

    return (
        <>
        	{productos.length != 0 ?
        		<div>
		        	<ul>
		            	{productos.map((producto)=>(
		            		<li key={producto.item.id} className="cartItem">
		            			<p>Producto : {producto.item.descripcion}</p>
		            			<p>Precio : {producto.item.precio}</p>
		            			<p>Cantidad : {producto.quantity}</p>

		            			<button onClick={()=>{
		            				deleteGroup(producto.item.id) ;
		        					setEstado([])

		            			}}>Eliminar</button>
		            			
		            		</li>
		            	))}
		            </ul>

		            <h2>Precio Total :</h2>
		            <Link to="/"><button>Seguir Comprando</button></Link>
		            <button onClick={ ()=>{clearCart()} }>Vaciar carrito</button>
		        </div>

		        :

		        <div>
			        <p>El carrito de compras está vacío</p>
			        <Link to="/"><button>Volver</button></Link>
		        </div>

        	}
		        


        </>
    );
}

export default Cart
