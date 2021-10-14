import React , { useState , useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContextoCart from '../context/CartContext.jsx'
import { Link } from 'react-router-dom'

import '../styles/ItemCount.css'


const ItemCount = (props) => {
	
	const {stock , initial , item} = props ;
	const stockP = parseInt(stock) ;
	const initialP = parseInt(initial) ; 
	// context vars
	const { addProduct} = useContext(ContextoCart)
	// state
	const [contador , setContador] = useState(initialP) ;

	function cambiarContadorPlus() {
		setContador(contador + 1)
	}
	function cambiarContadorMinus() {
		setContador(contador - 1)
	}
	const countToInitial = () => {
		setContador(initial)
	}

	if (contador < 0) {
		cambiarContadorPlus()
	} else if (contador > stockP) {
		cambiarContadorMinus()
	}

	return (
		<>
			<div className="counter__container">
				<p>Stock { stockP - contador }</p>		
				<p>Comprar: { contador }</p>

				<div className="counter__buttonContainer">	
					<button className="buttonContainer__button" onClick={cambiarContadorMinus}><span>-</span></button>
					<button className="buttonContainer__button" onClick={cambiarContadorPlus}><span>+</span></button>
					
				</div>
				{/*<button onClick={ clickOnAdd } >Agregar al carrito</button>*/}
				<button onClick={ ()=>{addProduct(item,contador);countToInitial()} }>Agregar al carrito</button>
				<Link to="/cart"><button>Terminar mi compra</button></Link>

			</div>
		</>
)}

export default ItemCount 