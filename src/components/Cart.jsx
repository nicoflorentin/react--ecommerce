import React , { useContext, useState } from 'react'
import ContextoCart from '../context/CartContext.jsx'
import { Link } from 'react-router-dom'
import { firestore } from '../Firebase'

import './Cart.css'

const Cart = (props) => {

	console.log('cart render')

	const [inputName, setInputName] = useState(null)
	const [inputPhone, setInputPhone] = useState(null)
	const [inputMail, setInputMail] = useState(null)
	const [confirm, setConfirm] = useState({})
	const { productos, deleteGroup, clearCart, setProductos,render } = useContext(ContextoCart) ;

	console.log(productos)
	var total = 0

	productos.forEach( (element) => {
		total += element.item.price*element.quantity
	});

	const formattedProds = productos.map(element=>(
			{
				id:element.item.id,
				title:element.item.description,
				price:element.item.price
			}
	))

	const storeName = (e) => {
		setInputName(e.target.value)
	}

	const storePhone = (e) => {
		setInputPhone(e.target.value)
	}

	const storeMail = (e) => {
		setInputMail(e.target.value)
	}

	const confirmCart = () => {
		const oDate = new Date()
		const dateAndTime = `${oDate.getMonth()}-${oDate.getDate()}-${oDate.getFullYear()} , ${oDate.getHours()}:${oDate.getMinutes().length == 1?'0':''}${oDate.getMinutes()}:${oDate.getSeconds().length == 1?'0':''}${oDate.getSeconds()}hs`
		const db = firestore
		const newCollection = firestore.collection("orders")

		const order =
			{
				buyer:
				{
					name:inputName,
					phone:inputPhone,
					email:inputMail
				},
				items:formattedProds,
					date:dateAndTime,
					total:total
			}
			
		console.log('order',order)
		setConfirm({...order})
		const query = newCollection.add(order)

		query.then( ()=>{console.log("orden finalizada")})
	}

    return (
        <>
        	{productos.length != 0
	        	?	<div>
			        	<ul>
			            	{productos.map((producto)=>(
			            		<li key={producto.item.id} className="cartItem">
			            			<p>Producto: {producto.item.description}</p>
			            			<p>Precio: ${producto.item.price}</p>
			            			<p>Cantidad: {producto.quantity}</p>
			            			<button
			            				onClick={()=>{
			            					deleteGroup(producto.item.id)
			            				}}
			            			>Eliminar</button>
			            			
			            		</li>
			            	))}
			            </ul>
			            <h2>Precio Total: ${total}</h2>
			            {/*FORM*/}
			            <p>Nombre :</p>
			            <input type="text" onChange={storeName}></input>
			            <p>Teléfono</p>
			            <input type="text" onChange={storePhone}></input>
			            <p>Email :</p>
			            <input type="text" onChange={storeMail}></input>
			            <br/>
			            <button onClick={ confirmCart }>Confirmar Compra</button>
			            <button onClick={ clearCart }>Vaciar carrito</button><br/>
			            <Link to="/"><button>Seguir Comprando</button></Link>
			        </div>
			        
		        :	<div>
					    <p>El carrito de compras está vacío!</p>
			        	<Link to="/"><button>Volver</button></Link>
		        	</div>
        	}
        </>
    );
}

export default Cart
