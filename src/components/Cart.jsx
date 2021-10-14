import React , { useContext } from 'react'
import CartForm from '../components/CartForm.jsx'
import ContextoCart from '../context/CartContext.jsx'
import { Link } from 'react-router-dom'
import { firestore } from '../Firebase'

import '../styles/Cart.css'

const Cart = (props) => {

	const { productos, deleteGroup, clearCart, total } = useContext(ContextoCart) ;

	const confirmCart = (name , phone , mail) => {
		const oDate = new Date()
		const dateAndTime = `${oDate.getMonth()}-${oDate.getDate()}-${oDate.getFullYear()} , ${oDate.getHours()}:${oDate.getMinutes().length === 1?'0':''}${oDate.getMinutes()}:${oDate.getSeconds().length === 1?'0':''}${oDate.getSeconds()}hs`
		const newCollection = firestore.collection("orders") 
		const formattedProds = productos.map(element=>(
			{
				id:element.item.id,
				title:element.item.description,
				price:element.item.price
			}
		))

		const order =
			{
				buyer:
				{
					name:name,
					phone:phone,
					email:mail
				},
				items:formattedProds,
				date:dateAndTime,
				total:total
			}

		const query = newCollection.add(order)
		query.then( ()=>{console.log("orden finalizada")} )
	}

    return (
        <>
        	{productos.length !== 0
	        	?	<div>
			        	<ul className="cartList">
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

			            <div className="cartBarContainer">
							<button onClick={ clearCart }>Vaciar carrito</button><br/>
							<Link to="/"><button>Seguir Comprando</button></Link>
							<h2>Precio Total: ${total}</h2>
						</div>

						<CartForm confirmCart={ confirmCart }/>
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
