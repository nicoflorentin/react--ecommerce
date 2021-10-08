import React , { useState , useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContextoCart from '../context/CartContext.jsx'
import { Link } from 'react-router-dom'

import './ItemCount.css'


const ItemCount = (props) => {
	
	const {stock , initial , item} = props ;
	// parseo el stock y el initial
	const stockP = parseInt(stock) ;
	const initialP = parseInt(initial) ; 
	// defino las variables del estado
	const [contador , setContador] = useState(initialP) ;
	// traigo las variables del contexto
	const { productos, addProduct, removeProduct } = useContext(ContextoCart)

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