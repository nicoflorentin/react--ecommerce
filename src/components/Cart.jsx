import React from 'react'
import {useContext, useState} from 'react'
import { contextoCart } from '../context/CartContext.jsx'
import {Link} from 'react-router-dom'

const Cart = (props) => {

	const {productos} = useContext(contextoCart)

	const [total , setTotal] = useState()

	var suma = 0

	productos.forEach(element => {
		suma += element.quantity*element.item.precio
	});

	const deleteGroup = (id) => {
		productos.forEach(element => {
			if (id === element.item.id) {
				productos.splice(element,1)
				console.log(productos)
			}
		})
	};
	

    return (
        <>
        	<ul>
            	{productos.map((producto)=>(
            		<li>
            			<p>Producto : {producto.item.descripcion}</p>
            			<p>Precio : {producto.item.precio}</p>
            			<p>Cantidad : {producto.quantity}</p>
            			<button onClick={deleteGroup(producto.item.id)}>x</button>
            			
            		</li>
            	))}
            </ul>

            <h2>Precio Total : {suma}</h2>
            <Link to="/"><button>Seguir Comprando</button></Link>


        </>


    );
}

export default Cart
